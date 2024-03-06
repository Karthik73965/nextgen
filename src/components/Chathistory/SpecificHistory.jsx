import Dashnav from '../dashboard/DashboardNav'
import React, { useState, useRef, useEffect } from 'react';
import { IoSendSharp } from "react-icons/io5";
import { MdAddToPhotos } from "react-icons/md";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { FaShareFromSquare } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import {Drawer} from '@mui/material';;
import {Button} from '@mui/material';
import {List} from '@mui/material';
import {Divider} from '@mui/material';
import {ListItem} from '@mui/material';;
import {ListItemButton} from '@mui/material';
import {ListItemIcon} from '@mui/material';
import {ListItemText} from '@mui/material';
import { TbMathSymbols } from "react-icons/tb";
import { FaPeopleArrows } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import { RxPencil2 } from "react-icons/rx";
import { GrSafariOption } from 'react-icons/gr';
import img from '../../assests/Logo.png'


export default function SpecificHistory({activeOption,optionid}){
  const lastMessageRef = useRef(null);
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [open, setOpen] = React.useState(false);
  const options = [
    { name: 'Whast is gemini?', content: 'Homework Help Content',time:" Dec. 10,, at 9:47:56 p.m" },
    { name: 'Whast is gpt', content: 'Chat with AI Content',time:" Dec. 10,  at 9:47:56 p.m" },
    { name: 'What dastek do ', content: 'Ask Expert Content',time:" Dec. 10, at 9:47:56 p.m" },
    { name: 'how to learn english ', content: 'Feedback Content',time:" Dec. 10, at 9:47:56 p.m" },
    // Add more options as needed
  ];  
  const [activeContent, setActiveContent] = useState(options[0].content);
  const [activeOptions, setActiveOptions] = useState(options[0].name); 
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
const length = window.innerWidth

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
         <div className=' px-[40px] py-[10px] text-3xl font-bold '>
            <Link to="/">
            <img src={img} className='h-[70px] sm:w-auto' />
            </Link>
          </div>
          <div className='text-gradient px-[40px] py-[10px] text-xl font-bold mb-6 underline'>Chat history </div>
          {/* options section   -----------------------------------------------------------------------------------------s      */}
          
        {options.map((option) => (
          <div
            key={option.name}
            className={`m-[15px] rounded-xl  ${activeOptions === option.name ? 'bg-black text-white hover:bg-gradient-to-bl opacity-90' : ''}`} // Conditional styling
            style={{ cursor: 'pointer' }}
            onClick={() => {
              setActiveContent(option.content);
              setActiveOptions(option.name); // Update active option state
            }}
          >
            <div className='mx-3 rounded-lg text-xl p-1 font-bold flex gap-x-2'>
              <GrSafariOption className='m-2' size={20} />
              {option.name}
            </div>
                <div className='flex justify-end  text:sm mr-6 font-semibold align-middle'>{option.time}</div>
          </div>
        ))}
          
    </Box>
  );
 
    const [messages, setMessages] = useState([
      {
        text: "HI WELCOME BACL TO HERE DASTEK EDU YOU CAN ASK ANY QUESTIONS HERES",
        sender: 'server'
      },
      {
        text: "HI WELCOME ACL TO HERE DASTEK EDU YOU CAN ASK ANY QUESTIONS HERES",
        sender: 'user'
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        sender: 'server'
      },
      {
        text: "HI WELCOME ACL TO HERE DASTEK EDU YOU CAN ASK ANY QUESTIONS HERES",
        sender: 'user'
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        sender: 'server'
      },
      {
        text: "HI WELCOME ACL TO HERE DASTEK EDU YOU CAN ASK ANY QUESTIONS HERES",
        sender: 'user'
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        sender: 'server'
      },
      {
        text: "HI WELCOME ACL TO HERE DASTEK EDU YOU CAN ASK ANY QUESTIONS HERES",
        sender: 'user'
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        sender: 'server'
      },
      {
        text: "HI WELCOME ACL TO HERE DASTEK EDU YOU CAN ASK ANY QUESTIONS HERES",
        sender: 'user'
      },
      {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        sender: 'server'
      },
    ]);
    // Function to handle the submission of the message
//   useEffect(()=>{
//     // use here optionid and perform a fetch operation and store them in messages and we can show them .
//   },[])
   
  return (
   <>
      <Dashnav  />
      <div className='h-[74px]'></div>
     {
      length > 768 ? <><div className="flex flex-col h-[80vh] bg-transparent sticky sm:h-[88vh]">
      <div className="overflow-auto p-3 mt-10 flex-grow">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-2xl px-4 py-2 my-5 ${msg.sender === 'user' ? '  border-2 border-black bg-green-100' : '  border-2 border-black bg-gray-200'}`}>
              {
                (msg.sender === 'server') &&  (msg.text !== 'HI WELCOME BACL TO HERE DASTEK EDU YOU CAN ASK ANY QUESTIONS HERES') &&
                <div className='text-gradient font-bold text-xl'>NexgenStudy :-</div>

              }
              {
                (msg.sender === 'user')  &&
                <span className="  transition ease-in duration-300  font-bold  "><span className='flex align-middle justify-start text-gradient font-bold text-xl' > <CgProfile className='m-1 text-black' size={20} />
                profile</span></span>

              }
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>

      </> : <><div className="flex flex-col h-[100vh] bg-transparent sticky sm:h-[88vh]">
      <div className='p-3 bg-white border-2 flex border-black rounded-xl w-[200px] mb-6 ml-[50vw] ' onClick={toggleDrawer(true)}>All history  <RxPencil2 className='ml-10' size={25} />
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
      <div className="overflow-auto mx-3  mt-10 flex-grow">
        {messages.map((msg,  index) => (
          <div key={index} className={`flex   sm:w-auto  ${msg.sender === 'user' ? 'ml-[30vw] justify-end ' : ' justify-start mr-[20vw]'}`}>
            <div className={`rounded-2xl px-4 py-2 my-5 ${msg.sender === 'user' ? '  border-2 border-black bg-green-100' : '  border-2 border-black bg-gray-200'}`}>
              {
                (msg.sender === 'server') &&  (msg.text !== 'HI WELCOME BACL TO HERE DASTEK EDU YOU CAN ASK ANY QUESTIONS HERES') &&
                <div className='text-gradient font-bold text-xl'>NexgenStudy :-</div>

              }
              {
                (msg.sender === 'user')  &&
                <span className="  transition ease-in duration-300  font-bold  "><span className='flex align-middle justify-start text-gradient font-bold text-xl' > <CgProfile className='m-1 text-black' size={20} />
                profile</span></span>

              }
              {msg.text}
            </div>
          </div>
        ))}
      </div>
   
    </div>

      </> 
     } 
   </>
  )
}
