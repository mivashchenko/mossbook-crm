'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { RoleGate } from '@/components/auth/role-gate'
import { FormSuccess } from '@/components/form-success'
import { UserRole } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { admin } from '@/actions/admin'

const AdminPage = () => {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error)
      }
      if (data.success) {
        toast.success(data.success)
      }
    })
  }

  const onAPIRouteClick = () => {
    fetch('/api/admin').then((res) => {
      if (res.ok) {
        console.log('Admin API Route Success!')
        toast.success('Admin API Route Success!')
      } else {
        toast.error('Forbidden API Route!')
      }
    })
  }
  return (
    <Card className={'w-[600px]'}>
      <CardHeader>
        <p className={'text-center text-2xl font-semibold'}>🔑 Admin</p>
      </CardHeader>
      <CardContent className={'space-y-4'}>
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message={'You are allowed to see this content!'} />
        </RoleGate>
        <div
          className={
            'flex flex-row items-center justify-between rounded-lg  border p-3 shadow-md'
          }
        >
          <p>Admin-only API Route</p>
          <Button onClick={onAPIRouteClick}>Click to test</Button>
        </div>
        <div
          className={
            'flex flex-row items-center justify-between rounded-lg  border p-3 shadow-md'
          }
        >
          <p>Admin-only Server Action</p>
          <Button onClick={onServerActionClick}>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdminPage
