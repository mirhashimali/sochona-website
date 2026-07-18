import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // 1. Parse the incoming data from your frontend form
    const body = await req.json();
    const { name, email, phone, service } = body;

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

    // 3. Append the lead to your Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:E', // Appends to the first available row in Sheet1
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, phone, service, new Date().toLocaleString()]], // Adds a timestamp
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
      subject: `New Lead Alert: ${name}`,
      text: `
        Boom! You just got a new lead from the Sochona website.
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Industry: ${service}
        
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