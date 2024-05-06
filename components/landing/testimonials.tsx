import Image from 'next/image'
import React from 'react'
import Container from '@/components/landing/container'

import userOneImg from '/public/img/user1.jpg'
import userTwoImg from '/public/img/user2.jpg'
import userThreeImg from '/public/img/user3.jpg'
import { Card } from '@/components/ui/card'

const Testimonials = () => {
  return (
    <Container>
      <div className='grid gap-10 lg:grid-cols-2 xl:grid-cols-3'>
        <div className='lg:col-span-2 xl:col-auto'>
          <Card className='flex h-full w-full flex-col justify-between rounded-2xl  px-14 py-14'>
            <p className='text-xl leading-normal '>
              I was able to quickly figure out the functionality of Mossbook
              because the program is <Mark>simple</Mark> and{' '}
              <Mark>intuitive</Mark>. I always recommend Mossbook to everyone –
              it simplifies the work of a professional and saves a lot of time.
            </p>

            <Avatar
              image={userOneImg}
              name='Sarah Steiner'
              title='Cosmetologist'
            />
          </Card>
        </div>
        <Card className=''>
          <div className=' flex h-full w-full flex-col justify-between rounded-2xl px-14 py-14'>
            <p className='text-xl leading-normal '>
              The most useful feature for me is the{' '}
              <Mark>automatic reminders</Mark> to clients about their
              appointments. Overall, Mossbook has streamlined my work and
              elevated me as a professional to a new level.
            </p>

            <Avatar image={userTwoImg} name='Dylan Ambrose' title='Barber' />
          </div>
        </Card>
        <Card className=''>
          <div className='flex h-full w-full flex-col justify-between rounded-2xl px-14 py-14'>
            <p className='text-xl leading-normal '>
              Mossbook provides <Mark>insights</Mark> into the numbers for new
              and returning clients, average checks, and daily totals. Many
              clients have also mentioned that our early appointment reminders
              are helpful to them.
            </p>

            <Avatar
              image={userThreeImg}
              name='Gabrielle Winn'
              title='Nail Master'
            />
          </div>
        </Card>
      </div>
    </Container>
  )
}

interface AvatarProps {
  image: any
  name: string
  title: string
}

function Avatar(props: AvatarProps) {
  return (
    <div className='mt-8 flex items-center space-x-3'>
      <div className='h-14 w-14 flex-shrink-0 overflow-hidden rounded-full'>
        <Image
          src={props.image}
          width='40'
          height='40'
          alt='Avatar'
          placeholder='blur'
        />
      </div>
      <div>
        <div className='text-lg font-medium'>{props.name}</div>
        <div className='text-gray-600 dark:text-gray-400'>{props.title}</div>
      </div>
    </div>
  )
}

interface MarkProps {
  children: React.ReactNode
}

function Mark(props: MarkProps) {
  return (
    <>
      {' '}
      <mark className='rounded-md bg-[#c8d48b] ring-4 ring-[#c8d48b]'>
        {props.children}
      </mark>{' '}
    </>
  )
}

export default Testimonials
