'use client'
import { Button } from '@/components/ui/button'
import { Sidebar } from './_components/Sidebar'
import Dashboard from './_components/Dashboard'
import { ColumnsProvider, useColumns } from './_components/ColumnsContext'

export default function Home() {
  return (
    <ColumnsProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <Dashboard />
      </div>
    </ColumnsProvider>
  )
}
