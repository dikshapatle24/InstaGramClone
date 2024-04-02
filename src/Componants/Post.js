import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";



function Post(props) {
    const { userId, userName, userHandle, userAvatar, postImage, postText,
        postTimestamp, likes, Comments
    } = props

    console.log(postImage);

    return (
        <div className='w-[500px] mb-3'>
            {/* User Avatarn && UserName && Timeatamp && tree dots */}
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row items-center'>
                    <img
                        src={userAvatar}
                        alt={userName}
                        className='w-10 h-10 rounded-full'
                    />
                    <p className='text-md ml-2 text-black'>{userHandle}</p>
                    <p className='text-xl text-gray-500 mx-2'>&middot;</p>
                    {
                        postTimestamp && (
                            <p className='text-md text-gray-500'>{postTimestamp.toDate().toDateString()}</p>
                        )
                    }
                </div>
                <HiOutlineDotsHorizontal />
            </div>
            {/* image || images */}
            {
                postImage && (
                    <img
                        src={postImage}
                        alt={userName}
                        className='my-3'
                    />
                )
            }

            {/* like && commant && bookmark && no. of likes */}
            <div  >
                <div className='flex flex-row item center justify-between'>
                    <div className='flex flex-row'>
                        <FaRegHeart className='text-2xl mr-5' />
                        <FaRegComment className='text-2xl mr-5' />
                        <LuSend className='text-2xl' />
                    </div>
                    <FaRegBookmark />
                </div>
                <p className='text-md mt2 text-black'>{likes} Likes</p>
            </div>


            {
                postText && (
                    <>
                        {/* username and there comments */}

                        <div className='mt-2'>
                            <p className='text-sm'>
                                <span className='mr-2'>{userHandle}</span>
                                {postText}
                            </p>
                        </div>

                        {/* more button */}
                        <p className='text-sm text-gray-500'>...more</p>
                    </>
                )
            }

            {/* all comment link */}
            <p className='text-sm text-gray-500 mt-2' >{Comments}comments</p>

            {/* add comment textbox */}
            <input type='text'
                placeholder='Add a Comment...'
                className='w-full border-b p-2 mt-2 h-10 outline-none'
            />


        </div>
    )
}

export default Post