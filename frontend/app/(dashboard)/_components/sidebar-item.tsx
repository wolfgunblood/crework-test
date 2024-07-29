'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { useRouter, usePathname } from 'next/navigation'

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  href: string
}

const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname()

  const isActive =
    (pathname === '/' && href === '/') || pathname === href || pathname?.startsWith(`${href}/`)

  return (
    <button
      type="button"
      className="flex items-center gap-4 px-1 py-2"
      style={{
        backgroundColor: isActive ? '#F4F4F4' : 'initial',
        border: isActive ? '1px solid #DDDDDD' : 'none',
        borderRadius: '4px',
      }}
    >
      <Icon size={24} stroke="#797979" strokeWidth={1.5} />
      <span className="font-inter text-xl font-normal leading-custom" style={{ color: '#797979' }}>
        {label}
      </span>
    </button>
  )
}

export default SidebarItem
