import React from 'react'
import Cards from '../utils/Cards'
import { PiMathOperationsBold } from "react-icons/pi";
import { MdEngineering } from 'react-icons/md';
import { FaPeopleArrows } from 'react-icons/fa';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { MdScience } from 'react-icons/md';
const Science = [
    "Physics",
    " Chemistry",
    "Biology",
    "Environmental Science    "
]
const socail =[
    "History",
"Psychology",
"Sociology"
]
const maths =[
    "Mathematics",
    "",
    "",
]
const Engineering=[
"Computer Science",
"Electrical Engineering",
"Civil Engineering",
"Mechanical Engineering",
"Industrial Engineering",
"Chemical Engineering"
]
const Communications=[
    "English",
"Writing",
"Philosophy",
"Spanish",
"French",
"German",
"Japanese"
]
export default function Subjects() {
    return (
        <div className='mx-10 sm:mt-24 mt-10'>
            <h3 className='sm:text-4xl text-xl font-bold text-gradient'>
                {
                    window.innerWidth >768 ?<center className='flex justify-center align-middle'>Elevate Your Learning Experience Free
                    </center> :<span className='flex justify-center text-xl  align-middle'>Elevate Your Learning Experience Free.</span>
                }
            </h3>
            {
                window.innerWidth >768 ? <center className='text-gray-500 text-md flex justify-center align-middle mt-4 font-semibold '>Step into a realm of limitless learning with NexGen Study AI – your comprehensive, free-of-cost academic partner. Experience tailored assistance and master subjects with ease and confidence.
                </center> :<span className='text-gray-500 text-md flex justify-center align-middle mt-4 font-semibold '>Step into a realm of limitless learning with NexGen Study AI – your comprehensive, free-of-cost academic partner. Experience tailored assistance and master subjects with ease and confidence.</span>
            }
            <section className='flex flex-wrap justify-center align-middle mt-8'>
            <Cards heading={'Maths'}  component={<PiMathOperationsBold size={70} />
            } description={maths} />
            <Cards heading={'Science'} component={<MdScience size={70} />
            } description={
                Science
                          }
               />
            <Cards heading={'Engineering'} component={<MdEngineering size={70} />
            } description={Engineering} />
            </section>
            <section className='flex flex-wrap justify-center align-middle '>
            <Cards heading={'Communicaton'} component={<GiSatelliteCommunication size={70} />
            } description={Communications} />
            <Cards heading={'Sociology'} component={<FaPeopleArrows size={70} />
            } description={socail} />
            </section>

        </div>
    )
}
