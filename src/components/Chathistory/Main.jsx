import React, { useState } from 'react';
import { GrSafariOption } from "react-icons/gr";
import SpecificHistory from './SpecificHistory';
import Navbar  from '../Navbar.jsx'
const options = [
  { name: 'Whast is gemini?', content: 'Homework Help Content',time:" Dec. 10,, at 9:47:56 p.m" },
  { name: 'Whast is gpt', content: 'Chat with AI Content',time:" Dec. 10,  at 9:47:56 p.m" },
  { name: 'What dastek do ', content: 'Ask Expert Content',time:" Dec. 10, at 9:47:56 p.m" },
  { name: 'how to learn english ', content: 'Feedback Content',time:" Dec. 10, at 9:47:56 p.m" },
  // Add more options as needed
];

const Sidebar = () => {
  const [activeContent, setActiveContent] = useState(options[0].content);
  const [activeOption, setActiveOption] = useState(options[0].name); // Added state to track active option
  const length = window.innerWidth
  return (
    <>
      <Navbar postion={"dash"}/>
      <div className='h-[70px]'></div>
    <div className='min-h-[100vh] hidden' style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className='h-[100px] mb-11'></div>
      
    <>
        <div className='md:w-[20%] md:block hidden' style={{  background:"white", borderRight: '1px solid #ccc' }}>
      <div  className=' px-[40px] py-[10px] text-3xl font-bold ' >
                   
                </div>
        <center className='text-gradient px-[40px] py-[10px] text-3xl font-bold mb-6 '>History</center>
        {options.map((option) => (
          <div
            key={option.name}
            className={`m-[15px] rounded-xl  ${activeOption === option.name ? 'bg-black text-white hover:bg-gradient-to-bl opacity-90' : ''}`} // Conditional styling
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setActiveContent(option.content);
              setActiveOption(option.name); // Update active option state
            }}
          >
            <div className='mx-3 rounded-lg text-xl p-1 font-bold flex gap-x-2'>
              <GrSafariOption className='m-2' size={20} />
              {option.name}
            </div>
                <div className='flex justify-end  text:sm mr-6 font-semibold align-middle'>{option.time}</div>
          </div>
        ))}
      </div>
      <div className='w-[100vw] md:[80vw]' > 
       <SpecificHistory activeOption={activeOption} optionid={"this is for backed purpose"}/>
      </div>
      </> 

    </div>
    </>
  );
};

export default Sidebar;
