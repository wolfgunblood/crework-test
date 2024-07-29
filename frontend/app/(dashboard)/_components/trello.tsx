import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Clock, Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Form from './form'

function capitalizeFirstLetter(str: string) {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const cardStyles = {
  padding: '14px 13px',
  gap: '16px',
  borderRadius: '8px 0px 0px 0px',
  borderTopWidth: '1px',
  backgroundColor: '#F9F9F9',
  border: '1px solid #DEDEDE',
}

const buttonStyles = {
  padding: '6px 8px',
  gap: '10px',
  borderRadius: '8px',
}

const data = [
  {
    head: 'To do',
    content: [
      {
        title: 'Implement User Authentication',
        description: 'Develop and integrate user authentication using email and password.',
        status: 'todo',
        priority: 'urgent',
        createdAt: '2024-08-15',
        time: '1 hr ago',
      },
    ],
  },
  {
    head: 'In progress',
    content: [
      {
        title: 'Design Home Page UI',
        description: 'Develop and integrate user authentication using email and password.',
        status: 'in-progress',
        priority: 'medium',
        createdAt: '2024-08-15',
        time: '1 hr ago',
      },
      {
        title: 'Conduct User Feedback Survey',
        description: 'Collect and analyze user feedback to improve app features.',
        status: 'in-progress',
        priority: 'low',
        createdAt: '2024-08-05',
        time: '3 hr ago',
      },
    ],
  },
  {
    head: 'Under Review',
    content: [
      {
        title: 'Integrate Cloud Storage',
        description: 'Enable cloud storage for note backup and synchronization.',
        status: 'under-review',
        priority: 'urgent',
        createdAt: '2024-08-20',
        time: '2 days ago',
      },
    ],
  },
  {
    head: 'Finished',
    content: [
      {
        title: 'Test Cross-browser Compatibility',
        description: 'Ensure the app works seamlessly across different web browsers.',
        status: 'finished',
        priority: 'medium',
        createdAt: '2024-07-30',
        time: '4 days ago',
      },
    ],
  },
]

const Trello = () => {
  return (
    <div className="flex gap-4 bg-white p-4">
      {data.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h3
                className="font-inter text-xl font-normal leading-custom"
                style={{ color: '#555555' }}
              >
                {item.head}
              </h3>
              <Image src="/order.svg" alt="sort" width={24} height={23} />
            </div>
            {item.content.map((item, index) => {
              const bgColor =
                item.priority === 'medium'
                  ? 'bg-[#FFA235]'
                  : item.priority === 'urgent'
                    ? 'bg-[#FF6B6B]'
                    : item.priority === 'low'
                      ? 'bg-[#0ECC5A]'
                      : ''
              return (
                <div key={index} className="flex cursor-pointer flex-col gap-4" style={cardStyles}>
                  <div className="flex flex-col gap-3">
                    <h4
                      className="font-inter text-base font-medium leading-custom-2"
                      style={{ color: '#606060' }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="font-inter text-sm font-normal leading-custom-1"
                      style={{ color: '#797979' }}
                    >
                      {item.description}
                    </p>
                    <button
                      style={buttonStyles}
                      className={`flex w-fit cursor-pointer items-center justify-center ${bgColor}`}
                    >
                      <span
                        className="font-inter text-xs font-normal leading-custom-3"
                        style={{ color: '#FFFFFF' }}
                      >
                        {capitalizeFirstLetter(item.priority)}
                      </span>
                    </button>
                    <div className="flex items-center gap-2">
                      <Clock size={24} stroke="#606060" strokeWidth={1.5} />
                      <span
                        className="font-inter text-sm font-semibold leading-custom-2"
                        style={{ color: '#606060' }}
                      >
                        {item.createdAt}
                      </span>
                    </div>
                  </div>
                  <span
                    className="font-inter text-sm font-medium leading-custom-1"
                    style={{ color: '#797979' }}
                  >
                    {item.time}
                  </span>
                </div>
              )
            })}
            <Form />
          </div>
        )
      })}
    </div>
  )
}

export default Trello
