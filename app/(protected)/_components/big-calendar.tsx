'use client'
import {
  Calendar,
  Views,
  View,
  dateFnsLocalizer,
  ToolbarProps,
} from 'react-big-calendar'
import { useMemo } from 'react'
import { format } from 'date-fns'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu'

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

const events = [
  {
    id: 0,
    title: 'Board meeting',
    start: new Date(2018, 0, 29, 9, 0, 0),
    end: new Date(2018, 0, 29, 13, 0, 0),
    resourceId: 1,
  },
  {
    id: 1,
    title: 'MS training',
    allDay: true,
    start: new Date(2018, 0, 29, 14, 0, 0),
    end: new Date(2018, 0, 29, 16, 30, 0),
    resourceId: 2,
  },
  {
    id: 2,
    title: 'Team lead meeting',
    start: new Date(2018, 0, 29, 8, 30, 0),
    end: new Date(2018, 0, 29, 12, 30, 0),
    resourceId: [2, 3],
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2018, 0, 30, 7, 0, 0),
    end: new Date(2018, 0, 30, 10, 30, 0),
    resourceId: 4,
  },
]

const resourceMap = [
  { employeeId: 1, employeeTitle: 'Maksym Ivashchenko' },
  { employeeId: 2, employeeTitle: 'Dmytro Ivashchenko' },
  { employeeId: 3, employeeTitle: 'Kateryna Hruba' },
  { employeeId: 4, employeeTitle: 'Egor Ivashchenko' },
]

export const BigCalendar = () => {
  const { defaultDate, views, components } = useMemo(
    () => ({
      components: {
        toolbar: (props: ToolbarProps) => {
          return (
            <Card className={'mb-4'}>
              <CardHeader>{format(props.date, 'dd MMM')}</CardHeader>
              <CardContent>
                <Button size={'icon'} className={'mr-1'}>
                  <LuChevronLeft />
                </Button>
                <Button size={'icon'}>
                  <LuChevronRight />
                </Button>
              </CardContent>
            </Card>
          )
        },
      },
      defaultDate: new Date(2018, 0, 29),
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
        resources={resourceMap}
        resourceTitleAccessor='employeeTitle'
        step={60}
        views={views}
        localizer={localizer}
      />
    </div>
  )
}
