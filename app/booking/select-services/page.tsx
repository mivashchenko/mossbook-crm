import { BookingSelectServices } from '@/app/booking/_components/booking-select-services'
import { getServices } from '@/data/services'

const SelectServicesPage = async () => {
  const response = await getServices()
  return (
    <BookingSelectServices services={response.data} count={response.count} />
  )
}

export default SelectServicesPage
