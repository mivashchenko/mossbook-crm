import React from 'react'
import { CardWrapper } from '@/components/auth/card-wrapper'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel={'Oops! Something went wrong!'}
      backButtonLabel={'Back to login'}
      backButtonHref={'/auth/login'}
    >
      <div className={'flex w-full items-center justify-center'}>
        <ExclamationTriangleIcon className={'text-destructive'} />
      </div>
    </CardWrapper>
  )
}

export default ErrorCard
