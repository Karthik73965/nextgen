import React from 'react'
import ChilFaq from '../components/Faq/ChildFaq'
import Navbar from '../components/Navbar'
import ReviewForm from '../components/utils/Review'
import Fotter from '../components/Fotter'
export default function Faq() {
  return (
    <>
      <Navbar />
      <div className='h-[120px]'></div>
      <main className='px-8' >
        <h1 className='flex justify-center align-middle text-5xl mt-[5] mb-10 font-semibold  text-gradient'>FAQ's</h1>
        <ChilFaq  />
        <ReviewForm/>
      </main>
      <Fotter/>

    </>
  )
}
