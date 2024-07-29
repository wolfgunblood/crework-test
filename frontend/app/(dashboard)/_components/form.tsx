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
      <Button
        variant="ghost"
        onClick={openModal}
        className="flex w-full justify-between rounded-lg"
        style={{ background: 'linear-gradient(180deg, #3A3A3A 0%, #202020 100%)' }}
      >
        <span
          className="font-inter text-base font-normal leading-custom-2"
          style={{ color: '#E3E1E1' }}
        >
          Add New
        </span>
        <Plus size={24} stroke="#E3E1E1" strokeWidth={1.5} />
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
