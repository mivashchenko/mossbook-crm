import { db } from '@/lib/db'

export const getVerificationTokenByToken = async (token: string) => {
  try {
    return db.verificationToken.findUnique({
      where: {
        token,
      },
    })
  } catch (error: any) {
    return null
  }
}

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    return db.verificationToken.findFirst({
      where: {
        email,
      },
    })
  } catch (error: any) {
    return null
  }
}
