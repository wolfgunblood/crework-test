import React from 'react'
import { X, Maximize2, Share2, Star } from 'lucide-react'
interface RightSlideModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const RightSlideModal = ({ isOpen, onClose, children }: RightSlideModalProps) => {
  return (
    <div className={`fixed inset-0 flex ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className={`absolute inset-0 bg-black opacity-50`} onClick={onClose}></div>
      <div className="relative h-full min-w-[670px] space-y-8 bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div onClick={onClose} className="relative cursor-pointer">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </div>
            <div>
              <Maximize2 className="h-4 w-4" />
              <span className="sr-only">Enlarge</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 rounded p-2">
              <span
                className="font-inter text-base font-normal leading-[24.2px]"
                style={{ color: '#797979' }}
              >
                Share
              </span>
              <Share2 size={24} stroke="#797979" strokeWidth={1.5} />
            </div>
            <div className="flex items-center gap-4 rounded p-2">
              <span
                className="font-inter text-base font-normal leading-[24.2px]"
                style={{ color: '#797979' }}
              >
                Favorite
              </span>
              <Star size={24} stroke="#797979" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default RightSlideModal
