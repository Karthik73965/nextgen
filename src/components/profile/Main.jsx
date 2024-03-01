import { React, useEffect, useState } from 'react'
import { MdEmail } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { HiOutlinePencil } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { auth } from '../../firebase';

export default function Main() {

    useEffect(() => {
        getUserData();
    }, []);
    const [userData, setUserData] = useState({});
    const [profileUrl, setProfileUrl] = useState("https://nasemul1.github.io/my-portfolio/profile-pic.png");
    const getUserData = async () => {
        try {
            setTimeout(async () => {
                const data = await axios.get(`http://localhost:5000/users/${auth.currentUser.email}`);
                setUserData(data['data']);
                if (auth.currentUser.photoURL != null) {
                    setProfileUrl(auth.currentUser.photoURL);
                }
            }, 3000);
        } catch (error) {

        }
    }

    return (
        <>
            <div id="algn">
                <div id="card" className='shadow-2xl ' >
                    <div id="upper-bg">
                        <img src={profileUrl} alt="profile-pic" class="profile-pic " />
                    </div>
                    <div id="lower-bg">
                        <div class="text mt-12">
                            <p class="text-2xl font-bold">{userData.firstname + " " + userData.lastname}</p>
                            <p class="title">@{userData.username}</p>
                        </div>
                        <section className='m-11'>
                            <div className='w-[50vw] text-xl mb-14 flex justify-between space-x-10'>
                                <div className='flex gap-x-5'>
                                    <span><MdEmail size={30} className='' /></span>
                                    <span className='border-b-4 border-gray-300'>{userData.email}</span>
                                </div>
                                <div className='flex gap-x-5'>
                                    <span><BsFillCalendarDateFill size={30} className='' /></span>
                                    <span className='border-b-4 border-gray-300'>Date of birth</span>
                                </div>
                                <div className='flex gap-x-5'>
                                    <span><BsFillCalendarDateFill size={30} className='' /></span>
                                    <span className='border-b-4 border-gray-300'>Date of birth</span>
                                </div>

                            </div>

                            <div className='w-[50vw] text-xl  flex justify-between space-x-10'>
                                <div className='flex gap-x-5'>
                                    <span><MdEmail size={30} className='' /></span>
                                    <span className='border-b-4 border-gray-300'>{userData.standard}</span>
                                </div>
                                <div className='flex gap-x-5'>
                                    <span><BsFillCalendarDateFill size={30} className='' /></span>
                                    <span className='border-b-4 border-gray-300'>{userData.gender}</span>
                                </div>
                                <div className='flex gap-x-5'>
                                    <span><BsFillCalendarDateFill size={30} className='' /></span>
                                    <span className='border-b-4 border-gray-300'>{userData.institute}</span>
                                </div>
                            </div>
                            <Link to={'/profileEdit'}>
                                <button type='button' className='mt-6 text-xl bg-black flex gap-x-3 rounded-full text-white px-10 py-3'>
                                    Edit    <HiOutlinePencil size={20} className='m-1' />
                                </button>
                            </Link>
                        </section>
                    </div>

                </div>
            </div>


        </>
    )
}
