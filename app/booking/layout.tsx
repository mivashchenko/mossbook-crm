import { TooltipProvider } from '@/components/ui/tooltip'
import { ReactNode } from 'react'
import StoreProvider from '@/app/store-provider'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <TooltipProvider>
        <div className={'min-h-screen'}>
          <main className='p-4'>{children}</main>
        </div>
      </TooltipProvider>
    </StoreProvider>
  )
}
