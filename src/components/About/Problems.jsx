import React from 'react'
import { VscCommentUnresolved } from "react-icons/vsc";
import { MdOutlineReportProblem } from "react-icons/md";
import { HiArrowSmRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { TiLightbulb } from 'react-icons/ti'; // For Efficient Problem-Solving
import { AiOutlineUser } from 'react-icons/ai'; // For Personalized Learning
import { BiBookOpen } from 'react-icons/bi'; // For Accessible Tutoring
import { GiBrain } from 'react-icons/gi'; // For Data-Driven Insights
import { FaGamepad } from 'react-icons/fa'; // For Interactive Learning Tools
import { MdSchool } from 'react-icons/md'; // For Comprehensive Academic Support


export default function Problems() {
    return (
        <>
            <main className='mx-6  p-4 rounded-xl my-4'>
                <h2 className='flex   justify-start align-middle text-3xl text-slate-900  font-bold gap-2'><VscCommentUnresolved className='my-2  sm:m-1'/>
                   <span className='text-gradient text-2xl sm:text-3xl'> Problems we are trying to solve -</span></h2>
                <section className='m-8 grid  sm:flex justify-around align-middle '>
                    <div className='m-3 border-[3px] p-4 shadow-2xl border-black  rounded-xl sm:w-[400px]  w-[300px] '>
                        <span className=' flex mx-4 text-gradient text-lg  text-slate-900  sm:text-2xl font-semibold   align-middle'><TiLightbulb  className='mx-3' size={35}/>  Efficient Problem Solving:</span>
                        <p className='mx-6 my-3'>With NexGen Study AI, you'll leap over complex problems with superhero speed. Our instant, step-by-step guidance turns "???" into "Aha!" in no time.</p>                 
                    </div>
                    <div className='m-3 border-[3px] p-4 shadow-2xl border-black  rounded-xl sm:w-[400px]  w-[300px] '>
                        <span className=' flex mx-4 text-gradient   text-lg  text-slate-900  sm:text-2xl     font-semibold   align-middle'><AiOutlineUser  className='mx-3' size={35}/>Help on Hyperdrive:</span>
                        <p className='mx-6 my-3'>Got a study SOS at 2 AM? No stress! NexGen Study AI is like your academic night owl, always up and ready to clear up any confusion, on your time. </p>                 
                    </div>
                    <div className='m-3 border-[3px] p-4 shadow-2xl border-black  rounded-xl sm:w-[400px]  w-[300px] '>
                        <span className=' flex mx-4 text-gradient   text-lg  text-slate-900  sm:text-2xl  font-semibold   align-middle'><BiBookOpen  className='mx-3' size={35}/> Snap & Solve Simplicity:</span>
                        <p className='mx-6 my-3'>Hit a study snag? Snap a photo, upload, and let NexGen Study AI do the rest. Instant solutions, anytime, turning "stuck" into "solved" with just a pic.
 </p>                 
                    </div>
                </section>
                <section className='m-8  grid  sm:flex  justify-around align-middle '>
                    <div className='m-3 border-[3px] p-4 shadow-2xl border-black  rounded-xl sm:w-[400px]  w-[300px] '>
                        <span className=' flex mx-4 text-gradient   text-lg  text-slate-900  sm:text-2xl  font-semibold   align-middle'><GiBrain  className='mx-3' size={35}/>Ditch the Info Avalanche:
</span>
                        <p className='mx-6 my-3'>Buried in facts and figures? We’ll plow through the data and carve out a clear path for you to follow, highlighting what matters most for your studies.</p>                 
                    </div>
                    <div className='m-3 border-[3px] p-4 shadow-2xl border-black  rounded-xl sm:w-[400px]  w-[300px] '>
                        <span className=' flex mx-4 text-gradient   text-lg  text-slate-900  sm:text-2xl  font-semibold   align-middle'><FaGamepad  className='mx-3' size={35}/>All-in-One Academic Arsenal:
</span>
                        <p className='mx-6 my-3'>From the mysteries of math to the enigmas of engineering, get a full deck of subjects at your fingertips. NexGen Study AI is your one-stop-shop for learning anything and everything. </p>                 
                    </div>
                    <div className='m-3 border-[3px] p-4 shadow-2xl border-black  rounded-xl sm:w-[400px]  w-[300px] '>
                        <span className=' flex mx-4 text-gradient   text-lg  text-slate-900  sm:text-2xl  font-semibold   align-middle'><MdSchool  className='mx-3' size={35}/> Stay Hooked, Not Booked:
</span>
                        <p className='mx-6 my-3'>
Get hooked on learning with engaging content that’s more gripping than your favorite series. With NexGen Study AI, studying isn't just studying - it’s an experience.
</p>                 
                    </div>
                </section>
                <Link className='sm:flex grid  align-middle justify-center' to="/signin">
                                <button type="button" className="bg-blackhover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white flex align-middle justify-center">
                                    <div className='sm:flex grid  items-center justify-center gap-x-3'>
                                       Check How <HiArrowSmRight size={20} />
                                    </div>
                                </button>
                            </Link>
            </main>

        </>
    )
}
