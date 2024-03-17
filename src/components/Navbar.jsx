import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { TbMathSymbols } from "react-icons/tb";
import { HiArrowSmRight } from "react-icons/hi";
import { CgDetailsMore, CgProfile } from "react-icons/cg";
// import { MdEngineering } from 'react-icons/md';
// import { FaPeopleArrows } from 'react-icons/fa';
// import { GiSatelliteCommunication } from 'react-icons/gi';
// import { HiLanguage } from "react-icons/hi2";
import 'tailwindcss/tailwind.css';
import img from '../assests/Logo.png'
{/* imports for specific subject icons */ }
import { GiAtom } from 'react-icons/gi';
import { GiChemicalDrop } from 'react-icons/gi';
import { GiDna1 } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa';



import { useUserAuth } from "../UserAuth";
import { SlLogin } from 'react-icons/sl';

const DropdownItem = ({ children }) => {
    return (
        <div className="hover:text-green-500 hover:bg-blue-100 rounded-2xl  mx-2 transition ease-in duration-300 p-2">
            {children}
        </div>
    );
};

const Navbar = ({ postion }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { isAuthenticated } = useUserAuth();
    const [isProfileOpen, setIsprofileOpen] = useState(false)
    const login = isAuthenticated(); // This should ideally be derived from your authentication state
    const [onclick, setonclick] = useState(false)

    const handleonclick = () => {
        setonclick(!onclick)
        console.log(onclick);
    }
    const handleLogout = () => {
        try {
            logOut();
            setTimeout(() => { }, 3000);
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`fixed font-semibold  text-black w-full z-10 ${isScrolled ? 'bg-white shadow-md ' : 'bg-white sm:bg-transparent '} transition-all`}>
                <nav className="flex items-center  justify-around    pb-0 sm:pb-4">
                    {/* Logo */}
                    <div className="logo  md:mr-[20vw]  pb-5 sm:pb-0">
                        <Link to="/">
                            <img src={img} className='h-[70px] w-[250px]' loading='lazy' />
                        </Link>
                    </div>

                    {/* Menu items */}
                    {/* Menu items */}
                    <div className="hidden md:flex mt-2 space-x-4 ">
                        {/* Add dropdown logic and items */}
                        {/* Dropdown */}
                        <Link to={`${login ? "/dashboard" : "/login"} `}
                            className="dropdown flex justify-center items-center sm:gap- 4 cursor-pointer"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <span className=" hover:text-green-700 transition ease-in duration-300">Subjects</span>
                            {isDropdownOpen ? <RiArrowDropUpLine className='sm:m-[5px] transition-transform duration-300' /> : <RiArrowDropDownLine className='sm:m-[5px] transition-transform duration-300' />}

                            {isDropdownOpen && (
                                <div className="absolute flex   sm:mt-[230px] sm:py-2 bg-white shadow-lg rounded- fxlade-in">
                                    <div className='sm:m-3 '>
                                        <DropdownItem>
                                            <div className='flex border-b-[3px] mb-2 '>
                                                <TbMathSymbols color='black' size={30} />
                                                <div className='ml-4' >Mathematics </div>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div className='flex border-b-[3px] mb-2 '>
                                                <GiAtom color='black' size={30} />
                                                <div className='ml-4' >Physics </div>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div className='flex border-b-[3px] mb-2 '>
                                                <GiChemicalDrop color='black' size={30} />

                                                <div className='ml-4' >Chemistry </div>
                                            </div>
                                        </DropdownItem>
                                    </div>
                                    <div className='m-3'>
                                        <DropdownItem>
                                            <div className='flex border-b-[3px] mb-2 '>
                                                <GiDna1 color='black' size={30} />
                                                <div className='ml-4' >Biology </div>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <div className='flex border-b-[3px] mb-2 '>
                                                <FaBook color='black' size={30} />
                                                <div className='ml-4' >English </div>
                                            </div>
                                        </DropdownItem>
                                    </div>
                                </div>
                            )}
                        </Link>


                        {/* <div className="dropdown">Pricing</div> */}
                        <Link to={'/faq'} className={`${postion == "dash" ? "hidden" : "block"}`}>
                            <div className="dropdown flex justify-center sm:gap-1  align-middle"><span>FAQ's</span></div>
                        </Link>
                        <Link to={'/About'} className={`${postion == "dash" ? "hidden" : "block"}`} >
                            <div className="dropdown flex justify-center sm:gap-1  align-middle"><span>About</span></div>
                        </Link>

                        {/*for dash*/}
                        <Link to={'/discussions'} className={`${postion !== "dash" ? "hidden" : "block"}`}>
                            <div className="dropdown flex justify-center sm:gap-1  align-middle"><span>Discussions</span></div>
                        </Link>
                        <Link to={'/chathistory'} className={`${postion !== "dash" ? "hidden" : "block"}`} >
                            <div className="dropdown flex justify-center sm:gap-1  align-middle"><span>History</span></div>
                        </Link>

                    </div>


                    {/* Conditionally render buttons based on login state */}
                    <div className="hidden md:flex  space-x-4">

                        {login ? (
                            <>
                                {
                                    postion !== "dash" ? <Link to="/dashboard">
                                        <button className="bg-black border-4 border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white">
                                            <div className="flex items-center justify-center gap-x-3">
                                                Dashboard <HiArrowSmRight size={20} />
                                            </div>
                                        </button>
                                    </Link> : <div className='ml-16'>
                                        <div
                                            className="dropdown flex justify-center items-center mr-28 gap-x-6 cursor-pointer"
                                            onMouseEnter={() => setIsprofileOpen(true)}
                                            onMouseLeave={() => setIsprofileOpen(false)}
                                        >
                                            <Link to={'/profile'}> <span className=" transition text-xl flex bg-black text-white p-2 rounded-lg font-bold ease-in duration-300"><CgProfile className='m-1' />Profile</span></Link>

                                            {isProfileOpen && (
                                                <div className="absolute  mt-[155px] py-2 bg-white shadow-lg rounded-lg fade-in">

                                                    <Link to={'/profile'} className='flex gap-2  transition ease-in duration-300 p-2 text mx-2 '>
                                                        <CgDetailsMore color='black' size={'25px'} />
                                                        <Link to={'/profile'}>Profile</Link>
                                                    </Link>


                                                    <div className='flex m-2 mx-2 transition ease-in duration-300 p-2 gap-2' onClick={handleLogout}>
                                                        <SlLogin color='black' size={'25px'} />
                                                        <div >Logout</div>
                                                    </div>

                                                </div>
                                            )}
                                        </div>

                                    </div>
                                }

                            </>
                        ) : (
                            <Link to="/login">
                                <button
                                    type="button"
                                    className="bg-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                                >
                                    <div className="flex items-center justify-center gap-x-3">
                                        Start for free <HiArrowSmRight size={20} />
                                    </div>
                                </button>
                            </Link>
                        )}
                    </div>
                    <div>
                        <div onClick={handleonclick} className='align-middle justify-center block sm:hidden'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                className='h-6 w-6 text-gray-600'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16sm:m-7 6h7'
                                />
                            </svg>
                        </div>

                    </div>
                </nav>
                <div className='align-middle   justify-center block sm:hidden'    >
                    {
                        onclick ?
                            <div className='absolute z-10 pb-4  w-full bg-white  text-gray-500 font-semibold  grid space-x-6'>
                                <center className='space-y-3'>
                                    <Link to={'/dashboard'}><div>Subjects</div></Link>
                                    {/* <Link to={'/aichat'}><div>Luna chat </div></Link> */}
                                    <Link to={'/faq'} className={`${postion == "dash" ? "hidden" : "block"}`}>
                                      <span>FAQ's</span>
                                    </Link>
                                    <Link to={'/About'} className={`${postion == "dash" ? "hidden" : "block"}`} >
                                        <span>About</span>
                                    </Link>

                                    {/*for dash*/}
                                    <Link to={'/discussions'} className={`${postion !== "dash" ? "hidden" : "block"}`}>
                                    <span>Discussions</span>
                                    </Link>
                                    <Link to={'/chathistory'} className={`${postion !== "dash" ? "hidden" : "block"}`} >
                                        <span>History</span>
                                    </Link>

                                    <div className='grid w-64 mt-8'>
                                        {login ? (
                                          <>
                                          {
                                            postion !=="dash"  ? <Link to="/dashboard">
                                            <button className="bg-black border-4 border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white">
                                                <div className="flex items-center justify-center gap-x-3">
                                                    Dashboard <HiArrowSmRight size={20} />
                                                </div>
                                            </button>
                                        </Link>  : <>
                                        <Link to="/profile">
                                                <button className="bg-black border-4 font-medium rounded-xl text-sm px-5 py-2.5 text-center text-white">
                                                    <div className="flex items-center justify-center gap-x-3">
                                                    <CgProfile size={20} className='m-1' />Profile
                                                    </div>
                                                </button>
                                            </Link>
                                        <Link onclick={handleLogout} >
                                                <button className="bg-black border-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white">
                                                <div className='flex items-center justify-center gap-x-3" '><SlLogin color='white' className=' mr-4' size={20} />
                                                        <div >Logout</div></div>
                                                </button>
                                            </Link>

                                        </>
                                          }
                                          </>
                                        ) : (
                                            <Link to="/login">
                                                <button
                                                    type="button"
                                                    className="bg-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white"
                                                >
                                                    <div className="flex items-center justify-center gap-x-3">
                                                        Start for free <HiArrowSmRight size={20} />
                                                    </div>
                                                </button>
                                            </Link>
                                        )}
                                    </div>
                                </center>
                            </div>
                            : ""
                    }
                </div>
            </header>

        </>

    );
};

export default Navbar;
