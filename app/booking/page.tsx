import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BookingList } from '@/app/booking/_components/booking-list'

const BookingPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Salon name</CardTitle>
        <CardDescription>Salon address</CardDescription>
      </CardHeader>
      <CardContent>
        <BookingList />
      </CardContent>
    </Card>
  )
}

export default BookingPage
