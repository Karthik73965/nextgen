import React from 'react'
import { RiRegisteredLine } from "react-icons/ri";
import das from '../../assests/about/das.png'
import { GiClawHammer } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { HiArrowSmRight } from 'react-icons/hi';



export default function DasTEk() {
    return (
        <>
            <main className='mx-6 border-4 p-4 shadow-2xl rounded-xl my-4'>
                <h3 className='flex align-middle mt-2 justify-start font-bold text-3xl '> <RiRegisteredLine className='m-1' />
                dasTEK Solutions, LLC - </h3>
                <div className='grid sm:flex justify-around text-gray-700   align-middle'>
                    <div className='m-3 sm:  mt-14  sm:text-[22px] sm:w-[50%] mx-6'>dasTEK Solutions, LLC is your gateway to the future with Generative AI. We're transforming industries by infusing them with AI that's not just smart, but also intuitive and inventive. From revolutionizing education with NexGen Study AI to enhancing the backbone of finance, Entertainment  and more, we're redefining what's possible. With every innovation, we're setting new standards and inviting every sector to join us on a journey to a brighter, AI-driven tomorrow.
                   
                    </div>
                    <center className='my-6 sm:w-[50%]   '>
                       <img src={das} className='rounded-lg'/>
                       <center>
                         <Link target='_blank' to={'https://www.dasteksolutionsllc.com/'}>
                         <button type="button" className="relative text-white mt-4 sm:mt-24 bg-black hover:bg-gradient-to-bl  focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ring-animation">
                                <div className='flex  items-center  justify-center text-2xl gap-x-3'>
                                  Learn more <HiArrowSmRight size={30} />
                                </div>
                                <div className="absolute top-0 right-0 bottom-0 left-0 rounded-lg" style={{ animation: 'ring-animation 2s infinite' }}></div>
                            </button>
                         </Link>
                        </center>
                    </center>

                </div>
            </main>
        </>
    )
}
