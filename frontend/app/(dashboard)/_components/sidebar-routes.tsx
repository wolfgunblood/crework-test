'use client'

import { Users, Home, SquareKanban, Settings, ChartLine } from 'lucide-react'
import SidebarItem from './sidebar-item'
import { usePathname } from 'next/navigation'

const routes = [
  {
    icon: Home,
    label: 'Home',
    href: '/',
  },
  {
    icon: SquareKanban,
    label: 'Boards',
    href: '/boards',
  },
  {
    icon: Settings,
    label: 'Settings',
    href: '/settings',
  },
  {
    icon: Users,
    label: 'Teams',
    href: '/teams',
  },
  {
    icon: ChartLine,
    label: 'Analytics',
    href: '/analytics',
  },
]

export const SidebarRoutes = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      {routes.map((route, index) => (
        <SidebarItem key={index} icon={route.icon} label={route.label} href={route.href} />
      ))}
    </div>
  )
}
