import React, { useState, useEffect, useRef } from 'react';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { HiOutlinePencil } from "react-icons/hi2";
import { MdEmail } from 'react-icons/md';
import { MdMan4 } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidInstitution } from "react-icons/bi";
import { IoSchoolSharp } from "react-icons/io5";


export default function Mainedit() {
    const fileInputRef = useRef(null);
    const profilerf = useRef(null)
  const [profile, setProfile] = useState({
    email: '',
    dateOfBirth: '',
    // ... other fields according to your data structure
  });
  const handleFilechange = (event) => {
    // Handle the file change event
    // You can access the selected files using event.target.files
    console.log(event.target.files);
    // ... additional code to handle the files
};


const triggerFileInput = () => {
    // Trigger the file input click event
    fileInputRef.current.click(); x
};
const handleprofilechange = (event) => {
    // Handle the file change event
    // You can access the selected files using event.target.files
    console.log(event.target.files);
    // ... additional code to handle the files
};


const triggerprofileInput = () => {
    // Trigger the file input click event
    fileInputRef.current.click(); x
};

  useEffect(() => {
    // Fetch data from the server
    fetch('/api/user/profile')
      .then(response => response.json())
      .then(data => setProfile(data));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update profile on the server
    fetch('/api/user/profile', {
      method: 'PUT',
      body: JSON.stringify(profile),
    })
      .then(response => {
        if (response.ok) {
          alert('Profile updated successfully!');
          // ... handle successful update, maybe re-fetch data to display changes
        } else {
          alert('Error updating profile!');
          // ... handle error
        }
      });
  };

  return (
    <>
      <main className='m-10 p-10'>
        <center>
          <div className='bg-yellow-400 rounded-xl w-[90%] h-[200px] text-2xl p-8 font-bold flex '>
             
          <input
                       type="file"
                       ref={fileInputRef}
                       onChange={handleFilechange}
                       style={{ display: 'none' }} // Hide the file input
                       className="block  text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100 m-"
                        // Remove this if you want only single file selection
                   />
            change your background color <HiOutlinePencil onClick={triggerFileInput} size={30} className='m-' />
          </div>
        </center>
        
        <section className='ml-20 flex justify-around m-10'>
          <div>
          <input
                       type="file"
                       ref={profilerf}
                       onChange={handleprofilechange}
                       style={{ display: 'none' }} // Hide the file input
                       className="block  text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100 m-"
                        // Re
                       />
            <img src="https://nasemul1.github.io/my-portfolio/profile-pic.png" className='h-36 'onClick={triggerprofileInput} alt="profile-pic" />
          </div>
          <section className='m-11'>
            <div className='w-[50vw] text-xl mb-14 flex justify-between space-x-10'>
              <div className='flex gap-x-5'>
                <span><MdMan4 size={30} className='' /></span>
                <input
                  type="email"
                  name="email"
                  value={"value"}
                  onChange={handleChange}
                  className='border-b-4 border-gray-300'
                />
              </div>
              <div className='flex gap-x-5'>
                <span><MdEmail size={30} className='' /></span>
                <input
                  type="email"
                  name="email"
                  value={"value"}
                  onChange={handleChange}
                  className='border-b-4 border-gray-300'
                />
              </div>
              <div className='flex gap-x-5'>
                <span><BsFillCalendarDateFill size={30} className='' /></span>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={profile.dateOfBirth}
                  onChange={handleChange}
                  className='border-b-4 border-gray-300'
                />
              </div>
              {/* ... repeat input fields for other profile data */}
            </div>
            <div className='w-[50vw] text-xl mb-14 flex justify-between space-x-10'>
              <div className='flex gap-x-5'>
                <span><RiLockPasswordFill
 size={30} className='' /></span>
                <input
                  type="email"
                  name="email"
                  value={"value"}
                  onChange={handleChange}
                  className='border-b-4 border-gray-300'
                />
              </div>
              <div className='flex gap-x-5'>
                <span><BiSolidInstitution 
 size={30} className='' /></span>
                <input
                  type="email"
                  name="email"
                  value={"value"}
                  onChange={handleChange}
                  className='border-b-4 border-gray-300'
                />
              </div>
              <div className='flex gap-x-5'>
                <span><IoSchoolSharp  
 size={30} className='' /></span>
                <input
                  type="email"
                  name="email"
                  value={"value"}
                  onChange={handleChange}
                  className='border-b-4 border-gray-300'
                />
              </div>
              
              {/* ... repeat input fields for other profile data */}
            </div>

            <div className='w-[50vw] text-xl  flex justify-between space-x-10'>
              {/* ... repeat input fields for other profile data */}
            </div>
            <center className='mt-14'>
              <button type='button' className='mt-6 text-xl bg-black flex gap-x-3 rounded-full text-white px-10 py-3' onClick={handleSubmit}>
                Update your profile <HiOutlinePencil size={20} className='m-1' />
              </button>
            </center>
          </section>
        </section>
      </main>
    </>
  );
}
