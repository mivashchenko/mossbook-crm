import { NewCustomerForm } from '@/app/booking/_components/forms/new-customer-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Salon } from '@/app/booking/_components/salon'
import { BookingSummary } from '@/app/booking/_components/booking-summary'

const ConfirmPage = () => {
  return (
    <div className={'flex flex-col gap-4'}>
      <Salon backUrl={'/booking'} />
      <BookingSummary />

      <Card>
        <CardHeader>
          <CardTitle>Contact information</CardTitle>
        </CardHeader>
        <CardContent>
          <NewCustomerForm />
        </CardContent>
      </Card>
    </div>
  )
}

export default ConfirmPage
