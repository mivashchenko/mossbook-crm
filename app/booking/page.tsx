import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BookingMenu } from '@/app/booking/_components/booking-menu'

const BookingPage = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Salon name</CardTitle>
        <CardDescription>Salon address</CardDescription>
      </CardHeader>
      <CardContent>
        <BookingMenu />
      </CardContent>
    </Card>
  )
}

export default BookingPage
