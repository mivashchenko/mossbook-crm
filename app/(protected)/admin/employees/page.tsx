'use server'

import { EmployeeList } from '@/app/(protected)/_components/employee-list'
import { getEmployees } from '@/data/employees'

const EmployeesPage = async () => {
  const response = await getEmployees()

  return (
    <div>
      <EmployeeList employees={response.data} count={response.count} />
    </div>
  )
}

export default EmployeesPage
