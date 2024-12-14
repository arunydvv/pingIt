import React from 'react'
import MaxWidthWrapper
  from './components/MaxWidthWrapper'
import Heading from './components/Heading'

const page = () => {
  return (
    <>
      <section className='relative py-24 sm:py-32 bg-brand-25'>
        <MaxWidthWrapper classname='' >
          <div className='relative mx-auto text-center flex flex-col items-center gap-10'>
            <div>
                <Heading></Heading>
            </div>
        </div>
        </MaxWidthWrapper>
       </section>
       <section></section>
       <section></section>
       <section></section>
    </>
  )
}

export default page