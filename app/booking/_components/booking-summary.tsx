'use client'

import { useAppSelector } from '@/lib/hooks'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { namePlateColors, nameToInitials } from '@/utils'
import { format } from 'date-fns'

export const BookingSummary = () => {
  const { specialist, date, services } = useAppSelector(
    (state) => state.newBooking
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking details</CardTitle>
      </CardHeader>
      <CardContent className={'flex flex-col gap-4'}>
        {specialist && (
          <Card>
            <CardHeader>
              <CardTitle>Specialist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={'flex items-center'}>
                <Avatar className={'h-12 w-12'}>
                  <AvatarImage
                    src={specialist.image || undefined}
                    alt='@shadcn'
                  />
                  <AvatarFallback
                    style={{
                      background:
                        namePlateColors[
                          nameToInitials('Salon name').slice(0, 1) as string
                        ],
                    }}
                  >
                    {nameToInitials('Salon name')}
                  </AvatarFallback>
                </Avatar>
                <div className={'p-2'}>
                  <CardTitle>{specialist.name}</CardTitle>
                  <CardDescription>Salon address</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        {date && (
          <Card>
            <CardHeader>
              <CardTitle className={'font-semibold'}>Date</CardTitle>
              <CardDescription>{format(date, 'PPpp')}</CardDescription>
            </CardHeader>
          </Card>
        )}
        <Card className={'flex flex-col gap-4'}>
          <CardHeader>
            <CardTitle>Services</CardTitle>
          </CardHeader>
          <CardContent>
            {services.map((service) => {
              return (
                <div key={service.id} className={'mb-2'}>
                  <div className={'rounded-xl border p-2'}>
                    <div className={'flex items-center justify-between'}>
                      <div className={'flex flex-col items-start'}>
                        <div className={'ml-2 font-semibold'}>
                          {service.name}
                        </div>
                        <div className={'ml-2 font-semibold'}>
                          price: ${service.price}
                        </div>
                        <div className={'ml-2 font-semibold'}>
                          duration: {service.price} min
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}
