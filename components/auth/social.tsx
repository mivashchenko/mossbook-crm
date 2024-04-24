'use client'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '@/components/ui/button'
export const Social = () => {
  return (
    <div className={'flex w-full items-center gap-x-2'}>
      <Button className={'w-full'} size={'lg'} variant={'outline'}>
        <FcGoogle className={'h-5 w-5'} />
      </Button>
    </div>
  )
}
