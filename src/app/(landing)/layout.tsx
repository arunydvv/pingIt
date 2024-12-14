import React from 'react'
import Navbar from '@/components/Navbar'

interface LayoutInterface {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutInterface) => {
  return (
    <>
        <Navbar />
      {children}
    </>
  )
}

export default Layout
