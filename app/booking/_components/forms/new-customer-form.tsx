'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useTransition } from 'react'
import { cn } from '@/lib/utils'
import { NewCustomerSchema } from '@/schemas'
import { newCustomer } from '@/actions/new-customer'

export const NewCustomerForm = ({ className }: { className?: string }) => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof NewCustomerSchema>>({
    resolver: zodResolver(NewCustomerSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  })

  const handleSubmit = (values: z.infer<typeof NewCustomerSchema>) => {
    startTransition(() => {
      newCustomer(values).then((data) => {
        setError(data?.error)
        setSuccess(data?.success)
      })
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn('space-y-6', className)}
      >
        <div className={'space-y-6'}>
          <FormField
            control={form.control}
            name={'name'}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'Jonh Doe'}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name={'email'}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'jonh.doe@example.com'}
                      type={'email'}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name={'phone'}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'123-456-7890'}
                      type={'phone'}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type={'submit'} className={'w-full'} disabled={isPending}>
          Confirm
        </Button>
      </form>
    </Form>
  )
}
