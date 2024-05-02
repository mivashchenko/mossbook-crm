'use client'
import Link from 'next/link'
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  LuCalendarCheck,
  LuCheck,
  LuListChecks,
  LuPlus,
  LuUsers2,
} from 'react-icons/lu'
import { useAppSelector } from '@/lib/hooks'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { namePlateColors, nameToInitials } from '@/utils'
import { format } from 'date-fns'

export const BookingList = () => {
  const selectedSpecialist = useAppSelector(
    (state) => state.newBooking.specialist
  )

  const selectedDate = useAppSelector((state) => state.newBooking.date)

  const actionItems = [
    {
      id: 1,
      name: 'Specialist',
      icon: <LuUsers2 className={'h-5 w-5'} />,
      redirect: '/booking/select-specialist',
      selected: selectedSpecialist,
      renderSelected: () => {
        return (
          selectedSpecialist && (
            <div className={'mt-2 flex items-center justify-between'}>
              <Avatar className={'h-12 w-12'}>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@shadcn'
                />
                <AvatarFallback
                  style={{
                    background:
                      namePlateColors[
                        nameToInitials(selectedSpecialist.name || '').slice(
                          0,
                          1
                        ) as string
                      ],
                  }}
                >
                  {nameToInitials(selectedSpecialist.name || '')}
                </AvatarFallback>
              </Avatar>
              <div className={'ml-4 flex w-full flex-col'}>
                <h2 className={'text-base font-semibold tracking-tight'}>
                  {selectedSpecialist.name}
                </h2>
                <p className={'mb-2 text-sm italic'}>Barber</p>
                <div className='flex items-center'>
                  <svg
                    className='me-1 h-4 w-4 text-yellow-300'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 22 20'
                  >
                    <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                  </svg>
                  <p className='ms-2 text-sm font-bold text-gray-900 dark:text-white'>
                    4.95
                  </p>
                  <span className='mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400'></span>
                  <a
                    href='#'
                    className='text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white'
                  >
                    73 reviews
                  </a>
                </div>
              </div>
            </div>
          )
        )
      },
    },
    {
      id: 2,
      name: 'Date and Time',
      icon: <LuCalendarCheck className={'h-5 w-5'} />,
      redirect: '/booking/select-date-time',
      selected: selectedDate,
      renderSelected: () => {
        return (
          selectedDate && (
            <div className={'mt-2 flex items-center justify-between'}>
              <div className={'flex items-center'}>
                <div className={'font-semibold'}>Date:</div>
                <div className={'ml-2'}>{format(selectedDate, 'PPpp')}</div>
              </div>
            </div>
          )
        )
      },
    },
    {
      id: 3,
      name: 'Services',
      icon: <LuListChecks className={'h-5 w-5'} />,
      redirect: '/booking/select-services',
    },
  ]

  return (
    <div>
      {actionItems.map((item) => (
        <Link href={item.redirect} key={item.id}>
          <Card className={'mb-2 p-4'}>
            <div>
              <div className={'flex items-center justify-between'}>
                <div className={'flex items-center'}>
                  {item.icon}
                  <div className={'ml-2 font-semibold'}>{item.name}</div>
                </div>
                <Button
                  variant={item.selected ? 'default' : 'outline'}
                  size='icon'
                >
                  {item.selected ? (
                    <LuCheck />
                  ) : (
                    <LuPlus className={'h-4 w-4'} />
                  )}
                </Button>
              </div>
            </div>
            {item.selected && item?.renderSelected && item.renderSelected()}
          </Card>
        </Link>
      ))}
    </div>
  )
}
