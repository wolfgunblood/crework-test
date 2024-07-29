import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import RightSlideModal from './RightSidemodal'
import { Input } from '@/components/ui/input'

const Form = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <div className="App">
      <Button onClick={openModal} className="flex w-full justify-between">
        <span>Add New</span>
        <Plus />
      </Button>
      <RightSlideModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col gap-8">
          <Input />
        </div>
      </RightSlideModal>
    </div>
  )
}

export default Form
