import benefitOneImg from '/public/img/benefit-one.jpg'
import benefitTwoImg from '/public/img/benefit-two.png'
import { LuSun } from 'react-icons/lu'

const benefitOne = {
  title: 'Revolutionize Your Salon Management with Our Custom CRM',
  desc: 'Streamline operations and enhance customer relationships with these benefits:',
  image: benefitOneImg,
  bullets: [
    {
      title: 'Effortless Online Booking System:',
      desc: 'Automate appointments with a chatbot or website, allowing clients to book at their convenience.',
      icon: <LuSun />,
    },
    {
      title: 'Revenue & Expense Analytics, P&L:',
      desc: 'Track profits and expenses with comprehensive reports to optimize your business performance.',
      icon: <LuSun />,
    },
    {
      title: 'Enhanced Client Database Management:',
      desc: 'Leverage client data for strategic marketing campaigns and improved customer engagement.',
      icon: <LuSun />,
    },
  ],
}

const benefitTwo = {
  title: 'Empower Your Business with Comprehensive Management Tools',
  desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
  image: benefitTwoImg,
  bullets: [
    {
      title: 'Booking Calendar & Reports:',
      desc: 'Easily track appointments and employee availability while gaining real-time insights into monthly performance.',
      icon: <LuSun />,
    },
    {
      title: 'Recover Lost Clients:',
      desc: 'Re-engage past clients with targeted marketing, reminders, and strategic re-engagement campaigns.',
      icon: <LuSun />,
    },
    {
      title: 'Inventory, Sales, & Consumables Accounting:',
      desc: 'Manage your inventory efficiently, streamline sales, and track consumables for a seamless supply chain.',
      icon: <LuSun />,
    },
  ],
}

export { benefitOne, benefitTwo }
