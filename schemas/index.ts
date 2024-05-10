import * as z from 'zod'
import { ServiceCategory, UserRole } from '@prisma/client'

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    isTwoFactorEnabled: z.optional(z.boolean()),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      return !(data.password && !data.newPassword)
    },
    {
      message: 'New password is required',
      path: ['newPassword'],
    }
  )
  .refine(
    (data) => {
      return !(data.newPassword && !data.password)
    },
    {
      message: 'Password is required',
      path: ['password'],
    }
  )

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
  code: z.optional(z.string()),
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
})

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
})

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Minimum 6 characters required',
  }),
})

export const NewEmployeeSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  email: z.string().email({
    message: 'Email is required',
  }),
  phone: z.string().min(1, {
    message: 'Phone is required',
  }),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
})

export const NewServiceSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  price: z.string().min(1, {
    message: 'Price is required',
  }),
  duration: z.string().min(1, {
    message: 'Duration is required',
  }),
  description: z.optional(z.string()),
  category: z.enum([
    ServiceCategory.HAIR,
    ServiceCategory.NAILS,
    ServiceCategory.MASSAGE,
    ServiceCategory.FACIAL,
    ServiceCategory.WAXING,
    ServiceCategory.MAKEUP,
  ]),
})

export const NewCustomerSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  email: z.string().email({
    message: 'Email is required',
  }),
  phone: z.string().min(1, {
    message: 'Phone is required',
  }),
})

export const NewAppointmentSchema = z.object({
  start: z.string().refine((dateStr) => !isNaN(Date.parse(dateStr)), {
    message: 'Invalid date format',
  }),
  end: z.string().refine((dateStr) => !isNaN(Date.parse(dateStr)), {
    message: 'Invalid date format',
  }),
  customerId: z.string(),
  employeeId: z.string(),
  services: z.string().array().min(1),
})
