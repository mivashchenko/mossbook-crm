'use client'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/button'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { useSearchParams } from 'next/navigation'

export const Social = () => {
  const searchParams = useSearchParams()

  const callbackUrl = searchParams.get('callbackUrl')

  const handleClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className={'flex w-full items-center gap-x-2'}>
      <Button
        className={'w-full'}
        size={'lg'}
        variant={'outline'}
        onClick={() => handleClick('google')}
      >
        <FcGoogle className={'h-5 w-5'} />
      </Button>
      <Button
        className={'w-full'}
        size={'lg'}
        variant={'outline'}
        onClick={() => handleClick('github')}
      >
        <FaGithub className={'h-5 w-5'} />
      </Button>
    </div>
  )
}
