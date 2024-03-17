import React from 'react'
import Hero from '../components/home/Hero'
import VideoSection from '../components/home/VideoSection'
import Subjects from '../components/home/Subjects'
import Reviews from '../components/home/Reviews'
import Feautures from '../components/home/Feautures'
import Fotter from '../components/Fotter'
import Navbar from '../components/Navbar'
import Problems from '../components/About/Problems'
// import Review from '../components/utils/Review'
import Review from '../components/Home/Reviews'

export default function Home() {
  return (
   <>
   <Navbar/>
    <div  className=''>
      <div className='h-[120px]'></div>
      <Hero/> 
      {/* <VideoSection/> */}
      <Subjects/>
      <Problems/>
      <Feautures/>
      <Review/>
      <Fotter/>
    </div>
   </>
  )
}
