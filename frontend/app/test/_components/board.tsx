'use client'
import React, { useState } from 'react'

interface Task {
  id: string
  content: string
}

type Column = {
  id: string
  title: string
  tasks: Task[]
}

interface Columns {
  [key: string]: Column
}

const initialColumns: Columns = {
  todo: {
    id: 'todo',
    title: 'Todo',
    tasks: [
      { id: 'task-1', content: 'Task 1' },
      { id: 'task-2', content: 'Task 2' },
    ],
  },
  inProgress: {
    id: 'inProgress',
    title: 'In Progress',
    tasks: [{ id: 'task-3', content: 'Task 3' }],
  },
  underReview: { id: 'underReview', title: 'Under Review', tasks: [] },
  finished: { id: 'finished', title: 'Finished', tasks: [{ id: 'task-4', content: 'Task 4' }] },
}

function Board() {
  const [columns, setColumns] = useState<Columns>(initialColumns)

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

  return (
    <div className="flex gap-2">
      {Object.values(columns).map((column) => (
        <div
          key={column.id}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, column.id)}
          className="column"
          style={{ margin: 8, minHeight: 100, backgroundColor: '#f0f0f0', padding: 8 }}
        >
          <h2>{column.title}</h2>
          {column.tasks.map((task, index) => (
            <div
              key={task.id}
              draggable
              onDragStart={(e) => handleDragStart(e, column.id, index)}
              className="task"
              style={{ margin: 8, padding: 8, backgroundColor: 'white' }}
            >
              {task.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board
