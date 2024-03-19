import React, { useState, useEffect, useContext } from 'react';
import { GrSafariOption } from "react-icons/gr";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import Subjechatbot from '../../components/dashboard/Subjectchatbot';
import { Link, useNavigate } from 'react-router-dom';
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi';
import { FaCopy, FaShareFromSquare } from 'react-icons/fa6';
import { TbMathSymbols } from "react-icons/tb";
import { FaPeopleArrows } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { IoLanguageSharp, IoLockClosedSharp } from "react-icons/io5";
import img from '../../assests/Logo.png'

{/* imports for specific subject icons */ }
import { GiAtom } from 'react-icons/gi';
import { GiChemicalDrop } from 'react-icons/gi';
import { GiDna1 } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa';

import Navbar from '../Navbar.jsx'

const Mathoptions = [
  { name: 'Mathematics', content: 'maths', component: <TbMathSymbols size={20} className='m-1 ' /> },
  { name: 'Physics  ', content: 'physics', component: <GiAtom size={20} color='black' className='m-1  ' /> },
  { name: 'Chemistry', content: 'chemistry', component: <GiChemicalDrop color='black' size={20} className='m-1 ' /> },
  { name: 'Biology', content: 'biology', component: <GiDna1 size={20} color='black' className='m-1' /> },
  { name: 'English', content: 'english ', component: <FaBook size={20} color='black' className=' m-1' /> },
];
// const Socialoptions = [
//   { name: 'History', content: 'history', },
//   { name: 'Socialogy', content: 'socialogy', },
//   {name:'Psychology', content: 'psychology'}
// ];
// const Engoptions = [
//   { name: 'Computer science  ', content: 'cse', },
//   { name: 'Electrical Engineering  ', content: 'ee', },
//   { name: 'Civil Engineering  ', content: 'civil', },
//   { name: 'Mechanical Engineering  ', content: 'mech', },
//   { name: 'Industrial Engineering  ', content: 'industrial', },
//   { name: 'Chemical Engineering  ', content: 'chem', },
// ];
// const Langoptions = [
//   { name: 'English  ', content: 'english', },
//   { name: 'writing', content: 'writing', },
//   { name: 'Philosophy', content: 'philosophy', },
//   { name: 'Spanish', content: 'spanish', },
//   { name: 'French', content: 'french', },
//   { name: 'German', content: 'german', },
//   { name: 'Japanese', content: 'japanese', },
// ];



