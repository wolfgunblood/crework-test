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
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  password: z.string().min(6, { message: 'Password should be 6 character long' }),
})

export function SignUpForm() {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const bodyData = JSON.stringify(values)

      const response = await fetch('https://crework-test.onrender.com/api/v1/auth/register', {
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

      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data.user.name))
        console.log('User data set in localStorage')
      } else {
        console.log('No user data received')
      }

      router.push('/')
    } catch (error) {
      toast({
        title: 'Unauthorised',
      })
      console.log('something went wrong')
    }
  }
  const {
    handleSubmit,
    formState: { isValid, isDirty },
  } = form

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div
      className="flex flex-col gap-8 rounded-2xl bg-gradient-to-b from-[#F7F7F7] to-[#F0F0F0]"
      style={{ border: '1px solid #CECECE', padding: '60px' }}
    >
      <h1 className="text-center font-barlow text-5xl font-semibold leading-14">
        Welcome to{' '}
        <span className="text-center font-barlow text-5xl font-semibold leading-14 text-[#2F2188]">
          Workflo!
        </span>
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Full name</FormLabel>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
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
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      {...field}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm leading-5">
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        style={{ outline: 'none' }}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={!isDirty || !isValid}
            style={{ background: 'linear-gradient(180deg, #4C38C2 0%, #2F2188 100%)' }}
          >
            Sign up
          </Button>
        </form>
      </Form>
      <p className="text-center font-inter text-base font-normal leading-custom">
        Already have an account?{' '}
        <span className="cursor-pointer text-[#4C38C2]" onClick={() => router.push('signin')}>
          Log in.
        </span>
      </p>
    </div>
  )
}
