import React from 'react'
import { HiArrowSmRight } from 'react-icons/hi';
import { MdFileDownloadDone,  } from "react-icons/md";
import roboto from '../../assests/roboto.png'
import phonerobo from '../../assests/phone-robo.png'
import right from '../../assests/right.webp'
import { FaUnlockAlt } from 'react-icons/fa'; // Completely Free
import { AiOutlineClockCircle } from 'react-icons/ai'; // Always Available
import { MdOutlineFlashOn } from 'react-icons/md'; // Instant Solutions
import { GiBrain } from 'react-icons/gi'; // Understandable Learning
import { IoMdPeople } from 'react-icons/io'; // Student Forum
import { BiSupport } from 'react-icons/bi'; // Subject Assistants
import { RiRobotLine } from 'react-icons/ri'; // Explaining Chatbot
import { BsListCheck } from 'react-icons/bs'; // Detailed Steps
import { HiOutlineShare } from 'react-icons/hi'; // Shareable Answers
import { Link } from 'react-router-dom';


export default function Feautures() {
    return (
        <>
            <main className='m-8 sm:mb-20 feautures rounded-xl p-10  shadow-2xl   mt-20 '>
                <h3 className='sm:text-4xl text-xl font-bold text-gradient flex justify-center text align-middle'>Feautures that will make your study more productive </h3>
                <center className='flex justify-center text-sm align-middle font-semibold text-gray-700   m-3'>Empower your education with on-demand expertise and community-driven support – all at no cost, available round the clock</center>
                <section className='sm:flex grid justify-around  sm:px-10 sm:py-5 sm:m-8 border-2 border-black rounded-3xl'>
                
                    <ul className='sm:p-3 justify-start'>
                        <li className='sm:m-5  my-2 mt-5 font-semibold font-slate-600 text-sm sm:text-xl    '><div className='flex align-middle '><FaUnlockAlt   className=' m-1 mr-2' size={30} />Completely Free - No cost, full access to all academic resources.</div></li>
                        <li className='sm:m-5 my-2 font-semibold font-slate-600 text-sm sm:text-xl    '><div className='flex '><AiOutlineClockCircle   className=' m-1 mr-2' size={30} /> Always Available - Access study help anytime, day or night.</div></li>
                        <li className='sm:m-5 my-2  font-semibold font-slate-600 text-sm sm:text-xl    '><div className='flex '><MdOutlineFlashOn    className=' m-1 mr-2' size={30} />Instant Solutions - Academic answers in seconds, with assured accuracy.</div></li>
                        <li className='sm:m-5 my-2  font-semibold font-slate-600 text-sm sm:text-xl    '><div className='flex '><GiBrain    className=' m-1 mr-2' size={30} />Understandable Learning - Simplified explanations for effective study outcomes.</div></li>
                        <li className='sm:m-5 my-2  font-semibold font-slate-600 text-sm sm:text-xl    '><div className='flex '><IoMdPeople   className=' m-1 mr-2' size={30} />Student Forum - Connect, discuss, and share with peers online.</div></li>
                        <li className='sm:m-5 my-2  font-semibold font-slate-600 text-sm sm:text-xl    '><div className='flex '><BiSupport   className=' m-1 mr-2' size={30} /> Subject Assistants - Dedicated support for each specific study area.</div></li>
                        <li className='sm:m-5 my-2  font-semibold font-slate-600 text-sm sm:text-xl    '><div className='flex '><RiRobotLine   className=' m-1 mr-2' size={30} /> Explaining Chatbot - Chatbot demystifies any subject, anytime.</div></li>
                        <li className='sm:m-5 my-2  font-semibold font-slate-600 text-sm sm:text-xl    '><div className='flex '><BsListCheck   className=' m-1 mr-2' size={30} />Detailed Steps - Solutions with clear, comprehensive steps.</div></li>
                        <li className='sm:m-5 my-2  font-semibold font-slate-600 text-sm sm:text-xl    '><div className='flex '><HiOutlineShare   className=' m-1 mr-2' size={30} />Shareable Answers - Send and collaborate on solutions with friends.   </div></li>
                        <center>
                           <Link to={'/login'} >
                           <button type="button" className="relative text-white bg-black hover:bg-gradient-to-bl mt-4 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ring-animation">
                                <div className='flex items-center  justify-center text-2xl gap-x-3'>
                                    Start for free  <HiArrowSmRight size={30} />
                                </div>
                                <div className="absolute top-0 right-0 bottom-0 left-0 rounded-lg" style={{ animation: 'ring-animation 2s infinite' }}></div>
                            </button>
                           </Link>
                        </center>
                    </ul>

                    <div className='grid'>
                    {/* <img src={roboto} className=' absolute z-200  h-[400px] top- '/> */}
                        <img src={right} className=' rounded-xl w-[270px] my-3 mx-1 bord border-blue-400 h-[300px] sm:h-[550px] '/>
                        
                    </div>
                </section>
            </main>
        </>
    )
}
