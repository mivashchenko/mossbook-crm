'use client'

import { useAppSelector } from '@/lib/hooks'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export const BookingRedirectButtons = () => {
  const { specialist, date, services } = useAppSelector(
    (state) => state.newBooking
  )

  const router = useRouter()

  const pathname = usePathname()

  const hasSpecialist = !!specialist
  const hasDate = !!date
  const hasServices = services.length > 0

  const buttons = [
    {
      id: 1,
      text: 'Select services',
      show:
        (hasSpecialist || hasDate) &&
        !hasServices &&
        pathname !== '/booking/select-services',
      disabled: !hasServices && pathname === '/booking/select-services',
      redirect: '/booking/select-services',
    },
    {
      id: 2,
      show:
        hasSpecialist && !hasDate && pathname !== '/booking/select-date-time',
      text: 'Select date',
      disabled: !hasServices && !hasSpecialist,
      redirect: '/booking/select-date-time',
    },
    {
      id: 3,
      show: !hasSpecialist && pathname !== '/booking/select-specialist',
      text: 'Select specialist',
      disabled: !hasServices && pathname === '/booking/select-services',
      redirect: '/booking/select-specialist',
    },
    {
      id: 4,
      show: hasSpecialist && hasDate && hasServices,
      text: 'Confirm',
      redirect: '/booking/confirm',
    },
  ]

  return (
    <div className={'flex gap-2 p-2'}>
      {buttons
        .filter((btn) => {
          return btn.show
        })
        .map((button) => {
          return (
            <Button
              onClick={() => {
                router.push(button.redirect)
              }}
              disabled={button.disabled}
              key={button.id}
            >
              {button.text}
            </Button>
          )
        })}
    </div>
  )
}
