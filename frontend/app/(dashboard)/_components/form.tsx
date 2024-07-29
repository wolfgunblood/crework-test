import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import RightSlideModal from './RightSidemodal'
import { Input } from '@/components/ui/input'
import { SelectForm } from './addForm'
import { Separator } from '@/components/ui/separator'

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
          <SelectForm />
          <Separator />
          <span
            className="font-inter text-base font-normal leading-custom-2"
            style={{ color: '#C0BDBD' }}
          >
            Start writing, or drag your own files here.
          </span>
        </div>
      </RightSlideModal>
    </div>
  )
}

export default Form
