import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await sendEmail({
      to: process.env.EMAIL_USER!,
      subject: `New contact message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Error sending contact email', error)
    return NextResponse.json(
      { ok: false, error: 'Failed to send email' },
      { status: 500 }
    )
  }
}


