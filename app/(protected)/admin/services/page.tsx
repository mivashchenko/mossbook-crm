'use server'

import { ServiceList } from '@/app/(protected)/_components/service-list'
import { getServices } from '@/data/services'

const EmployeesPage = async () => {
  const response = await getServices()

  return (
    <div>
      <ServiceList services={response.data} count={response.count} />
    </div>
  )
}

export default EmployeesPage
