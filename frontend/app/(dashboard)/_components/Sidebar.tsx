'use client'

import { Button } from '@/components/ui/button'
import { SidebarRoutes } from './sidebar-routes'
import Image from 'next/image'
import SidebarTop from './sidebar-top'
import { ArrowDownToLine, CirclePlus, Download } from 'lucide-react'
import Form from './new-form'

export const Sidebar = () => {
  return (
    <div
      className="flex min-h-screen min-w-[285px] flex-col justify-between border-r bg-white"
      style={{
        border: '0px 1px 0px 0px solid #DEDEDE',
        padding: '24px 16px 32px 16px',
      }}
    >
      <div className="flex flex-col gap-4">
        <SidebarTop />
        <SidebarRoutes />
        <Form id="" type="one" />
      </div>
      <div className="flex cursor-pointer items-center justify-between gap-2 rounded-lg p-2">
        <ArrowDownToLine size={40} stroke="#666666" strokeWidth={1.5} />
        <div className="flex flex-col gap-1" style={{ background: '#F3F3F3' }}>
          <h3
            className="font-inter text-xl font-medium leading-custom"
            style={{ color: '#666666' }}
          >
            Download the app
          </h3>
          <p
            className="font-inter text-sm font-normal leading-custom-1"
            style={{ color: '#666666' }}
          >
            Get the full experience
          </p>
        </div>
      </div>
    </div>
  )
}
