import { UserRole } from '@prisma/client'

export type Employee = {
  id: string
  name: string | null
  email: string | null
  phone: string | null
  image: string | null
  role: UserRole
}
