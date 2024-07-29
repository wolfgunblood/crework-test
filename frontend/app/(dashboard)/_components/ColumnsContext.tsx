import React, { createContext, useState, useContext } from 'react'

interface Task {
  id: string
  title: string
  description: String
  status: String
  priority: String
  deadline: String
  createdAt: String
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
    title: 'To do',
    tasks: [
      {
        id: 'task-1',
        title: 'Implement User Authentication',
        description: 'Develop and integrate user authentication using email and password.',
        status: 'todo',
        priority: 'urgent',
        deadline: '2024-08-15',
        createdAt: '1 hr ago',
      },
    ],
  },
  inProgress: {
    id: 'inProgress',
    title: 'In progress',
    tasks: [
      {
        id: 'task-2',
        title: 'Design Home Page UI',
        description: 'Develop and integrate user authentication using email and password.',
        status: 'in-progress',
        priority: 'medium',
        deadline: '2024-08-15',
        createdAt: '1 hr ago',
      },
      {
        id: 'task-3',
        title: 'Conduct User Feedback Survey',
        description: 'Collect and analyze user feedback to improve app features.',
        status: 'in-progress',
        priority: 'low',
        deadline: '2024-08-05',
        createdAt: '3 hr ago',
      },
    ],
  },
  underReview: {
    id: 'underReview',
    title: 'Under Review',
    tasks: [
      {
        id: 'task-4',
        title: 'Integrate Cloud Storage',
        description: 'Enable cloud storage for note backup and synchronization.',
        status: 'under-review',
        priority: 'urgent',
        deadline: '2024-08-20',
        createdAt: '2 days ago',
      },
    ],
  },
  finished: {
    id: 'finished',
    title: 'Finished',
    tasks: [
      {
        id: 'task-5',
        title: 'Test Cross-browser Compatibility',
        description: 'Ensure the app works seamlessly across different web browsers.',
        status: 'finished',
        priority: 'medium',
        deadline: '2024-07-30',
        createdAt: '4 days ago',
      },
    ],
  },
}

interface ColumnsContextType {
  columns: Columns
  setColumns: React.Dispatch<React.SetStateAction<Columns>>
}

const ColumnsContext = createContext<ColumnsContextType | undefined>(undefined)

export const ColumnsProvider = ({ children }: { children: React.ReactNode }) => {
  const [columns, setColumns] = useState<Columns>(initialColumns)

  return (
    <ColumnsContext.Provider value={{ columns, setColumns }}>{children}</ColumnsContext.Provider>
  )
}

export const useColumns = () => {
  const context = useContext(ColumnsContext)
  if (!context) {
    throw new Error('useColumns must be used within a ColumnsProvider')
  }
  return context
}

export default ColumnsContext
