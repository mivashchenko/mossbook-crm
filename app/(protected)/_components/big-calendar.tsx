'use client'
import { Calendar, Views, View, dateFnsLocalizer } from 'react-big-calendar'
import { useMemo } from 'react'
import { format } from 'date-fns'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Appointment, Employee, Service } from '@prisma/client'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

// const events = [
//   {
//     id: 0,
//     title: 'Board meeting',
//     start: new Date(2018, 0, 29, 9, 0, 0),
//     end: new Date(2018, 0, 29, 13, 0, 0),
//     resourceId: 1,
//   },
//   {
//     id: 1,
//     title: 'MS training',
//     allDay: true,
//     start: new Date(2018, 0, 29, 14, 0, 0),
//     end: new Date(2018, 0, 29, 16, 30, 0),
//     resourceId: 2,
//   },
//   {
//     id: 2,
//     title: 'Team lead meeting',
//     start: new Date(2018, 0, 29, 8, 30, 0),
//     end: new Date(2018, 0, 29, 12, 30, 0),
//     resourceId: [2, 3],
//   },
//   {
//     id: 11,
//     title: 'Birthday Party',
//     start: new Date(2018, 0, 30, 7, 0, 0),
//     end: new Date(2018, 0, 30, 10, 30, 0),
//     resourceId: 4,
//   },
// ]

interface BigCalendarProps {
  appointments: {
    data: (Appointment & { services: Service[] })[]
    count: number
  } | null
  employees: { data: Employee[]; count: number } | null
}

export const BigCalendar = (props: BigCalendarProps) => {
  const { appointments, employees } = props

  const employeeFormatted = employees?.data?.map((employee) => {
    return {
      employeeId: employee.id,
      employeeTitle: employee.name,
    }
  })

  const events = appointments?.data?.map((appointment) => {
    return {
      id: appointment.id,
      title: appointment.services.map((service) => service.name).join(', '), // 'Board meeting',
      start: new Date(appointment.start),
      end: new Date(appointment.end),
      resourceId: appointment.employeeId,
    }
  })

  const { defaultDate, views, components } = useMemo(
    () => ({
      components: {
        // toolbar: (props: ToolbarProps) => {
        //   return (
        //     <Card className={'mb-4'}>
        //       <CardHeader>{format(props.date, 'dd MMM')}</CardHeader>
        //       <CardContent>
        //         <Button size={'icon'} className={'mr-1'}>
        //           <LuChevronLeft />
        //         </Button>
        //         <Button size={'icon'}>
        //           <LuChevronRight />
        //         </Button>
        //       </CardContent>
        //     </Card>
        //   )
        // },
      },
      defaultDate: new Date(),
      views: ['day', 'work_week'] as View[],
    }),
    []
  )

  return (
    <div>
      <Calendar
        defaultDate={defaultDate}
        defaultView={Views.DAY}
        components={components}
        events={events}
        resourceIdAccessor='employeeId'
        resources={employeeFormatted}
        resourceTitleAccessor='employeeTitle'
        // step={60}
        views={views}
        localizer={localizer}
        style={{ height: 500 }}
      />
    </div>
  )
}
