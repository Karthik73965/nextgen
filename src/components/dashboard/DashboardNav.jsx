import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { TbMathSymbols } from "react-icons/tb";
import { HiArrowSmRight } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { SlLogin } from "react-icons/sl";
import 'tailwindcss/tailwind.css';
import { CgDetailsMore } from "react-icons/cg";
import { MdEngineering } from 'react-icons/md';
import { FaPeopleArrows } from 'react-icons/fa';
import { GiSatelliteCommunication } from 'react-icons/gi';
import { HiLanguage } from "react-icons/hi2";
import img from '../../assests/Logo.png';
import { useUserAuth } from "../../UserAuth";


const DropdownItem = ({ children }) => {
    return (
        <div className="hover:text-green-500 hover:bg-blue-100 rounded-2xl  mx-2 transition ease-in duration-300 p-2">
            {children}
        </div>
    );
};


const DashboardNav = ({ LOGO }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isProfileOpen, setIsprofileOpen] = useState(false)
    const length = window.innerWidth
    const [onclick, setonclick] = useState(false);

    const { logOut } = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            logOut();
            setTimeout(()=>{},3000);
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    }


    const handleonclick = () => {
        setonclick(!onclick)
        console.log(onclick);
    }
    console.log(length);
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
        <header className={`fixed font-semibold ${onclick ? "mt-12 bg-white" : "mt-6"} text-black w-full z-10 ${isScrolled ? 'bg-white shadow-md ' : 'bg-white sm:bg-transparent '} transition-all`}>
            <nav className="flex items-center  justify-around    pb-0 sm:pb-4">
                {LOGO && <div style={{}} className="logo  ">
                    <Link to="/">
                        <img src={img} className='h-[70px] w-[100px] sm:w-auto' />
                    </Link>
                </div>}
                {/* Menu items */}
                {
                    length > 768 ? <div className='flex gap-x-48'>
                        <div className="hidden md:flex  ">
                            {/* Add dropdown logic and items */}
                            {/* Dropdown */}

                            <Link to='/dashboard'>
                                <div
                                    className="dropdown flex justify-center items-center gap-x-6 cursor-pointer"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <Link to={'/dashboard'}> <span className=" hover:text-green-700 transition text-xl font-bold ease-in duration-300">Subjects</span></Link>
                                    {isDropdownOpen ? <RiArrowDropUpLine className='m-[5px] transition-transform duration-300' /> : <RiArrowDropDownLine className='m-[5px] transition-transform duration-300' />}

                                    {isDropdownOpen && (
                                        <div className="absolute flex   mt-[230px] py-2 bg-white shadow-lg rounded- fxlade-in">
                                            <div className='m-3 '>
                                                <DropdownItem>
                                                    <div className='flex border-b-[3px] mb-2 '>
                                                        <TbMathSymbols color='black' size={30} />
                                                        <div className='ml-4' >Maths </div>
                                                    </div>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <div className='flex border-b-[3px] mb-2 '>
                                                        <MdEngineering color='black' size={30} />
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
                                                        <HiLanguage color='black' size={30} />
                                                        <div className='ml-4' >Lanuages </div>
                                                    </div>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <div className='flex border-b-[3px] mb-2 '>
                                                        <GiSatelliteCommunication color='black' size={30} />
                                                        <div className='ml-4' >Communication </div>
                                                    </div>
                                                </DropdownItem>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Link>
                            {/* <div className="dropdown">Pricing</div> */}

                            <Link to={'/discussions'}>
                                <div className="dropdown flex justify-center gap-1  mx-2 font-bold text-xl  align-middle"><span>Discussions</span></div>
                            </Link>
                            <Link to={'/chathistory'}>
                                <div className="dropdown flex justify-center gap-1  mx-2 font-bold text-xl  align-middle"><span>History</span></div>
                            </Link>
                        </div>

                        {/* Conditionally render buttons based on login state */}
                        <div className='ml-16'>
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
                    </div> : <header className={`fixed font-semibold text-black w-full z-10 ${isScrolled ? 'bg-white shadow-md ' : 'bg-transparent '} transition-all`}>
                        <nav className="flex items-center  justify-around p-4">
                            {/* Logo */}
                            <div className="logo ">

                                <Link to="/">
                                    <img src={img} className='h-[70px] w-[250px]' />
                                </Link>


                            </div>

                            {/* Menu items */}
                            {/* Menu items */}
                            <div className="hidden md:flex space-x-4 ">
                                {/* Add dropdown logic and items */}
                                {/* Dropdown */}
                                <div
                                    className="dropdown flex justify-center items-center gap- 4 cursor-pointer"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                >
                                    <span className=" hover:text-green-700 transition ease-in duration-300">Subjects</span>
                                    {isDropdownOpen ? <RiArrowDropUpLine className='m-[5px] transition-transform duration-300' /> : <RiArrowDropDownLine className='m-[5px] transition-transform duration-300' />}

                                    {isDropdownOpen && (
                                        <div className="absolute flex   mt-[290px] py-2 bg-white shadow-lg rounded- fxlade-in">
                                            <div className='m-3 '>
                                                <DropdownItem>
                                                    <div className='flex border-b-[3px] mb-2 '>
                                                        <TbMathSymbols color='black' size={30} />
                                                        <div className='ml-4' >Maths </div>
                                                    </div>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <div className='flex border-b-[3px] mb-2 '>
                                                        <TbMathSymbols color='black' size={30} />
                                                        <div className='ml-4' >Science </div>
                                                    </div>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <div className='flex border-b-[3px] mb-2 '>
                                                        <TbMathSymbols color='black' size={30} />
                                                        <div className='ml-4' >Sociology </div>
                                                    </div>
                                                </DropdownItem>
                                            </div>
                                            <div className='m-3'>
                                                <DropdownItem>
                                                    <div className='flex border-b-[3px] mb-2 '>
                                                        <TbMathSymbols color='black' size={30} />
                                                        <div className='ml-4' >Engineering </div>
                                                    </div>
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <div className='flex border-b-[3px] mb-2 '>
                                                        <TbMathSymbols color='black' size={30} />
                                                        <div className='ml-4' >Communication </div>
                                                    </div>
                                                </DropdownItem>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <Link to={'/dashboard'}>
                                    <div className="dropdown flex justify-center gap-1  align-middle"><span>Luna Chat</span></div>
                                </Link>
                                {/* <div className="dropdown">Pricing</div> */}
                                <Link to={'/Blogs'}>
                                    <div className="dropdown flex justify-center gap-1  align-middle"><span>Blogs</span></div>
                                </Link>
                                <Link to={'/About'}>
                                    <div className="dropdown flex justify-center gap-1  align-middle"><span>About</span></div>
                                </Link>
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
                                            d='M4 6h16M4 12h16m-7 6h7'
                                        />
                                    </svg>
                                </div>

                            </div>
                        </nav>
                        <div>
                            {
                                onclick ? <div className='bg-white '>
                                    <div className='absolute z-10  w-full bg-white  text-gray-500 font-semibold  grid space-x-6'>
                                        <center className='space-x-6'>
                                            <Link to={'/Dashbaord'}><div>Subjects</div></Link>
                                            {/* <Link to={'/aichat'}><div>Luna chat </div></Link> */}
                                            <Link to={'/discussions'}><div>Discsussions </div></Link>
                                            <Link to={'/chat-history'}><div>History </div></Link>
                                                                                        <div className='grid w-64 mt-8'>
                                                <Link to={'/profile'}>
                                                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:    ring-gray-700 dark:border-gray-700 capitalize">Profile</button>
                                                </Link>
                                            </div>
                                            <div className='grid w-64 '>
                                                <Link >
                                                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:    ring-gray-700 dark:border-gray-700 capitalize" onClick={handleLogout}>logout</button>
                                                </Link>
                                            </div>
                                        </center>
                                    </div>
                                </div> : ""
                            }

                        </div>
                    </header>
                }

            </nav>
        </header>
    );
};

export default DashboardNav;
