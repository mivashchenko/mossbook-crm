import Image from 'next/image'
import React from 'react'
import Container from '@/components/landing/container'
import { Card } from '@/components/ui/card'

interface BenefitsProps {
  data: {
    title: string
    desc: string
    image: any
    imgPos?: string
    bullets: {
      title: string
      desc: string
      icon: React.ReactElement
    }[]
  }
  imgPos?: string
}

const Benefits = (props: BenefitsProps) => {
  const { data } = props
  return (
    <>
      <Container className='mb-20 flex flex-wrap lg:flex-nowrap lg:gap-10 '>
        <div
          className={`flex w-full items-center justify-center lg:w-1/2 ${
            props.imgPos === 'right' ? 'lg:order-1' : ''
          }`}
        >
          <div>
            <Image
              src={data.image}
              width='616'
              alt='Benefits'
              className={'object-cover'}
              placeholder='blur'
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex w-full flex-wrap items-center lg:w-1/2 ${
            data.imgPos === 'right' ? 'lg:justify-end' : ''
          }`}
        >
          <div>
            <div className='mt-4 flex w-full flex-col'>
              <h3 className='mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight'>
                {data.title}
              </h3>

              <p className='max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl'>
                {data.desc}
              </p>
            </div>

            <div className='mt-5 w-full'>
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

interface BenefitProps {
  title: string
  icon: React.ReactElement
  children: React.ReactNode
}

function Benefit(props: BenefitProps) {
  return (
    <>
      <div className='mt-8 flex items-start space-x-3'>
        <Card className='border-1 mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center'>
          {React.cloneElement(props.icon, {
            className: 'w-7 h-7',
          })}
        </Card>
        <div>
          <h4 className='text-xl font-medium'>{props.title}</h4>
          <p className='mt-1'>{props.children}</p>
        </div>
      </div>
    </>
  )
}

export default Benefits
