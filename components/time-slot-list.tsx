import { Button } from '@/components/ui/button'
import { format } from 'date-fns'

export const TimeSlotsList = ({ slots }: { slots: Date[] }) => {
  return (
    <div
      className={
        'border-1 flex gap-2 overflow-scroll rounded-lg border border-accent bg-gray-100 p-4 md:flex-wrap md:justify-center'
      }
    >
      {slots.map((slot, index) => (
        <Button className={'w-[100px]'} variant={'outline'} key={index}>
          {format(slot, 'p')}
        </Button>
      ))}
    </div>
  )
}
