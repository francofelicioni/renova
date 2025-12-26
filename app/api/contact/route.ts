import { NextResponse } from 'next/server'
import { sendEmail, FROM_EMAIL } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Support both old format (name, email, message) and new format (nombre, email, objetivo, etc.)
    const name = body.name || body.nombre
    const email = body.email
    const message = body.message || body.objetivo
    const pais = body.pais
    const nivel = body.nivel
    const plan = body.plan

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields' },
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

    // Build email content
    let emailText = `From: ${name} <${email}>\n`
    if (pais) emailText += `Country: ${pais}\n`
    if (nivel) emailText += `Level: ${nivel}\n`
    if (plan) emailText += `Plan: ${plan}\n`
    emailText += `\n${message}`

    let emailHtml = `
      <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
      ${pais ? `<p><strong>Country:</strong> ${escapeHtml(pais)}</p>` : ''}
      ${nivel ? `<p><strong>Level:</strong> ${escapeHtml(nivel)}</p>` : ''}
      ${plan ? `<p><strong>Plan:</strong> ${escapeHtml(plan)}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `

    await sendEmail({
      to: FROM_EMAIL,
      subject: `New contact message from ${name}`,
      text: emailText,
      html: emailHtml,
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