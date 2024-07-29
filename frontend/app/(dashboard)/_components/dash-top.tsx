import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Calendar, CircleHelp, Filter, Search, Share2, Sparkles } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const data = [
  {
    path: '/undraw-1.svg',
    alt: 'logo1',
    title: 'Introducing tags',
    subtitle:
      'Easily categorize and find your notes by adding tags. Keep your workspace clutter-free and efficient.',
  },
  {
    path: '/undraw-2.svg',
    alt: 'logo2',
    title: 'Share Notes Instantly',
    subtitle:
      'Effortlessly share your notes with others via email or link. Enhance collaboration with quick sharing options.',
  },
  {
    path: '/undraw-3.svg',
    alt: 'logo3',
    title: 'Access Anywhere',
    subtitle:
      "Sync your notes across all devices. Stay productive whether you're on your phone, tablet, or computer.",
  },
]

const Dashtop = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1
          className="text-left font-barlow text-5xl font-semibold leading-14"
          style={{ color: '#080808' }}
        >
          Good morning, Joe!
        </h1>
        <div className="inline-flex items-center gap-2">
          <p
            className="font-inter text-base font-normal leading-custom-2"
            style={{ color: '#080808' }}
          >
            Help & Support
          </p>
          <CircleHelp size={24} stroke="#080808" strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-4 border bg-white p-4">
            <Image src={item.path} alt={item.alt} width={76} height={70} />
            <div className="flex flex-col gap-1">
              <h2
                className="font-inter text-base font-semibold leading-custom-2"
                style={{ color: '#868686' }}
              >
                {item.title}
              </h2>
              <p
                className="font-inter text-sm font-normal leading-custom-1"
                style={{ color: '#868686' }}
              >
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="relative">
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 opacity-50">
            <Search />
          </div>
          <Input type="text" placeholder="Search" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 rounded p-2">
            <span
              className="font-inter text-base font-normal leading-custom-2"
              style={{ color: '#797979' }}
            >
              Calendar view
            </span>
            <Calendar size={24} stroke="#797979" strokeWidth={1.5} />
          </div>
          <div className="flex items-center gap-4 rounded p-2">
            <span
              className="font-inter text-base font-normal leading-custom-2"
              style={{ color: '#797979' }}
            >
              Automation
            </span>
            <Sparkles size={24} stroke="#797979" strokeWidth={1.5} />
          </div>
          <div className="flex items-center gap-4 rounded p-2">
            <span
              className="font-inter text-base font-normal leading-custom-2"
              style={{ color: '#797979' }}
            >
              Filter
            </span>
            <Filter size={24} stroke="#797979" strokeWidth={1.5} />
          </div>
          <div className="flex items-center gap-4 rounded p-2">
            <span
              className="font-inter text-base font-normal leading-custom-2"
              style={{ color: '#797979' }}
            >
              Share
            </span>
            <Share2 size={24} stroke="#797979" strokeWidth={1.5} />
          </div>
          <Button>Create new task</Button>
        </div>
      </div>
    </div>
  )
}

export default Dashtop
