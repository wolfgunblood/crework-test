import React from 'react'
import Dashtop from './dash-top'
import Trello from './trello'

const Dashboard = () => {
  return (
    <div className="flex w-full flex-col gap-4 px-2 py-4">
      <Dashtop />
      <Trello />
    </div>
  )
}

export default Dashboard
