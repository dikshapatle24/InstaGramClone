import React, { useState } from 'react'
import LeftSidebar from '../Componants/LeftSidebar'
import dB, { auth, storage } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function Create() {

  const currentUserId= auth?.currentUser?.uid

  const [progress, setprogress]= useState(0)

  const [postText, setpostText]= useState('')

  const [image,setimage]=useState(null)

  const handleCreateImage = (e) => {
    setimage(null)
    if(e.target.files[0]){
      setimage(e.target.files[0])
    }
  }

  const handleCreatePost = (e) =>{
    e.preventDefault();
   if (postText || image){
      if (image){
        const storageRef = ref(storage, `${currentUserId}/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
              //monitoring upload process
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setprogress(progress)
          },
          (err) => {
              //on error
              console.log(err.message);
          },
          () => {
              //on success
              getDownloadURL(uploadTask.snapshot.ref)
              .then((downloadURL) => {
                // console.log('File available at', downloadURL);
                addDoc(collection(dB, "USERS",currentUserId,"POSTS"),{
                  POST_TEXT: postText,
                  POST_IMAGE:downloadURL,
                  POST_TIMESTAMP:serverTimestamp(),
            
                }).then(()=>{
                  setpostText("")
                  setimage(null)
                  setprogress(0)
            
                }).catch((err)=>{
                  console.log(err.message);
                })
              }).catch((err) =>{
                console.log(err.message);
              })
          }
        )

      } else {
        addDoc(collection(dB, "USERS",currentUserId,"POSTS"),{
          POST_TEXT: postText,
          POST_IMAGE:"",
          POST_TIMESTAMP:'',
    
        }).then(()=>{
          setpostText("")
    
        }).catch((err)=>{
          console.log(err.message);
        })
      }
    }
   
   
  }
  return (
    <div>
      <LeftSidebar/>
      <div className='ml-[250px] flex flex-col items-center w-[500px] border-4 border-black'>
        <h1 className='m-2'>Create</h1>
       <textarea 
       value={postText}
       onChange={(e) =>{
        e.preventDefault()
        setpostText(e.target.value)
       }}
         cols='30' 
         rows='10'
         placeholder='What You Want to share?'
         className='border-2 border-black w-[450px] m-2'
         ></textarea>
       <input 
       onChange={handleCreateImage} 
       type='file' 
       className='m-2'
       accept='image/png, image/gif, image/jpeg, image/jpg'
        />
       <progress className='m-2' value={progress} max='100'></progress>
       <button onClick={handleCreatePost} className='m-2 px-10 py-2 text-white bg-blue-600 text-xl rounded-xl hover:bg-blue-900 transition deley-100'>Post</button>
      </div>
    </div>
  )
}

export default Create