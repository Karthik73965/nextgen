import { useState, useEffect, useRef } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import { IoSend, IoImage, IoAttach, IoLockClosedSharp } from 'react-icons/io5';
import { BiSolidDislike, BiSolidLike } from 'react-icons/bi';
import { FaCopy, FaShareFromSquare } from 'react-icons/fa6';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { Drawer } from '@mui/material';;
import { Button } from '@mui/material';
import { List } from '@mui/material';
import { Divider } from '@mui/material';
import { ListItem } from '@mui/material';;
import { ListItemButton } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { TbMathSymbols } from "react-icons/tb";
import { FaPeopleArrows } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { IoLanguageSharp } from "react-icons/io5";
import { RxPencil2 } from "react-icons/rx";
import img from '../../assests/Logo.png'
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ContentRenderer from "../MathJaxComponent";
import { GiAtom } from 'react-icons/gi';
import { GiChemicalDrop } from 'react-icons/gi';
import { GiDna1 } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa';
{/* imag e for loader  */ }
import note from '../../assests/note.jpeg'

const Mathoptions = [
  { name: 'Maths', content: 'maths', component: <TbMathSymbols size={20} className='m-1' /> },
  { name: 'Physics  ', content: 'physics', component: <GiAtom size={30} className='m-1' /> },
  { name: 'Chemistry', content: 'chemistry', component: <GiChemicalDrop size={30} className='m-1' /> },
  { name: 'Biology', content: 'biology', component: <GiDna1 size={30} className='m-1' /> },
  { name: 'English', content: 'english ', component: <FaBook size={30} className='m-1' /> },
];
// const Socialoptions = [
//   { name: 'History', content: 'history', },
//   { name: 'Socialogy', content: 'socialogy', },
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




