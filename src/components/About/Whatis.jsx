import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import video from '../../assests/demo.mp4'
export default function Whatis() {
  return (
    <>
    <section className='mx-6 border-2 p-4 shadow-2xl rounded-xl'>
    <h2 className='flex gap-4  text-3xl text-slate-800 font-bold  '> <FaLongArrowAltRight color='black' size={35} />What is Nextgen Study</h2>
    <p className='m-3 font-semibold mx-6'> Next Gen Study AI represents a specific implementation of this concept. It aims to offer students an innovative and effective alternative study method through a product designed to solve academic questions instantly across various subjects.</p>
   <center className='my-6'>
   <video className='rounded-lg ' autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
   </center>
    </section>
    </>
  )
}
