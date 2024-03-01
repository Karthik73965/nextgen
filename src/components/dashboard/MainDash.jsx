import React, { useState, useEffect } from 'react';
import { GrSafariOption } from "react-icons/gr";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import Subjechatbot from '../../components/dashboard/Subjectchatbot';
import { Link, useNavigate } from 'react-router-dom';
import DashboardNav from './DashboardNav';
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi';
import { FaCopy, FaShareFromSquare } from 'react-icons/fa6';
import { TbMathSymbols } from "react-icons/tb";
import { FaPeopleArrows } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import { useUserAuth } from '../../UserAuth';

const Mathoptions = [
  { name: 'Mathematics', content: 'maths', },
  { name: 'Physics  ', content: 'physics', },
  { name: 'Chemistry', content: 'chemistry', },
  { name: 'Biology', content: 'biology', },
  { name: 'Environmental Science  ', content: 'env_science', },
];
const Socialoptions = [
  { name: 'History', content: 'history', },
  { name: 'Socialogy', content: 'socialogy', },
];
const Engoptions = [
  { name: 'Computer science  ', content: 'cse', },
  { name: 'Electrical Engineering  ', content: 'ee', },
  { name: 'Civil Engineering  ', content: 'civil', },
  { name: 'Mechanical Engineering  ', content: 'mech', },
  { name: 'Industrial Engineering  ', content: 'industrial', },
  { name: 'Chemical Engineering  ', content: 'chem', },
];
const Langoptions = [
  { name: 'English  ', content: 'english', },
  { name: 'writing', content: 'writing', },
  { name: 'Philosophy', content: 'philosophy', },
  { name: 'Spanish', content: 'spanish', },
  { name: 'French', content: 'french', },
  { name: 'German', content: 'german', },
  { name: 'Japanese', content: 'japanese', },
];

const Sidebar = () => {
  const [activeContent, setActiveContent] = useState("maths");
  const [activeOption, setActiveOption] = useState("maths");
  const [activesubject, setactivesubject] = useState("Mathematics");

  useEffect(() => {
    console.log("content", activeContent);
  }, [activeContent]);

  useEffect(() => {
    console.log("subject", activesubject);
  }, [activesubject]);

  const { user } = useUserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>

      <div className='min-h-[80vh]' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className='h-[100px] mb-11'></div>
        <div style={{ width: '20%', borderRight: '1px solid #ccc' }}>
          <div className=' px-[40px] py-[10px] text-3xl font-bold '>
            <Link to="/">
              <h1 className='text  text-slate-900  mb-3 mr-10'>Nextgen Study</h1>
            </Link>
          </div>
          <div className='text-gradient px-[40px] py-[10px] text-3xl font-bold mb-6 underline'>Subjects</div>
          {/* options section   -----------------------------------------------------------------------------------------s      */}
          <div className=''>
            {/*---------- maths-----------  */}
            <div
              className={`m-[15px]  ml-0 mb-0  rounded-xl ${activeOption == 'maths' ? "  " : ""}  pb-3 pt-1`} // Conditional styling
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setActiveOption("maths");
              }}
            >
              <div className='m-3 rounded-lg text-xl p-1 font-semibold justify-stretch  flex gap-x-2'>
                <TbMathSymbols className='-2' size={30} />
                <div className='text-[18px] '><span>Maths</span> <span>& Science</span></div>
                <div>
                </div>
              </div>
              {
                activeOption === "maths" ? <div className='mx-4 '>
                  {Mathoptions.map((option) => (
                    <div className={`hover:bg-gray-400 ${activesubject == option.name ? "  bg-gray-500 p-1 rounded-xl text-black" : ""} ml-8 my-2 text-lg`} onClick={() => {
                      setactivesubject(option.name)
                      setActiveContent(option.content);
                    }} key={option.name}>{option.name}</div>
                  ))}
                </div> : ""
              }
            </div>
            {/*---------- Sociail -----------  */}
            <div
              className={`m-[15px]  ml-0 mb-0  rounded-xl ${activeOption == 'Social' ? "  " : ""}  pb-3 pt-1`} // Conditional styling
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setActiveOption("Social");
              }}
            >
              <div className='m-3 rounded-lg text-2xl p-1 font-semibold justify-stretch  flex gap-x-2'>
                <FaPeopleArrows className='2' size={30} />
                <div className='text-[18px]'>Social Science</div>
                <div>
                </div>
              </div>
              {
                activeOption === "Social" ? <div className='mx-4 '>
                  {Socialoptions.map((option) => (
                    <div className={`hover:bg-gray-400 ${activesubject == option.name ? "  bg-gray-500  p-1 rounded-xl text-black" : ""} ml-8 my-2 text-lg`} onClick={() => {
                      setactivesubject(option.name)
                      setActiveContent(option.content)
                    }} key={option.name}>{option.name}</div>
                  ))}
                </div> : ""
              }
            </div>
            {/*---------- Engineering  -----------  */}
            <div
              className={`m-[15px]  ml-0 mb-0 ${activeOption == 'Eng' ? "  " : ""}  rounded-xl  pt-1`} // Conditional styling
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setActiveOption("Eng");
              }}
            >
              <div className='m-3 rounded-lg text-2xl p-1 font-semibold  flex gap-x-2'>
                <MdEngineering className='' size={30} />
                <div className='text-[18px] m'>Engineering &  Technology</div>
                <div>
                </div>
              </div>
              {
                activeOption === "Eng" ? <div className='mx-4 '>
                  {Engoptions.map((option) => (
                    <div className={`hover:bg-gray-400 ${activesubject == option.name ? "  bg-gray-500  p-1 rounded-xl text-black" : ""} ml-8 my-2 text-lg`} onClick={() => {
                      setactivesubject(option.name)
                      setActiveContent(option.content)
                    }} key={option.name}>{option.name}</div>
                  ))}
                </div> : ""
              }
            </div>
            {/*---------- Languages  -----------  */}
            <div
              className={`m-[15px]  ml-0 mb-0 ${activeOption == 'Lang' ? "  " : ""} rounded-xl  pb-3 pt-1`} // Conditional styling
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setActiveOption("Lang");
              }}
            >
              <div className='m-3 rounded-lg text-2xl p- font-semibold  flex gap-x-2'>
                <IoLanguageSharp className='mt-2' size={30} />
                <div className='text-[18px] mt-2'>Languages & Communication</div>
                <div>
                </div>
              </div>
              {
                activeOption === "Lang" ? <div className='mx-4 '>
                  {Langoptions.map((option) => (
                    <div className={`hover:bg-gray-400 ${activesubject == option.name ? "  bg-gray-500  p-1 rounded-xl text-black" : ""} ml-8 my-2 text-lg`} onClick={() => {
                      setactivesubject(option.name)
                      setActiveContent(option.content)
                    }} key={option.name}>{option.name}</div>
                  ))}
                </div> : ""
              }
            </div>
          </div>
        </div>

        <div style={{ width: '80%', padding: '10px' }}>
          <Subjechatbot content={activeContent} />  {/* Pass activeContent as a prop */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
