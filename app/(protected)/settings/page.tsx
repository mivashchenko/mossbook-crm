'use client'

import * as z from 'zod'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { settings } from '@/actions/settings'
import { useState, useTransition } from 'react'
import { useSession } from 'next-auth/react'
import { SettingsSchema } from '@/schemas'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useCurrentUser } from '@/hooks/use-current-user'
import { FormError } from '@/components/form-error'
import { FormSuccess } from '@/components/form-success'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { UserRole } from '@prisma/client'
import { Switch } from '@/components/ui/switch'

const SettingsPage = () => {
  const user = useCurrentUser()

  const { update } = useSession()

  const [isPending, startTransition] = useTransition()

  const [error, setError] = useState<string | undefined>(undefined)
  const [success, setSuccess] = useState<string | undefined>(undefined)

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  })

  const handleSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error)
          }

          if (data.success) {
            update()
            setSuccess(data.success)
          }
        })
        .catch((error) => {
          setError('An error occurred. Please try again later.')
        })
    })
  }
  return (
    <Card className={'w-[600px]'}>
      <CardHeader>
        <p className={'text-center text-2xl font-semibold'}>⚙️ Settings</p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className={'space-y-6'}
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className={'space-y-4'}>
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
                          disabled={isPending}
                          placeholder={'John Doe'}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
              {!user?.isOAuth && (
                <>
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
                              disabled={isPending}
                              placeholder={'john.doe@example.com'}
                              type={'email'}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )
                    }}
                  />
                  <FormField
                    control={form.control}
                    name={'password'}
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={isPending}
                              placeholder={'*******'}
                              type={'password'}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )
                    }}
                  />
                  <FormField
                    control={form.control}
                    name={'newPassword'}
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>New password</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={isPending}
                              placeholder={'*******'}
                              type={'password'}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )
                    }}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name={'role'}
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
                            <SelectValue placeholder={'Select a role'} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
                          <SelectItem value={UserRole.USER}>User</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
              {!user?.isOAuth && (
                <FormField
                  control={form.control}
                  name={'isTwoFactorEnabled'}
                  render={({ field }) => {
                    return (
                      <FormItem
                        className={
                          'flex flex-row items-center justify-between rounded border p-3 shadow-md'
                        }
                      >
                        <div className={'space-y-0.5'}>
                          <FormLabel>Two Factor Authentication</FormLabel>
                          <FormDescription>
                            Enable two factor authentication for your account
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            disabled={isPending}
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )
                  }}
                />
              )}
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button type={'submit'}>Save</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default SettingsPage
