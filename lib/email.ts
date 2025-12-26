import nodemailer from 'nodemailer'

// Get SMTP configuration from environment variables
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com'
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10)
const SMTP_SECURE = process.env.SMTP_SECURE === 'true' // Convert string to boolean
const EMAIL_USER = process.env.SMTP_USER || process.env.EMAIL_USER || 'training.renova@gmail.com'
const EMAIL_PASS = process.env.EMAIL_PASS || process.env.SMTP_PASS

// Create transporter with explicit SMTP configuration
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE, // true for 465, false for other ports
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
})

type SendEmailOptions = {
  to: string
  subject: string
  text?: string
  html?: string
}

export async function sendEmail({ to, subject, text, html }: SendEmailOptions) {
  if (!EMAIL_PASS) {
    throw new Error('EMAIL_PASS or SMTP_PASS must be set in environment variables. Use a Gmail App Password.')
  }

  if (!EMAIL_USER) {
    throw new Error('SMTP_USER or EMAIL_USER must be set in environment variables.')
  }

  try {
    await transporter.sendMail({
      from: EMAIL_USER,
      to,
      subject,
      text,
      html,
    })
  } catch (error) {
    console.error('Nodemailer error:', error)
    throw error
  }
}

// Export the email address for use in other parts of the application
export const FROM_EMAIL = EMAIL_USER