import React from 'react'
import Container from '@/components/landing/container'
import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const Cta = () => {
  return (
    <Container>
      <Card className='mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 rounded-xl px-7 py-7  lg:flex-nowrap lg:px-12 lg:py-12'>
        <div className='flex-grow text-center lg:text-left'>
          <h2 className='text-2xl font-medium lg:text-3xl'>
            Curious to Experience Mossbook?
          </h2>
          <p className='mt-2 font-medium lg:text-xl'>
            Don&apos;t let your business fall behind – give your clients a
            seamless booking experience today!
          </p>
        </div>
        <div className='w-full flex-shrink-0 text-center lg:w-auto'>
          <LoginButton>
            <Button variant={'default'} size={'lg'}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </Card>
    </Container>
  )
}

export default Cta
