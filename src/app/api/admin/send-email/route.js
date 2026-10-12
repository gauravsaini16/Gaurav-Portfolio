import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

async function isAdmin() {
  const store = await cookies();
  const token = store.get('admin_token')?.value;
  if (!token) return false;
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    await jwtVerify(token, secret);
    return true;
  } catch {
    return false;
  }
}

export async function POST(request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const to = formData.get('to');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const file = formData.get('file');

    if (!to || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');
    const profileImage = siteUrl
      ? `<img src="${siteUrl}/photo/about%20me.webp" alt="Gaurav Saini" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid #ff6b1a; margin-bottom: 16px;" />`
      : '';
    const websiteLink = siteUrl
      ? `<p style="margin: 4px 0 0;"><a href="${siteUrl}" style="color: #ff6b1a; text-decoration: none; font-weight: bold;">${siteUrl.replace(/^https?:\/\//, '')}</a></p>`
      : '';

    let attachments = [];
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // Note: If you do not have a verified domain in Resend, 
    // you can only send emails to the email address registered with your Resend account.
    // To send to "any mailer", you must verify a custom domain in the Resend dashboard 
    // and change the 'from' address below to something like 'hello@yourdomain.com'.
    const { data, error } = await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Gaurav Portfolio <onboarding@resend.dev>',
      to: to,
      subject: subject,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #080808; color: #ffffff; padding: 40px; border-radius: 16px; border: 1px solid #222;">
          <div style="text-align: center; margin-bottom: 30px;">
            ${profileImage}
            <h2 style="margin: 0; color: #fff; font-size: 24px; letter-spacing: -0.5px;">Gaurav Saini</h2>
            <p style="margin: 4px 0 0; color: #ff6b1a; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Full-Stack Developer</p>
          </div>
          <hr style="border: none; border-top: 1px solid #222; margin: 0 0 30px;" />
          <div style="font-size: 15px; line-height: 1.7; color: #d4d4d4; white-space: pre-wrap;">${message}</div>
          <hr style="border: none; border-top: 1px solid #222; margin: 40px 0 20px;" />
          <div style="text-align: center; color: #666; font-size: 12px;">
            <p style="margin: 0;">Sent directly from</p>
            ${websiteLink}
          </div>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Save the sent email to the inquiries database so the admin can see the history
    await supabase.from('inquiries').insert([{
      name: 'Sent by Gaurav',
      email: to,
      message: `SUBJECT: ${subject}\n\n${message}`,
      read: true // automatically mark sent emails as read
    }]);

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error('Send email error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