const Sidebar = () => {
  const [activeOption, setActiveOption] = useState("maths"); // Added state to track active option
  const [content, setcontent] = useState('maths')
  const [activesubject, setactivesubject] = useState("Mathematics")

  return (
    <>
      <Navbar postion={"dash"} />
      <div className='h-[70px]'></div>
      <div className='min-h-[80vh]' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='sm:h-[100px] mb-11'></div>
        <div className='hidden sm:block ' style={{ borderRight: '1px solid #ccc' }}>
          <div className=' px-[40px] py-[10px] text-3xl font-bold '>

          </div>
          <center className='text-gradient px-[40px] py-[10px] text-3xl font-bold'><span className='border-b-s border-gray-400'>Subjects</span></center>
          {/* options section   -----------------------------------------------------------------------------------------s      */}
          <div className=''>
            {/*---------- maths-----------  */}
            <div
              className={`mb-[15px]   ml-0 rounded-xl ${activeOption == 'maths' ? "  " : ""}  pb-3 pt-1`} // Conditional styling
              style={{ cursor: 'pointer' }}
              onClick={() => {
                //   setActiveContent(option.content);
                setActiveOption("maths");
              }}
            >
              {/* <div className='m-3 rounded-lg text-xl p-1 font-semibold justify-stretch  flex gap-x-2'>
              <TbMathSymbols className='-2' size={30} />
            <div className='text-[18px] '><span>Maths</span> <span>& Science</span></div>
              <div>
              </div>
            </div> */}
              {
                activeOption === "maths" ? <div className='mx-4 pointer-event'>
                  {Mathoptions.map((option) => (
                    <div
                      className={`flex gap-x-2 border-[3px] rounded-full border-black ${activesubject === option.name ? " bg-black p-1 text-white" : "bg-gray-200 "
                        } ml-8 my-4 text-2xl`}
                      onClick={() => handledisableoption(option.name)}
                      key={option.name}
                    >
                      {/* Check for CSS interference or conflicting elements */}
                      {option.component}
                      <div className='flex gap-10 lg:w-auto xl:gap-0'>
                        <div className='w-[20vw] lg:w-[10vw]'>{option.name}</div> <div> {option.name != "Mathematics" ? <IoLockClosedSharp size={15} className="m-1" /> : ""}</div>
                      </div>
                    </div>
                  ))}
                </div>
                  : ""
              }
            </div>
            {/*---------- Sociail -----------  */}
            {/* <div
            className={`m-[15px]  ml-0 mb-0  rounded-xl ${activeOption=='Social'?"  ":""}  pb-3 pt-1`} // Conditional styling
            style={{ cursor: 'pointer' }}
            onClick={() => {
              //   setActiveContent(option.content);
              setActiveOption("Social");
            }}
          >
            <div className='m-3 rounded-lg text-2xl p-1 font-semibold justify-stretch  flex gap-x-2'>
              <FaPeopleArrows  className='2' sze={30} />
              <div className='text-[18px]'>Social Science</div>
              <div>
              </div>
            </div>
            {
              activeOption === "Social" ? <div className='mx-4 '>
                {Socialoptions.map((option) => (
                  <div className={`hover:rounded-lg hover:bg-gray-400 ${activesubject == option.name ? "  bg-gray-400   p-1 rounded-xl text-black" : ""} ml-8 my-2 text-lg`} onClick={() => {
                    setactivesubject(option.name)
                     setOption(`${option.content}`)
                  }} key={option.name}>{option.name}</div>
                ))}
              </div> : ""
            }
          </div> */}
            {/*---------- Engineering  -----------  */}
            {/* <div
            className={`m-[15px]  ml-0 mb-0 ${activeOption=='Eng'?"  ":""}  rounded-xl  pt-1`} // Conditional styling
            style={{ cursor: 'pointer' }}
            onClick={() => {
              //   setActiveContent(option.content);
              setActiveOption("Eng");
            }}
          >
              <div className='m-3 rounded-lg text-2xl p-1 font-semibold  flex gap-x-2'>
              <MdEngineering  className='' size={30} />
              <div className='text-[18px] m'>Engineering &  Technology</div> 
              <div>
              </div>
            </div>
            {
              activeOption === "Eng" ? <div className='mx-4 '>
                {Engoptions.map((option) => (
                  <div className={`hover:rounded-lg hover:bg-gray-400 ${activesubject == option.name ? "  bg-gray-400   p-1 rounded-xl text-black" : ""} ml-8 my-2 text-lg`} onClick={() => {
                    setactivesubject(option.name)
                     setOption(`${option.content}`)
                  }} key={option.name}>{option.name}</div>
                ))}
              </div> : ""
            }
          </div> */}
            {/*---------- Languages  -----------  */}
            {/* <div
            className={`m-[15px]  ml-0 mb-0 ${activeOption=='Lang'?"  ":""} rounded-xl  pb-3 pt-1`} // Conditional styling
            style={{ cursor: 'pointer' }}
            onClick={() => {
              //   setActiveContent(option.content);
              setActiveOption("Lang");
            }}
          >
            <div className='m-3 rounded-lg text-2xl p- font-semibold  flex gap-x-2'>
              <IoLanguageSharp  className='mt-2' size={30} />
              <div className='text-[18px] mt-2'>Languages & Communication</div>
              <div>
              </div>
            </div>  
            {
              activeOption === "Lang" ? <div className='mx-4 '>
                {Langoptions.map((option) => (
                  <div className={`hover:rounded-lg hover:bg-gray-400 ${activesubject == option.name ? "  bg-gray-400   p-1 rounded-xl text-black" : ""} ml-8 my-2 text-lg`} onClick={() => {
                    setactivesubject(option.name)
                     setOption(`${option.content}`)
                  }} key={option.name}>{option.name}</div>
                ))}
              </div> : ""
            }
          </div> */}
          </div>
        </div>

        <center className=' w-[100vw] sm:w-[80%]' style={{}}>
          <Subjechatbot />
        </center>
      </div>
    </>
  );
};

export default Sidebar;
