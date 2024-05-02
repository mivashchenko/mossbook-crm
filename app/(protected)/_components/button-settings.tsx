'use client'

import Link from 'next/link'
import { LuSettings } from 'react-icons/lu'

export const ButtonSettings = () => {
  return (
    <Link
      href='/admin/settings'
      className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
    >
      <LuSettings className='h-5 w-5' />
      <span className='sr-only'>Settings</span>
    </Link>
  )
}
