import React from 'react'
import { HiArrowSmRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export default function Cards({ heading, component, description }) {
    return (
        <>
            <section className={`border-solid gridBackground border-2  ${heading != "Mathematics" ? "opacity-60":""}  rounded-lg p-3 shadow-xl m-4 w-[200px] border-black`}>
                <center>
                    <div className='m-1 font-semibold'>{component}</div>
                    <div className='m-1 text-gradient  text-xl font-bold'>{heading}</div>
                    {/* <div className='m-1 text-sm text-gray-700 font-semibold h-[150px]'>{description.map((m, index) => (
  <div key={index}>{m}</div>
))}</div>  */}
                    <button type="button" className="relative text-white bg-black   font-medium rounded-full text-sm m-2 px-5 py-2.5 text-center ring-animation">
                        <Link to={`${heading != "Mathematics"?"":"/Signup"}`}>
                        <div className='inline-flex items-center   justify-center gap-x-3'>
                          {heading != "Mathematics" ?<div className='text-sm flex '><span className='mr-1'>Coming</span> <span>Soon </span> </div> : <span>Get started </span>}  <HiArrowSmRight size={20} />
                        </div>
                        </Link>
                       
                    </button>
                </center>
            </section>
        </>

    )
}
