'use client'

import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { format } from 'date-fns'
import { CalendarIcon, CircleAlert, CircleAlertIcon, Loader, Pencil } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'
import { Plus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const FormSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  status: z
    .string({
      required_error: 'Please provide status.',
    })
    .optional(),
  priority: z.string().optional(),
  deadline: z.date(),
})

export function SelectForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: '',
      status: '',
      priority: '',
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    form.reset()
  }

  return (
    <div className="flex flex-col gap-9">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="hidden">Title</FormLabel>
                <FormControl>
                  <input className="input-style" placeholder="Title" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2">
            <div className="flex flex-col justify-center gap-8">
              <div className="flex items-center gap-4 rounded p-2">
                <Loader size={24} stroke="#797979" strokeWidth={1.5} />
                <span
                  className="font-inter text-base font-normal leading-custom-2"
                  style={{ color: '#797979' }}
                >
                  Status
                </span>
              </div>
              <div className="flex items-center gap-4 rounded p-2">
                <CircleAlertIcon size={24} stroke="#797979" strokeWidth={1.5} />
                <span
                  className="font-inter text-base font-normal leading-custom-2"
                  style={{ color: '#797979' }}
                >
                  Priority
                </span>
              </div>
              <div className="flex items-center gap-4 rounded p-2">
                <CalendarIcon size={24} stroke="#797979" strokeWidth={1.5} />
                <span
                  className="font-inter text-base font-normal leading-custom-2"
                  style={{ color: '#797979' }}
                >
                  Deadline
                </span>
              </div>
              <div className="flex items-center gap-4 rounded p-2">
                <Pencil size={24} stroke="#797979" strokeWidth={1.5} />
                <span
                  className="font-inter text-base font-normal leading-custom-2"
                  style={{ color: '#797979' }}
                >
                  Description
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-8">
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="hidden">
                      <div className="flex items-center gap-4 rounded p-2">
                        <Loader size={24} stroke="#797979" strokeWidth={1.5} />
                        <span
                          className="font-inter text-base font-normal leading-custom-2"
                          style={{ color: '#797979' }}
                        >
                          Status
                        </span>
                      </div>
                    </FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Not Selected" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="todo">To do</SelectItem>
                        <SelectItem value="in-progress">In Progress</SelectItem>
                        <SelectItem value="under-review">Under Review</SelectItem>
                        <SelectItem value="finished">Finished</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="hidden">
                      <div className="flex items-center gap-4 rounded p-2">
                        <CircleAlertIcon size={24} stroke="#797979" strokeWidth={1.5} />
                        <span
                          className="font-inter text-base font-normal leading-custom-2"
                          style={{ color: '#797979' }}
                        >
                          Priority
                        </span>
                      </div>
                    </FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Not Selected" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="urgent">Urgent</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="hidden">
                      <div className="flex items-center gap-4 rounded p-2">
                        <CalendarIcon size={24} stroke="#797979" strokeWidth={1.5} />
                        <span
                          className="font-inter text-base font-normal leading-custom-2"
                          style={{ color: '#797979' }}
                        >
                          Deadline
                        </span>
                      </div>
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'temp'}
                            className={cn('px-4', !field.value && 'text-foreground')}
                          >
                            {field.value ? format(field.value, 'PPP') : <span>Not Selected</span>}
                            {/* <CalendarIcon className="ml-auto h-4 w-4 opacity-50" /> */}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="hidden">
                      <div className="flex items-center gap-4 rounded p-2">
                        <Pencil size={24} stroke="#797979" strokeWidth={1.5} />
                        <span
                          className="font-inter text-base font-normal leading-custom-2"
                          style={{ color: '#797979' }}
                        >
                          Description
                        </span>
                      </div>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Not Selected" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <div className="inline-flex items-center gap-6">
        <Plus size={24} />
        <span
          className="font-inter text-base font-normal leading-custom-2"
          style={{ color: '#000000' }}
        >
          Add custom property
        </span>
      </div>
    </div>
  )
}
