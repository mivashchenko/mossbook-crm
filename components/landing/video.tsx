import { useState } from 'react'
import Container from '@/components/landing/container'
import { Card } from '@/components/ui/card'

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false)
  return (
    <Container>
      <div className='mx-auto w-full max-w-4xl overflow-hidden rounded-2xl lg:mb-20 '>
        <Card
          onClick={() => setPlayVideo(!playVideo)}
          className='aspect-w-16 aspect-h-9 relative cursor-pointer'
        >
          {!playVideo && (
            <button className='absolute inset-auto left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform text-white lg:h-28 lg:w-28'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-16 w-16  lg:h-28 lg:w-28'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Play Video</span>
            </button>
          )}
          {playVideo && (
            <iframe
              width='560'
              height='315'
              src='https://www.youtube.com/embed/QqpkJ1zVeTQ?si=hJF1e6-I8BE11Mhe'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          )}
        </Card>
      </div>
    </Container>
  )
}

export default Video
