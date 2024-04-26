import { ReactNode } from 'react'
import { Navbar } from '@/app/(protected)/_components/navbar'

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={
        'flex h-full w-full flex-col items-center justify-center gap-y-10 ' +
        'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-400 to-blue-800'
      }
    >
      <Navbar />
      {children}
    </div>
  )
}

export default ProtectedLayout
