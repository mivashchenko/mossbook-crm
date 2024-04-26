import { db } from '@/lib/db'

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const resettoken = await db.passwordResetToken.findUnique({
      where: { token },
    })
    return resettoken
  } catch (error) {
    return null
  }
}

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    return await db.passwordResetToken.findFirst({
      where: { email },
    })
  } catch (error) {
    return null
  }
}
