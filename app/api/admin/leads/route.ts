import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

// Fetch all leads
export async function GET() {
  try {
    const sheets = getSheetsClient();
    const result = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A2:G",
    });

    const rows = result.data.values || [];
    const leads = rows.map((row, idx) => ({
      row: idx + 2, // actual sheet row number, used for updates
      name: row[0] || "",
      email: row[1] || "",
      phone: row[2] || "",
      service: row[3] || "",
      timestamp: row[4] || "",
      status: row[5] || "No Answer",
      assignedTo: row[6] || "",
    }));

    return NextResponse.json({ leads });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

// Update a single lead's Status and/or Assigned To
export async function PATCH(req: NextRequest) {
  try {
    const { row, status, assignedTo } = await req.json();

    if (!row) {
      return NextResponse.json({ error: "Missing row number" }, { status: 400 });
    }

    const sheets = getSheetsClient();
    const data = [];

    if (status !== undefined) {
      data.push({ range: `Sheet1!F${row}`, values: [[status]] });
    }
    if (assignedTo !== undefined) {
      data.push({ range: `Sheet1!G${row}`, values: [[assignedTo]] });
    }

    if (data.length === 0) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      requestBody: {
        valueInputOption: "USER_ENTERED",
        data,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating lead:", error);
    return NextResponse.json({ error: "Failed to update lead" }, { status: 500 });
  }
}