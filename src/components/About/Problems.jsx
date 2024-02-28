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
            <main className='mx-6 border-4 p-4 shadow-2xl rounded-xl my-4'>
                <h2 className='flex justify-start align-middle text-3xl text-slate-900  font-bold gap-2'><VscCommentUnresolved className='m-1'/>
                    Problems we are trying to solve -</h2>
                <section className='m-8 flex justify-around align-middle '>
                    <div className=' border-[3px] py-1 shadow-2xl border-black  rounded-xl w-[400px]'>
                        <span className=' flex mx-4  text-slate-900  text-2xl font-semibold   align-middle'><TiLightbulb  className='mx-3' size={35}/>  Efficient Problem Solving:</span>
                        <p className='mx-6 my-3'>Next Gen Study AI reduces the time spent on understanding complex academic problems. By providing step-by-step solutions, we enable students to grasp concepts quickly and efficiently, outperforming traditional study methods. </p>                 
                    </div>
                    <div className='m-3 border-[3px] p-4 shadow-2xl border-black  rounded-xl w-[400px]'>
                        <span className=' flex mx-4  text-slate-900  text-2xl font-semibold   align-middle'><AiOutlineUser  className='mx-3' size={35}/> Personalized Learning</span>
                        <p className='mx-6 my-3'>Our AI adapts to each student's learning style, offering personalized practice questions and study plans. This individualized approach ensures that every student can master topics at their own pace, leading to deeper understanding and retention. </p>                 
                    </div>
                    <div className='m-3 border-[3px] p-4 shadow-2xl border-black  rounded-xl w-[400px]'>
                        <span className=' flex mx-4  text-slate-900  text-2xl font-semibold   align-middle'><BiBookOpen  className='mx-3' size={35}/>  Accessible Tutoring</span>
                        <p className='mx-6 my-3'>With Next Gen Study AI, expert help is always at your fingertips. Our AI tutoring system is available 24/7, eliminating the need to wait for assistance and allowing for immediate clarification of doubts  </p>                 
                    </div>
                </section>
                <section className='m-8 flex justify-around align-middle '>
                    <div className='m-3 border-[3px] p-4 shadow-2xl border-black  rounded-xl w-[400px]'>
                        <span className=' flex mx-4  text-slate-900  text-2xl font-semibold   align-middle'><GiBrain  className='mx-3' size={35}/>Data-Driven Insights</span>
                        <p className='mx-6 my-3'>Leveraging AI to analyze learning patterns, Next Gen Study AI provides actionable insights that help students focus on their weak areas. This data-driven guidance is crucial for making the most of study time.  </p>                 
                    </div>
                    <div className='m-3 border-[3px] p-4 shadow-2xl border-black  rounded-xl w-[400px]'>
                        <span className=' flex mx-4  text-slate-900  text-2xl font-semibold   align-middle'><FaGamepad  className='mx-3' size={35}/> Interactive Learning Tools</span>
                        <p className='mx-6 my-3'>Our platform includes interactive tools like flashcards, quizzes, and games that make learning engaging. Next Gen Study AI's interactive approach promotes active learning and better information recall. </p>                 
                    </div>
                    <div className='m-3 border-[3px] p-4 shadow-2xl border-black  rounded-xl w-[400px]'>
                        <span className=' flex mx-4  text-slate-900  text-2xl font-semibold   align-middle'><MdSchool  className='mx-3' size={35}/> Comprehensive Academic Support</span>
                        <p className='mx-6 my-3'>Next Gen Study AI offers comprehensive support across various subjects, from mathematics to science, languages, and more, ensuring that all academic needs are met with expertise and depth </p>                 
                    </div>
                </section>
                <Link className='flex align-middle justify-center' to="/signin">
                                <button type="button" className="bg-blackhover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white flex align-middle justify-center">
                                    <div className='flex items-center justify-center gap-x-3'>
                                       Check How <HiArrowSmRight size={20} />
                                    </div>
                                </button>
                            </Link>
            </main>

        </>
    )
}
