'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Clock, Plus } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Form from './form'
import { useColumns } from './ColumnsContext'
import { getCookie } from '@/helpers/getCookies'
import { formatDate, timeDifferenceFromNow } from '@/helpers/formatTime'

function capitalizeFirstLetter(str: String) {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

interface Task {
  _id: string
  title: string
  description: string
  priority: string
  deadline: string
  createdAt: string
  status: string
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

const Trello = () => {
  // const [columns, setColumns] = useState<Columns>(initialColumns)

  const { columns, setColumns } = useColumns()

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
      // console.log(data)
      const updatedColumns = { ...columns }

      data.tasks.forEach((task: Task) => {
        const columnKey = task.status as string

        if (!updatedColumns[columnKey]) {
          console.error(`Column ${columnKey} does not exist!`)
          return
        }

        updatedColumns[columnKey] = {
          ...updatedColumns[columnKey],
          tasks: [
            ...updatedColumns[columnKey].tasks,
            {
              id: task._id as string,
              title: task.title as string,
              status: task.status as string,
              description: task.description as string,
              priority: task.priority as string,
              deadline: formatDate(task.deadline as string),
              createdAt: timeDifferenceFromNow(task.createdAt as string),
            },
          ],
        }
      })

      setColumns(updatedColumns)
      // console.log(columns)
    } catch (error) {
      console.log('something went wrong')
    }
  }

  useEffect(() => {
    getTask()
  }, [])

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    fromColumn: string,
    taskIndex: number
  ) => {
    e.dataTransfer.setData('fromColumn', fromColumn)
    e.dataTransfer.setData('taskIndex', taskIndex.toString())
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, toColumn: string) => {
    const fromColumn = e.dataTransfer.getData('fromColumn')
    const taskIndex = parseInt(e.dataTransfer.getData('taskIndex'))

    if (!columns[fromColumn] || !columns[toColumn]) {
      return
    }

    const taskToMove = columns[fromColumn].tasks[taskIndex]
    if (fromColumn === toColumn) {
      const newTasks = Array.from(columns[fromColumn].tasks)
      const [removed] = newTasks.splice(taskIndex, 1)
      newTasks.splice(parseInt(e.dataTransfer.getData('taskNewIndex')), 0, removed)
      setColumns((prev) => ({
        ...prev,
        [fromColumn]: { ...columns[fromColumn], tasks: newTasks },
      }))
    } else {
      const newStartTasks = Array.from(columns[fromColumn].tasks)
      const newEndTasks = Array.from(columns[toColumn].tasks)
      newStartTasks.splice(taskIndex, 1)
      newEndTasks.splice(parseInt(e.dataTransfer.getData('taskNewIndex')), 0, taskToMove)
      setColumns((prev) => ({
        ...prev,
        [fromColumn]: { ...columns[fromColumn], tasks: newStartTasks },
        [toColumn]: { ...columns[toColumn], tasks: newEndTasks },
      }))
    }
  }
  // console.log(columns)

  return (
    <div className="flex gap-4 bg-white p-4">
      {Object.values(columns).map((column) => {
        return (
          <div
            key={column.id}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
            className="flex min-w-72 flex-col gap-4"
          >
            <div className="flex justify-between">
              <h3
                className="font-inter text-xl font-normal leading-custom"
                style={{ color: '#555555' }}
              >
                {column.title}
              </h3>
              <Image src="/order.svg" alt="sort" width={24} height={23} />
            </div>
            {column.tasks.map((task, index) => {
              const bgColor =
                task.priority === 'medium'
                  ? 'bg-[#FFA235]'
                  : task.priority === 'urgent'
                    ? 'bg-[#FF6B6B]'
                    : task.priority === 'low'
                      ? 'bg-[#0ECC5A]'
                      : ''
              return (
                <div
                  key={task.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, column.id, index)}
                  className="flex cursor-pointer flex-col gap-4"
                  style={cardStyles}
                >
                  <div className="flex flex-col gap-3">
                    <h4
                      className="font-inter text-base font-medium leading-custom-2"
                      style={{ color: '#606060' }}
                    >
                      {task.title}
                    </h4>
                    <p
                      className="font-inter text-sm font-normal leading-custom-1"
                      style={{ color: '#797979' }}
                    >
                      {task.description}
                    </p>
                    <button
                      style={buttonStyles}
                      className={`flex w-fit cursor-pointer items-center justify-center ${bgColor}`}
                    >
                      <span
                        className="font-inter text-xs font-normal leading-custom-3"
                        style={{ color: '#FFFFFF' }}
                      >
                        {capitalizeFirstLetter(task.priority)}
                      </span>
                    </button>
                    <div className="flex items-center gap-2">
                      <Clock size={24} stroke="#606060" strokeWidth={1.5} />
                      <span
                        className="font-inter text-sm font-semibold leading-custom-2"
                        style={{ color: '#606060' }}
                      >
                        {task.deadline}
                      </span>
                    </div>
                  </div>
                  <span
                    className="font-inter text-sm font-medium leading-custom-1"
                    style={{ color: '#797979' }}
                  >
                    {task.createdAt}
                  </span>
                </div>
              )
            })}
            <Form id={column.id} />
          </div>
        )
      })}
    </div>
  )
}

export default Trello
