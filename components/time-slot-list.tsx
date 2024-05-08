import { Button } from '@/components/ui/button'
import { format, getTime } from 'date-fns'

interface TimeSlotsListProps {
  slots: Date[]
  onTimeSlotClick: (timeSlot: Date | null) => void
  selectedTimeSlot?: Date | null
}

export const TimeSlotsList = ({
  slots,
  onTimeSlotClick,
  selectedTimeSlot,
}: TimeSlotsListProps) => {
  const isTimeSlotSelected = (timeSlot: Date) =>
    selectedTimeSlot && getTime(selectedTimeSlot) === getTime(timeSlot)

  return (
    <div
      className={
        'border-1 flex gap-2 overflow-scroll rounded-lg border border-accent bg-gray-100 p-4 md:flex-wrap md:justify-center'
      }
    >
      {slots.map((slot, index) => (
        <Button
          className={'w-[100px]'}
          variant={isTimeSlotSelected(slot) ? 'default' : 'outline'}
          key={index}
          onClick={() =>
            onTimeSlotClick(isTimeSlotSelected(slot) ? null : slot)
          }
        >
          {format(slot, 'p')}
        </Button>
      ))}
    </div>
  )
}
