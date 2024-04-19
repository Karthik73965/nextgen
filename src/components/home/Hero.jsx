import React from 'react'
import { HiArrowSmRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  return (
    <>
      <center>
        <div className='rounded-3xl text-lg bg-gray-200 border-2 border-gray-300 shadow-2xl text-black font-semibold m-auto w-[300px]  py-2 z-0 '>
          &#129321; <span className='text-gradient font-bold'>10X</span>  more productivity</div>
        <section className=' w-[70vw]  pt-5 m-[40px]'>

          {/* <span>
            <span className='md:text-[78px] text-[35px]   text-black font-bold '
            >Experience the Next Generation of Education at </span><br />
            <span  className='sm:text-8xl text-5xl mt-10 text-gradient font-bold'> Free of Cost</span>
          </span> */}

  
<div className='h-[30vh] md:h-[30vh]'> 
<TypeAnimation
        sequence={[ 
          // Same substring at the start will only be typed out once, initially
          'Ask Any Mathematics Question as Image/Text And Get An Instant Solution Step-by-Step In Seconds',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Ace Your Exams with Ease! Fast-track Your Success with NexGenStudyAI          ',
          2000,
          'Experience The Next Generation Of Education Now...',
          2000,
        ]}
        wrapper="span"
        className='sm:text-6xl text-4xl h-[4000px]  font-bold'
        speed={10}
        repeat={Infinity}
      />
  </div>

          <p className='my-8 mb-10 sm:text-xl md:w-[700px] font-semibold bg-gray-200 p-3 border-2 border-gray-300 shadow-lg rounded-full text:sm text-black'>Any Mathematics Question . Get instant, step-by-step solutions </p>
         <Link to={'/login'} className='m-4'>
         <button type="button" className="relative border-4 border-gray-500 text-white bg-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center ">
            <div className='flex items-center justify-center text-xl gap-x-3'>
              Login Now   <HiArrowSmRight size={20} />
            </div>
            <div className="absolute top-0 right-0 bottom-0 left-0 rounded-lg" ></div>
          </button>
         </Link>
          <Link to="/signup" >
            <button type="button" className="relative border-4 border-gray-500 text-white bg-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-full text-sm px-5 py-2.5 text-center ">
              <div className='flex items-center justify-center text-xl gap-x-3'>
                Start for free  <HiArrowSmRight size={20} />
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 rounded-lg" ></div>
            </button>
          </Link>
        </section>
      </center>

    </>
  )
}
