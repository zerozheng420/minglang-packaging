import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT_EMAIL = "sales@minglangpackaging.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, product, message } = body;

    // Validate required fields
    const missing: string[] = [];
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      missing.push("name");
    }
    if (!email || typeof email !== "string" || !email.includes("@")) {
      missing.push("email");
    }
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      missing.push("message");
    }

    if (missing.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: `Missing or invalid required fields: ${missing.join(", ")}`,
        },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Message must be under 5000 characters" },
        { status: 400 }
      );
    }

    const inquiryData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      company: company?.trim() || null,
      product: product?.trim() || null,
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    };

    // Try sending via Resend, fallback to console log
    try {
      if (process.env.RESEND_API_KEY) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Minglang Packaging <noreply@minglangpackaging.com>",
          to: RECIPIENT_EMAIL,
          subject: `新询价 / New Inquiry from ${inquiryData.name}${inquiryData.company ? ` (${inquiryData.company})` : ""}`,
          html: `
            <h2>New Inquiry</h2>
            <table style="border-collapse:collapse;width:100%;max-width:600px;">
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;width:120px;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${inquiryData.name}</td></tr>
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${inquiryData.email}</td></tr>
              ${inquiryData.phone ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${inquiryData.phone}</td></tr>` : ""}
              ${inquiryData.company ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${inquiryData.company}</td></tr>` : ""}
              ${inquiryData.product ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Product</td><td style="padding:8px;border-bottom:1px solid #eee;">${inquiryData.product}</td></tr>` : ""}
              <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${inquiryData.message.replace(/\n/g, "<br>")}</td></tr>
              <tr><td style="padding:8px;font-weight:bold;">Received</td><td style="padding:8px;">${inquiryData.receivedAt}</td></tr>
            </table>
          `,
        });
        console.log("[Inquiry] Email sent successfully via Resend");
      } else {
        console.log("[Inquiry] RESEND_API_KEY not set, logging inquiry:", JSON.stringify(inquiryData, null, 2));
      }
    } catch (emailError) {
      console.error("[Inquiry] Failed to send email, logging inquiry:", JSON.stringify(inquiryData, null, 2));
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry submitted successfully. We will respond within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
