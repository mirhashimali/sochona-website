import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service } = body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E", 
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, phone, service, new Date().toLocaleString()]],
      },
    });

    return NextResponse.json({ success: true, message: "Lead saved!" });
  } catch (error) {
    console.error("Google Sheets Error:", error);
    return NextResponse.json({ success: false, message: "Failed to save lead" }, { status: 500 });
  }
}