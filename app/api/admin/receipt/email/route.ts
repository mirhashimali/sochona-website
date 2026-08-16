import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { pdfBase64, invoiceNumber, clientName } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Receipt Generated: ${invoiceNumber} — ${clientName || "Client"}`,
      text: `Receipt ${invoiceNumber} for ${clientName || "a client"} is attached.`,
      attachments: [
        {
          filename: `${invoiceNumber}.pdf`,
          content: pdfBase64,
          encoding: "base64",
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error emailing receipt:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}