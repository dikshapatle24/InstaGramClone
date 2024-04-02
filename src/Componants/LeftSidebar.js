import React from 'react'

import { TiThMenu } from "react-icons/ti";
import { FaThreads } from "react-icons/fa6";
import { NAV_ITEMS } from '../Constants/AllConstants';
import { Link,useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {auth} from '../firebase';

function LeftSidebar() {

   const navigate =useNavigate();
const handleLogout = (e) => {
e.preventDefault();
signOut(auth)
.then(() => {
  navigate('/Login');
}).catch((error) => {
  const errorCode=error.code;
  const errorMessage=error.message;
  alert(errorCode,errorMessage)
});

// navigate('/login');
}


  return (
    <div className="w-[250px] h-screen pb-3 flex flex-col items-center justify-between border-r border-gray-300 fixed left-0">
      <div>

       <Link to={"/home"}>
       <img
          src="logo.png"
          alt=''
          className='w-[100px] mt-10 mb-10'
        />
       </Link>

        {
          NAV_ITEMS.map((item, index) => (
            <Link key={index} to={item.redirect}>
              <div key={index} className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-4 hover:bg-gray-100 hover:cursor-pointer transition delay-100'>
                <item.icon className='text-2xl' />
                <p className='ml-3 text-md'>{item.name}</p>
              </div>
            </Link>
          ))
        }


        {/* <div className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-2 hover:bg-gray-100 hover:cursor-pointer transition delay-100'>
     
      <IoMdHome className='text-2xl' />
     
      <p className='ml-3 text-md'>Home</p>
     </div>

     <div className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-2 hover:bg-gray-100 hover:cursor-pointer transition delay-100'>
      
      <IoSearch className='text-2xl' />
     
      <p className='ml-3 text-md'>Search</p>
     </div>

     <div className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-2 hover:bg-gray-100 hover:cursor-pointer transition delay-100'>
     
      <MdOutlineExplore className='text-2xl' />
     
      <p className='ml-3 text-md'>Explore</p>
     </div>


     <div className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-2 hover:bg-gray-100 hover:cursor-pointer transition delay-100'>
     
      <BiMoviePlay className='text-2xl' />
     
      <p className='ml-3 text-md'>Reels</p>
     </div>


     <div className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-2 hover:bg-gray-100 hover:cursor-pointer transition delay-100'>
     
      <RiMessengerFill className='text-2xl' />
     
      <p className='ml-3 text-md'>Message</p>
     </div>

     <div className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-2 hover:bg-gray-100 hover:cursor-pointer transition delay-100'>
     
      <FaRegHeart className='text-2xl' />
     
      <p className='ml-3 text-md'>Notification</p>
     </div>

     <div className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-2 hover:bg-gray-100 hover:cursor-pointer transition delay-100'>
     
      <FaRegSquarePlus className='text-2xl' />
     
      <p className='ml-3 text-md'>Create</p>
     </div> */}
        <Link to='/profile'>
          <div className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-2 hover:bg-gray-100 hover:cursor-pointer transition delay-100'>
            <img
              src='https://plus.unsplash.com/premium_photo-1677178660405-38e552adf46c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
              className='w-[25px] h-[25px] rounded-full'
            />
            <p className='ml-3 text-md'>Profile</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to='/thread'>
          <div className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-2 hover:bg-gray-100 hover:cursor-pointer transition delay-100'>
            <FaThreads className='text-2xl' />
            <p className='ml-3 text-md'>Thread</p>
          </div>
        </Link>
        <div className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-2 hover:bg-gray-100 hover:cursor-pointer transition delay-100'>
          <button onClick={handleLogout}>Logout</button>
          
        </div>

        {/* <div className='flex flex-row items-center w-[220px] p-2 rounded-lg mb-2 hover:bg-gray-100 hover:cursor-pointer transition delay-100'>

          <TiThMenu className='text-2xl' />

          <p className='ml-3 text-md'>More</p>
        </div> */}

      </div>
    </div>


  )
}

export default LeftSidebar