const QuestionForm = ({ content }) => {


  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [activeOption, setActiveOption] = useState("maths"); // Added state to track active option
  const [endpoint, setendpoint] = useState(content)
  const [activesubject, setactivesubject] = useState("Maths")
  const [currentUrl, setCurrentUrl] = useState("");
  const [useLatex, setUseLatex] = useState(false);
  const [connectionError, setConnectionError] = useState("");
  const ws = useRef(null);

  const [actionTaken, setActionTaken] = useState('');

  const handleLike = () => {
    if (!actionTaken) {
      setActionTaken('liked');
      // Perform additional actions here if needed
    }
  };

  const handleDislike = () => {
    if (!actionTaken) {
      setActionTaken('disliked');
      // Perform additional actions here if needed
    }
  };

  useEffect(() => {
    handleNewQuestion();
    connectWebSocket();
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [content]);


  const connectWebSocket = () => {

    ws.current = new WebSocket("ws://localhost:5000/chat");
    ws.current.onopen = () => {
      console.log("Server Connected");
      setConnectionError("");
    };
    ws.current.onmessage = (e) => {
      const message = JSON.parse(e.data);
      if (message.resp === "done") {
        setUseLatex(true);
      } else {
        setData((data) => `${data ? data : ""}${message.resp}`);
      }
      setIsLoading(false);
    };
    ws.current.onerror = (error) => {
      // console.error("Server error:", error);
      setConnectionError("Server encountered an error. Try again later.");
      setIsLoading(false);
    };
    ws.current.onclose = () => {
      console.log("Server Disconnected");
      setConnectionError("Server disconnected. Attempting to reconnect...");
      setTimeout(() => {
        connectWebSocket();
      }, 3000); // Attempt to reconnect after 3 seconds
    };
  };


  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" >
      <div className=' px-3 py-[10px] text-3xl font-bold '>
        <Link to="/">
          <img src={img} className='h-[80px] sm:w-auto' />
        </Link>
      </div>
      <div className='text-gradient px-[40px] py-[10px] text-3xl font-bold mb-6 underline'>Subjects</div>
      {/* options section   -----------------------------------------------------------------------------------------s      */}

      {/*---------- maths-----------  */}
      <div
        className={`m-[15px]  ml-0 mb-0  rounded-xl ${activeOption == 'maths' ? "  " : ""}  pb-3 pt-1`} // Conditional styling
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
          activeOption === "maths" ? <div className='mx-4 '>
            {Mathoptions.map((option) => (
              <div className={`rounded-full  p-1  my-4  flex border-[3px] border-black ] gap-x-2  ${activesubject == option.name ? "  bg-gray-400  p-1  text-black" : ""} ml-8 my- text-2xl`} key={option.name}>
                {option.component}
                <div className='flex '>
                  <div className=' text-[18px]'>{option.name}</div> <div> {option.name != "Maths" ? <IoLockClosedSharp size={15} className="m-2" /> : ""}</div>
                </div>
              </div>
            ))}
          </div> : ""
        }
      </div>
      {/*---------- Sociail -----------  */}
      {/* <div
        className={`m-[15px]  ml-0 mb-0  rounded-xl ${activeOption == 'Social' ? "  " : ""}  pb-3 pt-1`} // Conditional styling
        style={{ cursor: 'pointer' }}
        onClick={() => {
          //   setActiveContent(option.content);
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
              <div className={`hover:rounded-lg hover:bg-gray-400 ${activesubject == option.name ? "  bg-gray-500  p-1 rounded-xl text-black" : ""} ml-8 my-2 text-lg`} onClick={() => {
                setactivesubject(option.name)
                setOption(`${option.content}`)
              }} key={option.name}>{option.name}</div>
            ))}
          </div> : ""
        }
      </div> */}
      {/*---------- Engineering  -----------  */}
      {/* <div
        className={`m-[15px]  ml-0 mb-0 ${activeOption == 'Eng' ? "  " : ""}  rounded-xl  pt-1`} // Conditional styling
        style={{ cursor: 'pointer' }}
        onClick={() => {
          //   setActiveContent(option.content);
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
              <div className={`hover:rounded-lg hover:bg-gray-400 ${activesubject == option.name ? "  bg-gray-500  p-1 rounded-xl text-black" : ""} ml-8 my-2 text-lg`} onClick={() => {
                setactivesubject(option.name)
                setOption(`${option.content}`)
              }} key={option.name}>{option.name}</div>
            ))}
          </div> : ""
        }
      </div> */}
      {/*---------- Languages  -----------  */}
      {/* <div
        className={`m-[15  useEffect(() => {
    const session = useSessionContext();
    console.log(session.userId)
  }, []);px]  ml-0 mb-0 ${activeOption == 'Lang' ? "  " : ""} rounded-xl  pb-3 pt-1`} // Conditional styling
        style={{ cursor: 'pointer' }}
        onClick={() => {
          //   setActiveContent(option.content);
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
              <div className={`hover:rounded-lg hover:bg-gray-400 ${activesubject == option.name ? "  bg-gray-500  p-1 rounded-xl text-black" : ""} ml-8 my-2 text-lg`} onClick={() => {
                setactivesubject(option.name)
                setOption(`${option.content}`)
              }} key={option.name}>{option.name}</div>
            ))}
          </div> : ""
        }
      </div> */}
    </Box>
  );
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      setIsLoading(true);
      setData(null);
      setUseLatex(false);
      const messageData = JSON.stringify({
        message: question,
        image_url: currentUrl,
        subject: "",
      });
      ws.current.send(messageData);
    } else {
      setConnectionError("Not connected to the server. Trying to reconnect...");
      connectWebSocket(); // Attempt to reconnect
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data);
      alert('Text copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    const imageRef = ref(storage, new Date().toISOString() + "_" + file.name);
    await uploadBytes(imageRef, file).then(() => {
      console.log("Uploaded the image");
    });
    getDownloadURL(imageRef).then((refUrl) => {
      setCurrentUrl(refUrl);
    });
  };

  const handleNewQuestion = () => {
    setQuestion("");
    setData(null);
    setSelectedImage(null);
    setCurrentUrl("");
  };


  return (
    <>

      <div className='overflow-x-hidden'>
        <div className='h-[30px]'></div>
        <>
          <div className='grid items-center  '>
            <div className='p-3 bg-white  sm:hidden  border-2 text-sm flex border-black rounded-xl w-[40vw] mb-6 ml-[50vw] ' onClick={toggleDrawer(true)}>Change Subject <RxPencil2 className='ml-2' size={25} />
            </div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
            <center>    <h1 className=" block sm:hidden  font-bold text-4xl mb-4 text-gradient uppercase" >
              {activesubject == "Civil" || activesubject == "Chemical" || activesubject == "Electrical" || activesubject == "Mechanical" || activesubject == "IndustrialW" ? `${activesubject} Enginerring` : activesubject}
            </h1>
            </center>

            <h1 className="text-lg sm:text-4xl hidden sm:block  font-bold mb-4 text-gradient" >The evolution of 24/7 study starts here</h1>
            <p className="mb-4 text-slate-900 text-wrap font-bold hidden sm:block">Any question. Any subject. Get instant, step-by-step solutions the moment you need them.</p>
          </div>
          {connectionError && <p className="text-red-500 text-center">{connectionError}</p>}
        </>

        {/* below input part------------------------------------- */}
        <div className="flex     flex-col items-center justify-center p-4">
          {currentUrl && <img src={currentUrl} alt="Selected" />}

          <form className="w-[60vw]   " onSubmit={handleSubmit}>
            <div>
            </div>
            <div className="flex items-center  border-2 border-black w-[60vw] sm:w-[60vw] px- py-1 rounded-2xl mb-4">
              <input
                class="appearance-none bg-transparent  w-full text-gray-900 mr-3 py-1 px-2 leading-tight focus:outline-none h-16 "
                type="text"
                placeholder="What's your question?"
                aria-label="Question input"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                disabled={isLoading}
              />

              <button
                type="submit"
                className={`flex-shrink-0 ${isLoading ? 'text-gray-500' : 'text-gray-700'} text-md py-1 px-2 rounded`}
                disabled={isLoading}
              >
                <IoSend size={25} />
              </button>
              <label className={`flex-shrink-0 ${isLoading ? 'text-gray-500' : 'text-gray-700'} text-md py-1 px-2 rounded`}>
                <IoImage size={25} />
                <input type="file" className="hidden" onChange={handleImageUpload} disabled={isLoading} />
              </label>
            </div>
            {isLoading && <img src={note} loading='lazy' />}
            {data && (
              <div
                className="data-display bg-gray-200 p-3 rounded-lg"
                style={{ maxWidth: "100%", overflowX: "auto" }}
              >
                {useLatex ? (
                  <ContentRenderer text={data} />
                ) : (
                  <pre
                    style={{
                      whiteSpace: "pre-wrap",
                      wordWrap: "break-word",
                      overflowX: "hidden",
                    }}
                  >
                    {data}
                  </pre>
                )}
              </div>
            )}
            {data && useLatex && (
              <div className='flex gap-x-4 text-gray-700 mt-5'>
                <BiSolidLike size={20} className={`${actionTaken === 'liked' ? 'text-blue-500' : 'cursor-pointer'} ${actionTaken ? 'pointer-events-none' : ''}`} onClick={handleLike} />
                <BiSolidDislike size={20} className={`${actionTaken === 'disliked' ? 'text-red-500' : 'cursor-pointer'} ${actionTaken ? 'pointer-events-none' : ''}`} onClick={handleDislike} />
                <FaCopy size={20} onClick={handleCopy} />
              </div>
            )}

          </form>

          {data && useLatex && (
            <button className="bg-black mt-8 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200  font-medium rounded-full text-sm px-5 py-2.5 text-center text-white"
              onClick={handleNewQuestion}
            >
              <div className='flex items-center justify-center gap-x-3'>
                One More Question ? <HiArrowSmRight size={20} />
              </div>
            </button>
          )}
        </div>

      </div>
    </>
  );
};

export default QuestionForm;
