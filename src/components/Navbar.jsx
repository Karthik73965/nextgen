import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { TbMathSymbols } from "react-icons/tb";
import { HiArrowSmRight } from "react-icons/hi";
import { CgDetailsMore } from "react-icons/cg";
import { MdEngineering } from 'react-icons/md';
import { FaPeopleArrows } from 'react-icons/fa';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { HiLanguage } from "react-icons/hi2";
import 'tailwindcss/tailwind.css';
import img from '../assests/Logo.png'

import { useUserAuth } from "../UserAuth";

const DropdownItem = ({ children }) => {
    return (
        <div className="hover:text-green-500 hover:bg-blue-100 rounded-2xl  mx-2 transition ease-in duration-300 p-2">
            {children}
        </div>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { isAuthenticated } = useUserAuth();
    const login = isAuthenticated(); // This should ideally be derived from your authentication state
    const [onclick, setonclick] = useState(false)
    
    const handleonclick = () => {
        setonclick(!onclick)
        console.log(onclick);
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
                <div className="logo md:1 mr-52">
                    <Link to="/">
                        <img src={img} className='h-[70px] w-[250px]' />
                    </Link>
                </div>

                {/* Menu items */}
                {/* Menu items */}
                <div className="hidden md:flex mt-2 space-x-4 ">
                    {/* Add dropdown logic and items */}
                    {/* Dropdown */}
                    <Link to={`${login ?"/dashboard" :"/login"} `}
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
                                            <div className='ml-4' >Maths </div>
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div className='flex border-b-[3px] mb-2 '>
                                            <MdEngineering  color='black' size={30} />
                                            <div className='ml-4' >Engineering </div>
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div className='flex border-b-[3px] mb-2 '>
                                            <FaPeopleArrows color='black' size={30} />

                                            <div className='ml-4' >Sociology </div>
                                        </div>
                                    </DropdownItem>
                                </div>
                                <div className='m-3'>
                                    <DropdownItem>
                                        <div className='flex border-b-[3px] mb-2 '>
                                            <HiLanguage   color='black' size={30} />
                                            <div className='ml-4' >Lanuages </div>
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div className='flex border-b-[3px] mb-2 '>
                                            <GiSatelliteCommunication  color='black' size={30} />
                                            <div className='ml-4' >Communication </div>
                                        </div>
                                    </DropdownItem>
                                </div>
                            </div>
                        )}
                    </Link>

                   
                    {/* <div className="dropdown">Pricing</div> */}
                    <Link to={'/Blogs'}>
                        <div className="dropdown flex justify-center sm:gap-1  align-middle"><span>Blogs</span></div>
                    </Link>
                    <Link to={'/About'}>
                        <div className="dropdown flex justify-center sm:gap-1  align-middle"><span>About</span></div>
                    </Link>
                </div>


                {/* Conditionally render buttons based on login state */}
                <div className="hidden md:flex space-x-4">
                    
                       {login ? (
            <Link to="/dashboard">
              <button className="bg-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white">
                <div className="flex items-center justify-center gap-x-3">
                  Dashboard <HiArrowSmRight size={20} />
                </div>
              </button>
            </Link>
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
            <div className='align-middle  justify-center block sm:hidden'    >
                {
                    onclick ?
                        <div className='absolute z-10  w-full bg-white  text-gray-500 font-semibold  grid space-x-6'>
                            <center className='space-x-6'>
                                <Link to={'/Dashbaord'}><div>Subjects</div></Link>
                                {/* <Link to={'/aichat'}><div>Luna chat </div></Link> */}
                                <Link to={'/blogs'}><div>Blogs </div></Link>
                                <Link to={'/about'}><div>About </div></Link>
                                <div className='grid w-64 mt-8'>
                                 {login ? (
            <Link to="/dashboard">
                <div>
                  Dashboard 
                </div>
            </Link>
          ) : (
            <Link to="/login">
                <div >
                  Start for free
                </div>
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
