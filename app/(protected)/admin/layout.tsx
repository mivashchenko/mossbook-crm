import Link from 'next/link'
import { FaKey } from 'react-icons/fa6'

import { Button } from '@/components/ui/button'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ReactNode } from 'react'
import { UserButton } from '@/components/auth/user-button'
import { MdOutlineSettings } from 'react-icons/md'
import { Navigation } from '@/app/(protected)/_components/navigation'
import { NavigationMobile } from '@/app/(protected)/_components/navigation-mobile'
import { ButtonSettings } from '@/app/(protected)/_components/button-settings'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <TooltipProvider>
      <div className='flex min-h-screen w-full flex-col bg-muted/40'>
        <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
          <Navigation />
          <nav className='mt-auto flex flex-col items-center gap-4 px-2 py-4'>
            <Tooltip>
              <TooltipTrigger asChild>
                <ButtonSettings />
              </TooltipTrigger>
              <TooltipContent side='right'>Settings</TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
          <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
            <NavigationMobile />
            <div className='ml-auto'>
              <UserButton />
            </div>
          </header>
          <main className='flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
            {children}
          </main>
        </div>
      </div>
    </TooltipProvider>
  )
}
