import React from 'react'

const AuthLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='bg-gradient-to-b from-[#FFFFFF] to-[#AFA3FF]'>{children}</div>
    )
}

export default AuthLayout