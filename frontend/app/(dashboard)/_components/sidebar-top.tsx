import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const svg = [
  { path: '/bell.svg', alt: 'Bell' },
  { path: '/loading.svg', alt: 'Loading' },
  { path: '/FF.svg', alt: 'Fast forward' },
]

const SidebarTop = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="inline-flex items-center gap-2">
        <Image
          src="https://s3-alpha-sig.figma.com/img/71f6/04d7/50a4101f6f29ecef74a38e0f7ae7513c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VM3VVa9PGHndk4Xx3cTIkxtNw3EGNszsbcm1ft0qvPP9wA2WChraKVPXcMXvm23nSFji19Xg7Gl6o83tfLxLjNC9MCB0voT53dCvZ78AhIXkLsc9BLFqD4adx3723o54O5N5F0ZiOa7hy5n7H22jpi~kvFx2L6kg7y4KoLZGOR7XGghLNW7EiNAtn~nM4yc68cIHN1P1assk3lJlC5ZfSr4d7Nw4bGZTxUMuMqbnquOKp9vBhjvt55OuGVrzYprtQYdB57zKPmzw0bXPMiqPOy-sBaN-oVcDg95Nha6~twTziQrvgrdkfK1yXCL7S8t1wKOQyUaoYx~LfDOK22WVpQ__"
          alt="Profile Image"
          width={31}
          height={31}
          className="h-8 w-8 rounded-full"
        />
        <h2 className="font-inter text-xl font-medium leading-custom" style={{ color: '#080808' }}>
          Joe Gardner
        </h2>
      </div>
      <div className="flex justify-between">
        <div className="inline-flex gap-5">
          {svg.map((item, index) => (
            <Image key={index} src={item.path} alt={item.alt} width={24} height={24} />
          ))}
        </div>
        <Button variant="ghost" className="bg-[#F4F4F4]">
          <span
            className="font-inter text-base font-medium leading-custom-2"
            style={{ color: '#797979' }}
          >
            Logout
          </span>
        </Button>
      </div>
    </div>
  )
}

export default SidebarTop
