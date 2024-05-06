import React from 'react'
import Container from '@/components/landing/container'
import { Disclosure } from '@headlessui/react'
import { LuChevronUp } from 'react-icons/lu'
import { Card } from '@/components/ui/card'

const Faq = () => {
  return (
    <Container className='!p-0'>
      <div className='mx-auto w-full max-w-2xl rounded-2xl p-2'>
        {faqdata.map((item) => (
          <Card key={item.question} className='mb-5'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className='flex w-full items-center justify-between rounded-lg px-4 py-4 text-left text-lg focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75'>
                    <div className={'px-1'}>{item.question}</div>
                    <LuChevronUp
                      className={`${
                        open ? 'rotate-180 transform' : ''
                      } h-5 w-5 min-w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='px-4 pb-2 pt-4 text-gray-500 dark:text-gray-300'>
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </Card>
        ))}
      </div>
    </Container>
  )
}

const faqdata = [
  {
    question: 'What is Mossbook and how can it benefit my business? ',
    answer:
      'Mossbook is a SaaS application designed for small service-based businesses in the beauty and wellness industry. It streamlines business operations with features like online booking, payment processing, inventory tracking, employee management, and more. With BeautyWave, you can improve operational efficiency, enhance customer satisfaction, and increase profitability.',
  },
  {
    question:
      'What unique features does Mossbook offer compared to other service booking applications? ',
    answer:
      'Mossbook stands out due to its comprehensive feature set tailored specifically for service-based businesses: AI-Powered Personalization: Personalized service recommendations and upselling. Augmented Reality (AR) Integration: Virtual service trials and space planning. Blockchain Technology: Secure payments and blockchain-based loyalty programs.\n' +
      ' Advanced Analytics Dashboard: Predictive analytics and customer behavior insights.\n' +
      ' Eco-Friendly Practices: Green booking options and sustainability tracking.\n' +
      ' Voice-Activated Management: Voice command interface and notifications.\n' +
      ' Social Media Integration: Direct booking through social platforms.\n' +
      ' Virtual Reality (VR) Training: VR onboarding and skill development for employees.',
  },
  {
    question: 'How does BeautyWave handle booking and payment processing? ',
    answer:
      'Mossbook provides a customizable online booking system that integrates with websites and social media. Clients can schedule appointments 24/7. For payment processing, the application offers advanced options with usage fee calculations and supports cryptocurrency payments. Secure transactions are ensured through industry-standard encryption protocols.',
  },
  {
    question:
      'What kind of support and training does Mossbook offer to businesses? ',
    answer:
      'Mossbook offers comprehensive customer support and training:\n' +
      '24/7 Customer Support: Swift resolution of issues through dedicated support teams.\n' +
      'VR Training for Employees: Virtual Reality onboarding and skill development modules.\n' +
      'Operational Management Portal: Real-time information on employee schedules and service details.\n' +
      'API Integrations and Customization: Open API for third-party tool integration and customizable app interface.',
  },
]

export default Faq
