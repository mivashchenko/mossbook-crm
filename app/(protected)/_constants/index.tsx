import { LuCalendar, LuLayoutDashboard, LuUsers } from 'react-icons/lu'

export const navigationItems = [
  {
    title: 'Dashboard',
    icon: <LuLayoutDashboard className='h-5 w-5' />,
    href: '/admin',
  },
  {
    title: 'Calendar',
    icon: <LuCalendar className='h-5 w-5' />,
    href: '/admin/calendar',
  },
  {
    title: 'Employees',
    icon: <LuUsers className='h-5 w-5' />,
    href: '/admin/employees',
  },
]
