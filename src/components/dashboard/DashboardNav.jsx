import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { TbMathSymbols } from "react-icons/tb";
import { HiArrowSmRight } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { SlLogin } from "react-icons/sl";
import 'tailwindcss/tailwind.css';
import { CgDetailsMore } from "react-icons/cg";
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
    const [isProfileOpen, setIsprofileOpen] = useState(false);

    const { logOut } = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            logOut();
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
        <header className={`fixed font-semibold text-black w-full mx-8 z-10 ${isScrolled ? 'bg-white ' : 'bg-transparent '} transition-all`}>
            <nav className="flex items-center  justify-evenly p-4">
                {LOGO && <div style={{}} className="logo">
                    <Link to="/">
                        <h1 className='text-2xl font-bold mr-10'>Nextgen Study</h1>
                    </Link>
                </div>}

                {/* Menu items */}
                <div className="hidden md:flex  ">
                    {/* Add dropdown logic and items */}
                    {/* Dropdown */}
                    <div
                        className="dropdown flex justify-center items-center gap-x-6 cursor-pointer"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <Link to={'/dashboard'}> <span className=" hover:text-green-700 transition text-xl font-bold ease-in duration-300">Subjects</span></Link>
                        {isDropdownOpen ? <RiArrowDropUpLine className='m-[5px] transition-transform duration-300' /> : <RiArrowDropDownLine className='m-[5px] transition-transform duration-300' />}

                        {isDropdownOpen && (
                            <div className="absolute flex   mt-[290px] py-2 bg-white shadow-lg rounded- fxlade-in">
                                <div className='m-3 '>
                                    <DropdownItem>
                                        <div className='flex border-b-[3px] mb-2 '>
                                            <TbMathSymbols color='black' size={30} />
                                            <div className='ml-4' >Maths<p className='text-orange-400 '>this is for maths</p></div>
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div className='flex border-b-[3px] mb-2 '>
                                            <TbMathSymbols color='black' size={30} />
                                            <div className='ml-4' >Science<p className='text-orange-400 '>this is for maths</p></div>
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div className='flex border-b-[3px] mb-2 '>
                                            <TbMathSymbols color='black' size={30} />
                                            <div className='ml-4' >Sociology<p className='text-orange-400 '>this is for maths</p></div>
                                        </div>
                                    </DropdownItem>
                                </div>
                                <div className='m-3'>
                                    <DropdownItem>
                                        <div className='flex border-b-[3px] mb-2 '>
                                            <TbMathSymbols color='black' size={30} />
                                            <div className='ml-4' >Engineering<p className='text-orange-400 '>this is for maths</p></div>
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <div className='flex border-b-[3px] mb-2 '>
                                            <TbMathSymbols color='black' size={30} />
                                            <div className='ml-4' >Communication<p className='text-orange-400 '>this is for maths</p></div>
                                        </div>
                                    </DropdownItem>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to='/aichat'>
                        <div className="dropdown flex justify-center  mx-2  text-xl font-bold align-middle"><span>Luna chat</span></div>
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
                <div>
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

            </nav>
        </header>
    );
};

export default DashboardNav;
