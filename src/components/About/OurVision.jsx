import React from 'react'
import { RiRegisteredLine } from "react-icons/ri";
import vision from '../../assests/about/vision.webp'
import { GiClawHammer } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';
import { BiLowVision } from "react-icons/bi";

export default function DasTEk() {
    return (
        <>
            <main className='mx-6 border-4 p-4 shadow-2xl rounded-xl my-4'>
                <h3 className='flex align-middle justify-start font-bold text-3xl mt-3 '> <BiLowVision size={40}  className='mb-3' />
                    Our vision </h3>
                    <div className='grid sm:flex justify-around  align-middle'>
                    <center className='my-6 sm:w-[50%]   '>
                        <img src={vision} className='rounded-lg size-[95%]'/>
                    </center>
                    <div className='m-3 sm:mt-12  text-sm sm:text-lg text-gray-700   sm:w-[50%] sm:mx-6'>Our vision at NexGen Study AI is to be the catalyst for a global educational transformation. We envision a future where every student is equipped with the knowledge and skills to excel academically and beyond. Our platform is more than just a tool for getting homework done—it's a bridge to academic excellence and a lifetime of learning. We are committed to democratizing education, offering an expansive suite of learning tools that spark curiosity, encourage critical thinking, and foster deep understanding. Our vision is to create a world where learners are no longer intimidated by challenging subjects and can instead approach their studies with confidence, curiosity, and a sense of adventure. Through NexGen Study AI, we are building a community of empowered learners ready to tackle the challenges of the future.<center>
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
   
                    </div>
                  
            </main>
        </>
    )
}
