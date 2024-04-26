import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL as string,
    to: email,
    subject: '2FA Code',
    text: ``,
    html: `<p>Your @FA Code: ${token}</p>`,
  })
}

export const sendPasswordResetTokenEmail = async (
  email: string,
  token: string
) => {
  const resetLink = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/new-password?token=${token}`

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL as string,
    to: email,
    subject: 'Reset your password',
    text: `Click this link to reset your password: ${resetLink}`,
    html: `<p><a href="${resetLink}">Click here to reset your password</a></p>`,
  })
}

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL as string,
    to: email,
    subject: 'Verify your email',
    text: `Click this link to verify your email: ${confirmLink}`,
    html: `<p><a href="${confirmLink}">Click here to verify your email</a></p>`,
  })
}
