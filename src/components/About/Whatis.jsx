import React from 'react'
import { RiRegisteredLine } from "react-icons/ri";
import next from '../../assests/about/next.webp'
import { GiClawHammer } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';
import { BiLowVision } from "react-icons/bi";
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function DasTEk() {
  return (
    <>
      <main className='mx-6 border-4 p-4 shadow-2xl rounded-xl my-4'>
        <h2 className='flex gap-4  text-3xl text-slate-800 font-bold  '> <FaLongArrowAltRight color='black' size={35} />What is NexgenStudy</h2>

        <div className='grid sm:flex justify-around  align-middle'>

          <div className='m-3 sm:mt-14   text-lg text-gray-700   sm:w-[50%] sm:mx-6'>Nexgen Study AI is a state-of-the-art educational platform that offers instant, step-by-step solutions to academic questions across a broad spectrum of subjects. Catering to a wide range of disciplines including STEM, Engineering & Technology, Social Studies, History, Psychology, and Languages such as English, Spanish, French, and Japanese, along with Writing and Philosophy, Nexgen Study AI ensures that every learner has quick and easy access to clear, understandable answers. Designed to support students in mastering complex topics within seconds, this platform is an invaluable resource for anyone looking to enhance their understanding and boost their academic performance at no cost.<center>
           <Link to={'/login'} >
           <button type="button" className="relative text-white bg-black hover:bg-gradient-to-bl mt-4 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ring-animation">
                                <div className='flex items-center  justify-center text-lg gap-x-3'>
                                    Get starteed free  <HiArrowSmRight size={30} />
                                </div>
                                <div className="absolute top-0 right-0 bottom-0 left-0 rounded-lg" style={{ animation: 'ring-animation 2s infinite' }}></div>
                            </button>
           </Link>
          </center>
          </div>
          <center className='my-6 sm:w-[50%]   '>
            <img src={next} className='rounded-lg size-[95%]'/>
                    </center>
        </div>

      </main>
    </>
  )
}
