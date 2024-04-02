import React, { useEffect, useState } from 'react'
import dB, { auth } from '../firebase';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import FriendSuggestion from './FriendSuggestion';


function RightSidebar() {
  const userId= auth.currentUser.uid
 const [userInfo, setuserInfo]= useState(null)

  useEffect(()=>{
   if(userId){
    const docRef = doc(dB, "USERS", userId)
    onSnapshot(docRef,(doc)=>{
      setuserInfo(doc.data())
      // console.log("Current data: ", doc.data());
   
    })
  }
  },[userId])
  const [friendList, setfriendList]= useState([])

  useEffect(()=> {
    const collRef= collection(dB,"USERS")
    const unsubscribe = onSnapshot(collRef,(querySnapshot) => {
     
      // const cities = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>",doc.data());
          // cities.push(doc.data().name);
          let abc={
            Image:doc.data()?.USER_AVATAR,
            name:doc.data()?.USER_NAME,
            handleId:doc.data()?.USER_HANDLEID,
            userId: doc.id
           
          }
          friendList.push(abc)
      });
      // console.log("Current cities in CA: ", cities.join(", "));
    });
    return () => unsubscribe();
  },[])
  return (
    <div className='w-[300px] p-2 mt-5'>
      {/* Profile */}
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center'>
          <img
            src='https://plus.unsplash.com/premium_photo-1677178660405-38e552adf46c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='w-[50px] h-[50px] rounded-full'
          />
          <div className='ml-3'>
            <p className='text-sm text-black'>{userInfo?.USER_HANDLEID}</p>
            <p className='text-sm text-gray-500'>{userInfo?.USER_NAME}</p>
          </div>
        </div>
        <p className='text-sm text-blue-500'>switch</p>
      </div>

      {/* Suggestions */}
      <div className='flex flex-row items-center justify-between mt-3'>
        <p className='text-md text-gray-400'>Suggested for you</p>
        <p className='text-sm text-black'>See all</p>
      </div>

      {/* Friendlist / all */}
      <div className='mt-2'>
        {
          friendList.map((friend, index) => (
           <FriendSuggestion
           key={index}
           frndImage={friend?.Image}
           frndName={friend?.name}
           frndHandleId={friend?.handleId}


            />
          ))
        }
      </div>

      {/* <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center'>
          <img
           src='https://plus.unsplash.com/premium_photo-1677178660405-38e552adf46c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
           alt=''
           className='w-[50px] h-[50px] rounded-full'
           />
          <div className='ml-3'>
            <p className='text-sm text-black'>patle_golu_</p>
            <p className='text-sm text-gray-500'>Shankesh</p>
          </div>
        </div>
        <p className='text-sm text-blue-500'>Follow</p>
      </div>

      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center'>
          <img
           src='https://plus.unsplash.com/premium_photo-1677178660405-38e552adf46c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
           alt=''
           className='w-[50px] h-[50px] rounded-full'
           />
          <div className='ml-3'>
            <p className='text-sm text-black'>janu_nakhate</p>
            <p className='text-sm text-gray-500'>Bhagyashree Nakhate</p>
          </div>
        </div>
        <p className='text-sm text-blue-500'>Follow</p>
      </div>

      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center'>
          <img
           src='https://plus.unsplash.com/premium_photo-1677178660405-38e552adf46c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
           alt=''
           className='w-[50px] h-[50px] rounded-full'
           />
          <div className='ml-3'>
            <p className='text-sm text-black'>divyanaik_21</p>
            <p className='text-sm text-gray-500'>Divya Naik</p>
          </div>
        </div>
        <p className='text-sm text-blue-500'>Follow</p>
      </div>

      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row items-center'>
          <img
           src='https://plus.unsplash.com/premium_photo-1677178660405-38e552adf46c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
           alt=''
           className='w-[50px] h-[50px] rounded-full'
           />
          <div className='ml-3'>
            <p className='text-sm text-black'>shinchan_52</p>
            <p className='text-sm text-gray-500'>Pallavi Langeawar</p>
          </div>
        </div>
        <p className='text-sm text-blue-500'>Follow</p>
      </div> */}

      {/* Links */}
      <div className='mt=5'>
        <p className='text-xs text-gray-400'>
          <span>About</span> &middot; &nbsp;
          <span>Help</span> &middot; &nbsp;
          <span>Press</span> &middot; &nbsp;
          <span>API</span> &middot; &nbsp;
          <span>Jobs</span> &middot; &nbsp;
          <span>Privacy</span> &middot; &nbsp;
          <span>terms</span>
        </p>

        <p className='text-xs text-gray-400'>
          <span>Location</span> &middot; &nbsp;
          <span>Language</span> &middot; &nbsp;
          <span>Meta Verified</span>

        </p>

        <p className='text-xs text-gray-400'>
          <span>
            © 2024 INSTAGRAM FROM META
          </span>
        </p>
      </div>
    </div>

  )
}

export default RightSidebar