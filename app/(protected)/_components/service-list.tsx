'use client'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { LuMoreHorizontal } from 'react-icons/lu'
import { useMediaQuery } from '@/hooks/use-media-query'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

import * as React from 'react'
import { Service, UserRole } from '@prisma/client'
import { NewServiceForm } from '@/app/(protected)/_components/new-service-form'
import { FormDrawerDialog } from '@/components/form-drawer-dialog'

export const ServiceList = ({
  services,
  count,
}: {
  count: number
  services: Service[]
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className={'flex items-center justify-between'}>
          Services{' '}
          <FormDrawerDialog
            title={'Services'}
            button={<Button variant='outline'>Add service</Button>}
            form={<NewServiceForm />}
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((employee) => {
              return (
                <TableRow key={employee.id}>
                  <TableCell className='font-medium'>{employee.name}</TableCell>
                  <TableCell className='font-medium'>
                    {employee.description}
                  </TableCell>
                  <TableCell className='font-medium'>
                    {employee.price}
                  </TableCell>
                  <TableCell className='font-medium'>
                    {employee.duration}
                  </TableCell>
                  <TableCell>
                    <Badge variant='outline'>{employee.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup='true'
                          size='icon'
                          variant='ghost'
                        >
                          <LuMoreHorizontal className='h-4 w-4' />
                          <span className='sr-only'>Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className='text-xs text-muted-foreground'>
          Showing <strong>1-10</strong> of <strong>{count}</strong> products
        </div>
      </CardFooter>
    </Card>
  )
}
