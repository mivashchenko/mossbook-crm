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
import { ServiceCategory } from '@prisma/client'
import { cn } from '@/lib/utils'
import { NewServiceSchema } from '@/schemas'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { newService } from '@/actions/new-service'

export const NewServiceForm = ({ className }: { className?: string }) => {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof NewServiceSchema>>({
    resolver: zodResolver(NewServiceSchema),
    defaultValues: {
      name: '',
      description: '',
      price: '',
      duration: '',
      category: undefined,
    },
  })

  const handleSubmit = (values: z.infer<typeof NewServiceSchema>) => {
    startTransition(() => {
      newService(values).then((data) => {
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
                  <FormLabel>Service name</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name={'description'}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name={'price'}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'0'}
                      type={'number'}
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
            name={'duration'}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'0'}
                      type={'number'}
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
            name={'category'}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    disabled={isPending}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={'Select a category'} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={ServiceCategory.HAIR}>Hair</SelectItem>
                      <SelectItem value={ServiceCategory.NAILS}>
                        Nails
                      </SelectItem>
                      <SelectItem value={ServiceCategory.MASSAGE}>
                        Massage
                      </SelectItem>
                      <SelectItem value={ServiceCategory.FACIAL}>
                        Facial
                      </SelectItem>
                      <SelectItem value={ServiceCategory.WAXING}>
                        Waxing
                      </SelectItem>
                      <SelectItem value={ServiceCategory.MAKEUP}>
                        Makeup
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button type={'submit'} className={'w-full'} disabled={isPending}>
          Add service
        </Button>
      </form>
    </Form>
  )
}
