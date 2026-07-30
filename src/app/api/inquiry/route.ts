import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, product, message } = body;

    // Validate required fields
    const missing: string[] = [];
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      missing.push('name');
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      missing.push('email');
    }
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      missing.push('message');
    }

    if (missing.length > 0) {
      return NextResponse.json(
        { success: false, error: `Missing or invalid required fields: ${missing.join(', ')}` },
        { status: 400 },
      );
    }

    // Validate optional fields if provided
    if (phone && typeof phone !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number format' },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Message must be under 5000 characters' },
        { status: 400 },
      );
    }

    // In production: send email via Resend / SendGrid / nodemailer / etc.
    console.log('[Inquiry]', {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() ?? null,
      company: company?.trim() ?? null,
      product: product?.trim() ?? null,
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully. We will respond within 24 hours.',
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Internal server error. Please try again later.' },
      { status: 500 },
    );
  }
}
