import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import RightSlideModal from './RightSidemodal'
import { Input } from '@/components/ui/input'
import { SelectForm } from './addForm'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const Form = ({ id, type }: { id: string; type: string }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      {type === 'one' && (
        <Button
          variant="ghost"
          onClick={openModal}
          className="flex items-center justify-between py-2"
          style={{ background: 'linear-gradient(180deg, #4C38C2 0%, #2F2188 100%)' }}
        >
          {' '}
          <span
            className="font-inter text-xl font-medium leading-custom"
            style={{ color: '#FFFFFF' }}
          >
            Create new task
          </span>
          <Image src="./CirclePlus.svg" alt="Circle Plus" width={24} height={24} />
        </Button>
      )}
      {type === 'second' && (
        <Button
          variant="ghost"
          onClick={openModal}
          className="flex items-center justify-between gap-2"
          style={{ background: 'linear-gradient(180deg, #4C38C2 0%, #2F2188 100%)' }}
        >
          {' '}
          <span
            className="font-inter text-base font-medium leading-custom-2"
            style={{ color: '#FFFFFF' }}
          >
            Create new
          </span>
          <Image src="./CirclePlus.svg" alt="Circle Plus" width={24} height={24} />
        </Button>
      )}
      <RightSlideModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col gap-8">
          <SelectForm id={id} />
          <Separator />
          <span
            className="font-inter text-base font-normal leading-custom-2"
            style={{ color: '#C0BDBD' }}
          >
            Start writing, or drag your own files here.
          </span>
        </div>
      </RightSlideModal>
    </>
  )
}

export default Form
