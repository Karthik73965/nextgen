import React from 'react'
import Cards from '../utils/Cards'
import { PiMathOperationsBold } from "react-icons/pi";
  {/* imports for specific subject icons */}
  import { GiAtom } from 'react-icons/gi';
  import { GiChemicalDrop } from 'react-icons/gi';
  import { GiDna1 } from 'react-icons/gi';
  import { FaBook } from 'react-icons/fa';
const Science = [
    "Physics",
    " Chemistry",
    "Biology",
    "Environmental Science    "
]
const socail = [
    "History",
    "Psychology",
    "Sociology"
]
const maths = [
    "Mathematics",
    "",
    "",
]
const Engineering = [
    "Computer Science",
    "Electrical Engineering",
    "Civil Engineering",
    "Mechanical Engineering",
    "Industrial Engineering",
    "Chemical Engineering"
]
const Communications = [
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
        <center className='mx-10 sm:mt-24 mt-10'>
            <h3 className='sm:text-4xl text-xl font-bold text-gradient'>
                {
                    window.innerWidth > 768 ? <center className='flex justify-center align-middle'>Elevate Your Learning Experience Free
                    </center> : <span className='flex justify-center text-xl  align-middle'>Elevate Your Learning Experience Free.</span>
                }
            </h3>
            {
                window.innerWidth > 768 ? <center className='text-gray-500 px-8 text-md flex justify-center align-middle mt-4 font-semibold '>Step into a realm of limitless learning with NexGen Study AI – your comprehensive, free-of-cost academic partner. Experience tailored assistance and master subjects with ease and confidence.
                </center> : <span className='text-gray-500 text-md flex justify-center align-middle font-semibold '>Step into a realm of limitless learning with NexGen Study AI – your comprehensive, free-of-cost academic partner. Experience tailored assistance and master subjects with ease and confidence.</span>
            }
            <section className='flex flex-wrap justify-center align-middle mt-8'>
                <Cards heading={'Mathematics'} component={<PiMathOperationsBold size={70} />
                } description={maths} />
                <Cards heading={'Physics'} component={<GiAtom size={70} />
                } description={
                    Science
                }
                />
                <Cards heading={'Chemistry'} component={<GiChemicalDrop size={70} />
                } description={Engineering} />
            </section>
            <section className='flex flex-wrap justify-center align-middle '>
                <Cards heading={'Biology'} component={<GiDna1 size={70} />
                } description={Communications} />
                <Cards heading={'English'} component={<FaBook size={70} />
                } description={socail} />
            </section>

        </center>
    )
}
