'use client'

import { CardWrapper } from '@/components/auth/card-wrapper'
import { BeatLoader } from 'react-spinners'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { newVerification } from '@/actions/new-verification'
import { FormSuccess } from '@/components/form-success'
import { FormError } from '@/components/form-error'

const NewVerificationForm = () => {
  const searchParams = useSearchParams()

  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const token = searchParams.get('token')

  const handleSubmit = useCallback(() => {
    if (error || success) return

    if (!token) {
      setError('Missing token')
      return
    }

    newVerification(token)
      .then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
      .catch((error) => {
        setError('Something went wrong.')
      })
  }, [token, error, success])

  useEffect(() => {
    handleSubmit()
  }, [handleSubmit])

  return (
    <CardWrapper
      headerLabel={'Confirm your verification'}
      backButtonLabel={'Back to login'}
      backButtonHref={'/auth/login'}
    >
      <div className={'flex w-full items-center justify-center'}>
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  )
}

export default NewVerificationForm
