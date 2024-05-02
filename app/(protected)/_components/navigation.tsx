'use client'
import Link from 'next/link'
import { FaBookReader, FaCalendar } from 'react-icons/fa'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { navigationItems } from '@/app/(protected)/_constants'
import { usePathname } from 'next/navigation'

export const Navigation = () => {
  const pathname = usePathname()

  return (
    <nav className='flex flex-col items-center gap-4 px-2 py-4'>
      <Link
        href='#'
        className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
      >
        <FaBookReader className='h-4 w-4 transition-all group-hover:scale-110' />
        <span className='sr-only'>MossBook Inc</span>
      </Link>
      {navigationItems.map(({ title, icon, href }) => {
        const isActive = pathname === href

        const activeClassname = isActive
          ? 'text-accent-foreground'
          : 'text-muted-foreground'
        return (
          <Tooltip key={title}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                className={cn(
                  'flex h-9 w-9 items-center justify-center' +
                    ' rounded-lg' +
                    ' transition-colors hover:text-foreground md:h-8 md:w-8',
                  activeClassname
                )}
              >
                {icon}
                <span className='sr-only'>{title}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>{title}</TooltipContent>
          </Tooltip>
        )
      })}
    </nav>
  )
}
