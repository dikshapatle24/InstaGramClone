import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

function FriendSuggestion(prop) {
    const {frndImage, frndName, frndHandleId}= prop
  return (
    <div className='flex flex-row items-center justify-between mt-3'>
              <div className='flex flex-row items-center'>
                {
                frndImage ?(
                    <img
                  src={frndImage}
                  alt={frndName}
                  className='w-[50px] h-[50px] rounded-full'
                />
                ):(
                    <FaRegUserCircle className='w-[40px] h-[40px] rounded-full'/>
                )
                }
                <div className='ml-3'>
                  <p className='text-sm text-black'>{frndHandleId}</p>
                  <p className='text-sm text-gray-500'>{frndName} </p>
                </div>
              </div>
              <p className='text-sm text-blue-500'>Follow</p>
            </div>
  )
}

export default FriendSuggestion