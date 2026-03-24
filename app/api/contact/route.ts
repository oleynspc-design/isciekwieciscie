import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  serviceType: z.string(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #16a34a; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #22c55e; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Nowa wiadomość z formularza kontaktowego</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Imię i nazwisko:</div>
                <div class="value">${validatedData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${validatedData.email}</div>
              </div>
              ${validatedData.phone ? `
              <div class="field">
                <div class="label">Telefon:</div>
                <div class="value">${validatedData.phone}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Typ usługi:</div>
                <div class="value">${validatedData.serviceType}</div>
              </div>
              <div class="field">
                <div class="label">Wiadomość:</div>
                <div class="value">${validatedData.message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    await resend.emails.send({
      from: 'Iście Kwieciście <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'admin@isciekwieciscie.pl',
      reply_to: validatedData.email,
      subject: `Nowa wiadomość od ${validatedData.name} - ${validatedData.serviceType}`,
      html: emailHtml,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
