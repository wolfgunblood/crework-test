'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  password: z.string().min(6, { message: 'Password should be 6 character long' }),
})

export function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const bodyData = JSON.stringify(values)

      const response = await fetch('https://crework-test.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: bodyData,
      })

      const data = await response.json()
      console.log(data)

      if (data.token) {
        document.cookie = `jwtToken=${data.token}; path=/; Secure`
        console.log('Session token set as cookie')
      } else {
        console.log('No token received')
      }
    } catch (error) {
      console.log('something went wrong')
    }
  }

  return (
    <div
      className="flex flex-col gap-8 rounded-2xl bg-gradient-to-b from-[#F7F7F7] to-[#F0F0F0]"
      style={{ border: '1px solid #CECECE', padding: '60px' }}
    >
      <h1 className="text-center font-barlow text-5xl font-semibold leading-14">
        Welcome to{' '}
        <span className="text-center font-barlow text-5xl font-semibold leading-14">Workflo!</span>
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Login</Button>
        </form>
      </Form>
      <p className="text-center font-inter text-base font-normal leading-custom">
        Already have an account?<span>Login</span>
      </p>
    </div>
  )
}
