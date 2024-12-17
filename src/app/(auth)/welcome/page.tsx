//synchronise authStatus to database

import LoadingSpinner from '@/components/LoadingSpinner'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const page = () => {
  return (
      <>
      <div className='flex w-full flex-1 items-center justify-center px-4 '>
        <LoadingSpinner/>
              <Bg />
          </div>
      </>
  )
}



const Bg = () => {
  return (
    <>
      
    </>
  )
}

  export default page;