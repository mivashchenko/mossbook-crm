'use client'

import { Poppins } from 'next/font/google'
import Navbar from '@/components/landing/navbar'
import Hero from '@/components/landing/hero'
import SectionTitle from '@/components/landing/sectionTitle'
import Benefits from '@/components/landing/benefits'
import Video from '@/components/landing/video'
import Testimonials from '@/components/landing/testimonials'
import Faq from '@/components/landing/faq'
import Cta from '@/components/landing/cta'
import Footer from '@/components/landing/footer'
import { benefitOne, benefitTwo } from '@/components/landing/data'
import { cn } from '@/lib/utils'

const font = Poppins({
  subsets: ['latin'],
  weight: ['600'],
})

export default function Home() {
  return (
    <main
      className={cn(
        '',
        // 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#202404] to-[#e3dfd9]',
        font.className
      )}
    >
      <Navbar />
      <Hero />
      <SectionTitle pretitle='MossBook Benefits' title='Why Choose Our CRM?'>
        Unlock the potential of your beauty business with our all-in-one
        solution. Seamlessly manage online bookings, analyze revenue trends, and
        recover lost clients with personalized marketing. Streamline inventory
        and sales tracking, giving you more time to focus on what matters: your
        clients. Adaptable and secure, our CRM is designed to grow with you.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos='right' data={benefitTwo} />
      <SectionTitle
        pretitle='Watch a video'
        title='Learn how to fullfil your needs'
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle='Testimonials'
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle='FAQ' title='Frequently Asked Questions'>
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      {/*<PopupWidget />*/}
    </main>
  )
}
