'use client'
import { Button } from '@/components/ui/button'
import { Sidebar } from './_components/Sidebar'
import Dashboard from './_components/Dashboard'
import { ColumnsProvider } from './_components/ColumnsContext'

function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)

  if (parts.length === 2) {
    const lastPart = parts.pop()
    if (lastPart) {
      const cookieValue = lastPart.split(';')[0]
      return cookieValue
    }
  }
  console.error(`Cookie named ${name} is not found or the cookie format is incorrect.`)
  return undefined
}

export default function Home() {
  const getTask = async () => {
    const token = getCookie('jwtToken')

    try {
      const response = await fetch('https://crework-test.onrender.com/api/v1/tasks', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.log('something went wrong')
    }
  }

  return (
    <ColumnsProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <Dashboard />
      </div>
    </ColumnsProvider>
  )
}
