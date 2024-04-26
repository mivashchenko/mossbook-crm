'use client'

import { ReactNode } from 'react'
import { logout } from '@/actions/logout'

export const LogoutButton = ({ children }: { children: ReactNode }) => {
  const handleClick = () => {
    logout()
  }
  return (
    <span onClick={handleClick} className={'cursor-pointer'}>
      {children}
    </span>
  )
}
