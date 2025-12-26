import { NextResponse } from 'next/server'
import { sendEmail, FROM_EMAIL } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { ok: false, error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Simple HTML escaping function
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    }

    // Send notification email to admin
    const emailText = `New lead magnet signup:\n\nEmail: ${email}\n\nSomeone signed up for the free guide: "5 ajustes para recomponer tu cuerpo si ya entrenás"`

    const emailHtml = `
      <p><strong>New lead magnet signup:</strong></p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p>Someone signed up for the free guide: "5 ajustes para recomponer tu cuerpo si ya entrenás"</p>
    `

    await sendEmail({
      to: FROM_EMAIL,
      subject: `New lead magnet signup: ${email}`,
      text: emailText,
      html: emailHtml,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error sending lead magnet email', error)
    return NextResponse.json(
      { ok: false, error: 'Failed to process signup' },
      { status: 500 }
    )
  }
}

