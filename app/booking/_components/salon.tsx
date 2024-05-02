'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { namePlateColors, nameToInitials } from '@/utils'
import { cn } from '@/lib/utils'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LuArrowLeft } from 'react-icons/lu'
import Link from 'next/link'

export const Salon = ({
  className,
  backUrl,
}: {
  className: string
  backUrl?: string
}) => {
  return (
    <Card className={cn('flex w-full items-center', className)}>
      {backUrl && (
        <Button variant='outline' size='icon' className={'ml-4'} asChild>
          <Link href={backUrl}>
            <LuArrowLeft className={'h-4 w-4'} />
          </Link>
        </Button>
      )}
      <div className={'flex items-center p-2'}>
        <Avatar className={'h-12 w-12'}>
          <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
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
          <CardTitle>Salon name</CardTitle>
          <CardDescription>Salon address</CardDescription>
        </div>
      </div>
    </Card>
  )
}
