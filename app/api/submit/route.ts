import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // 1. Parse the incoming data from frontend form
    const body = await req.json();
    const {
      name = '',
      contact = '',
      email = '',
      phone = '',
      business = '',
      service = '',
      challenge = '',
      variant = 'Global / North America',
    } = body;

    // Resolve contact information
    const isContactEmail = contact && contact.includes('@');
    const resolvedEmail = email || (isContactEmail ? contact : '');
    const resolvedPhone = phone || (!isContactEmail ? contact : '');

    // Resolve business and challenge
    const resolvedBusiness = business || service || 'Not specified';
    const resolvedChallenge = challenge ? challenge.trim() : '';

    // Col D: We combine business and challenge so existing Google Sheets
    // and /admin/leads dashboard display the challenge without column shifting!
    const colDService = resolvedChallenge
      ? `${resolvedBusiness} — Challenge: ${resolvedChallenge}`
      : resolvedBusiness;

    const timestamp = new Date().toLocaleString();

    // 2. Authenticate with Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // The replace() function ensures Netlify reads the line breaks in your key correctly
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // 3. Append the lead to Google Sheet
    // Columns:
    // A: Name
    // B: Email
    // C: Phone / WhatsApp
    // D: Service / Business (includes Challenge summary)
    // E: Timestamp
    // F: Status (default "No Answer" for Admin CRM)
    // G: Assigned To (blank for Admin CRM)
    // H: Challenge (Standalone dedicated column if user adds Column H)
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:H',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            name,
            resolvedEmail,
            resolvedPhone,
            colDService,
            timestamp,
            'No Answer',
            '',
            resolvedChallenge,
          ],
        ],
      },
    });

    // 4. Configure the Email Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 5. Send the Email Notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: `admin@sochona.net, ${process.env.EMAIL_USER}`,
      subject: `🔥 New Lead Alert [${variant}]: ${name}`,
      text: `
Boom! You just got a new lead from the Sochona website.

==================================================
AUDIENCE / SOURCE: ${variant}
==================================================
• Name: ${name}
• Direct Contact: ${resolvedPhone || resolvedEmail || contact}
• WhatsApp / Phone: ${resolvedPhone || 'N/A'}
• Email: ${resolvedEmail || 'N/A'}
• Business & Website: ${resolvedBusiness}
• Biggest Challenge: ${resolvedChallenge || 'None specified'}
• Time: ${timestamp}
==================================================

Get to work!
      `,
    });

    // 6. Return a Success Response to the frontend
    return NextResponse.json(
      { message: 'Lead successfully saved and notification sent' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}