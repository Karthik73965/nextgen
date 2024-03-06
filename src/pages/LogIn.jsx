import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SlLogin } from "react-icons/sl";
import { FcGoogle } from "react-icons/fc";
import { useUserAuth } from "../UserAuth"; // Ensure this path is correct
import Navbar from '../components/Navbar';
import Slider from  '../components/utils/Slider';

export default function Login() {
    const { logIn, googleSignIn, user } = useUserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
      if (user) {
        navigate("/dashboard");
      }
    }, [navigate]);

    const handleGoogleLogin = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.error(error);
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await logIn(email, password);
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
      }
    };

    return (
        <>
            <Navbar />
            <div className='h-20'></div> {/* Use standard spacing units */}
            <div className="flex m-8 mt-14 justify-center">
                <div className='flex min-h-[60] align-baseline border w-full max-w-4xl mx-auto border-black rounded-xl'>
                    <section className='w-1/2 border-r hidden sm:block border-black'>
                      <Slider/>
                    </section>
                    <section className='sm:w-1/2 p-8'>
                        <div>
                             <h2 className='text-3xl  flex gap-x-4 font-semibold text-center mb-8'>
                                <SlLogin /> Login to your account
                            </h2>
                            <form className='my-[10vh]' onSubmit={handleSubmit}>
                                {/* <div onClick={handleGoogleLogin} className='border-2 cursor-pointer p-2 rounded-lg border-gray-900 flex align-middle justify-center'>
                                    <FcGoogle size={25} className='mr-7' /> Login with Google
                                </div> */}
                                <input
                                    type='email'
                                    id='email'
                                    placeholder='Email'
                                    className='border my-3 w-full p-2 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500'
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Enter password'
                                    className='border w-full mt-3 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500'
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                <div className='justify-between items-center my-6'>
                                    <button type='submit' className="bg-black w-full font-medium rounded-full text-sm p-3 text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                                        Login
                                    </button>
                                </div>
                                <Link to="/signup" className='text-gray-900 hover:text-gray-800'>
                                    Don't have an account? Sign up
                                </Link>
                            </form>
                        </div>
                    </section>                        
                </div>
            </div>
        </>
    );
}
