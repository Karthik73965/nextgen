import React, { useState, useEffect } from 'react'
import { MdEmail } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import female from '../../assests/female.jpeg'
import male from '../../assests/male.jpeg'
import axios from 'axios';
import { getUserId } from 'supertokens-auth-react/recipe/session';
export default function Main() {

    const [user, setUser] = useState({
        "uid": "",
        "username": "Username",
        "email": "Example@example.com",
        "firstname": "firstname",
        "lastname": "lastname",
        "gender": "gender",
        "standard": "standard",
        "institute": "institute",
        "country": "country",
        "dob": "dob"
    });
    useEffect(() => {
        async function fetch_data() {
            try {
                const uid = await getUserId(); // Make sure getUserId() is defined and correctly implemented
                const response = await axios.get(`http://localhost:5000/users/${uid}`);
                console.log(response.data); // Logging the actual response data
                setUser(response.data); // Updating state with the response data
            } catch (error) {
                console.error("There was an error fetching the user data:", error);
            }
        }
        fetch_data();
    }, []);

    return (
        <>
            <div className='h-auto' id="algn">
                <div id="card" className='shadow-2xl ' >
                    <div id="upper-bg">
                        <img src={user.gender == "male" ? male : female} alt="profile-pic" class="profile-pic " />
                    </div>
                    <div id="lower-bg">
                        <div class="text sm:mt-12">
                            <p class="text-2xl font-bold">{user.firstname + " " + user.lastname}</p>
                            <p class="title">@{user.username}</p>
                        </div>
                        <section className='sm:m-11 h-64'>
                            <div className='w-[50vw] text-xl mb-14 grid  sm:flex justify-between   sm:space-x-10'>
                                <div className='flex my-3 gap-x-5'>
                                    <span><MdEmail size={30} className='' /></span>
                                    <span className='border-b-4 border-gray-300'>{user.email}</span>
                                </div>
                                <div className='flex my-3 gap-x-5'>
                                    <span><BsFillCalendarDateFill size={30} className=' ml-0' /></span>
                                    <span className='border-b-4 border-gray-300'>{user.dob}</span>
                                </div>
                                <div className='flex my-3 gap-x-5'>
                                    <span><BsFillCalendarDateFill size={30} className='' /></span>
                                    <span className='border-b-4 border-gray-300'>{user.country}</span>
                                </div>

                            </div>

                            <div className='w-[50vw] text-xl  grid  sm:flex justify-between sm:space-x-10'>
                                <div className='flex my-3 gap-x-5'>
                                    <span><MdEmail size={30} className='' /></span>
                                    <span className='border-b-4 border-gray-300'>{user.standard} th Standard</span>
                                </div>
                                <div className='flex my-3 gap-x-5'>
                                    <span><BsFillCalendarDateFill size={30} className='' /></span>
                                    <span className='border-b-4 border-gray-300'>{user.gender}</span>
                                </div>
                                <div className='flex my-3 gap-x-5'>
                                    <span><BsFillCalendarDateFill size={30} className='' /></span>
                                    <span className='border-b-4 border-gray-300'>{user.institute}</span>
                                </div>
                            </div>
                            {/* <Link to={'/profileEdit'}>
                                <button type='button' className='mt-6 text-xl bg-black flex gap-x-3 rounded-full text-white px-10 py-3'>
                                Edit    <HiOutlinePencil size={20} className='m-1' />
                            </button>
                            </Link> */}
                        </section>
                    </div>

                </div>
            </div>


        </>
    )
}
