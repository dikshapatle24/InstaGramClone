import React, { useEffect, useState } from 'react'
import Post from './Post'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import dB, { auth } from '../firebase'

const Allposts = () => {

  const userId = auth?.currentUser?.uid
  const [userInfo, setuserInfo] = useState(null)

  useEffect(() => {
    if (userId) {
      const docRef = doc(dB, "USERS", userId)
      onSnapshot(docRef, (doc) => {
        setuserInfo(doc.data())
        // console.log("Current data: ", doc.data());

      })
    }
  }, [userId])

  const [allPosts, setallPosts] = useState([])

  useEffect(() => {
    const subscribe = onSnapshot(
      collection(dB, "USERS", userId, "POSTS"),
      (querySnapshot) => {
        setallPosts(querySnapshot.docs.map((doc) => ({
          postId: doc.id,
          postData: doc.data()
        })))
      }
    )

    return () => subscribe()
  }, [])
  console.log(allPosts);

  // const allPosts= [
  //   {
  //     userId: 2410,
  //     userName : "Diksha",
  //     userHandle : 'its_diksha_patle',
  //     postTime:"48 min",
  //     userAvatar : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
  //     postImage: "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
  //     postText :"heyy !!!....its diksha for you",
  //     likes:200,
  //     Comments:10,

  //   },
  //   {
  //     userId: 1437,
  //     userName : "Shreya",
  //     userHandle : 'Shreyaaaabisen',
  //     postTime:"16 min",
  //     userAvatar : "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
  //     postImage: "https://images.unsplash.com/photo-1546587348-d12660c30c50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
  //     likes:10256,
  //     Comments:520,

  //   },
  //   {
  //     userId: 4102,
  //     userName : "Bhagyashree",
  //     userHandle : 'janu_nakhate',
  //     postTime:"5min",
  //     userAvatar : "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  //     postImage: "https://plus.unsplash.com/premium_photo-1670441329812-2194cf9e8566?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
  //     likes:20010,
  //     Comments:10210,

  //   },
  //   {
  //     userId: 1111,
  //     userName : "Gayatri",
  //     userHandle : '_gayubopche_',
  //     postTime:"20 min",
  //     userAvatar : "https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=IRWQ9vD8MFS57B1y_m71SigkiVXCv7URzZtvUqm2X8s=",
  //     postImage: "https://plus.unsplash.com/premium_photo-1670441329184-0d347622b1c8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
  //     likes:32025,
  //     Comments:12863,

  //   },
  //   {
  //     userId: 7777,
  //     userName : "Puja",
  //     userHandle : 'its_pujachaudhari',
  //     postTime:"6h",
  //     userAvatar : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     postImage: "https://images.unsplash.com/photo-1586407014176-b592d6e2d16b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
  //     likes:410,
  //     Comments:52,

  //   },
  //   {
  //     userId: 1177,
  //     userName : "Nikhil",
  //     userHandle : 'the_tech_nik',
  //     postTime:"9h",
  //     userAvatar : "https://images.unsplash.com/photo-1486663845017-3eedaa78617f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8fDA%3D",
  //     postImage: "https://plus.unsplash.com/premium_photo-1670475533956-ca268b243753?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
  //     likes:4253,
  //     Comments:2052,

  //   },
  //   {
  //     userId: 1181,
  //     userName : "Maahi",
  //     userHandle : 'Maahi_patle',
  //     postTime:"3h",
  //     userAvatar :" https://images.unsplash.com/photo-1486663845017-3eedaa78617f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     postImage: "https://images.unsplash.com/photo-1516475429286-465d815a0df7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
  //     likes:200,
  //     Comments:10,

  //   },
  //   {
  //     userId: 2690,
  //     userName : "Ajay",
  //     userHandle : 'AjayPardhi01_2',
  //     postTime:"7h",
  //     userAvatar : "https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8fDA%3D",
  //     postImage: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
  //     likes:7000,
  //     Comments:2580,

  //   },
  //   {
  //     userId: 225900,
  //     userName : "Ayush",
  //     userHandle : 'Ayush_GhuGhuskar',
  //     postTime:"21 min",
  //     userAvatar : "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  //     postImage: "https://images.unsplash.com/photo-1520962922320-2038eebab146?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
  //     likes:6582,
  //     Comments:700,

  //   },
  //   {
  //     userId:2590,
  //     userName : "Piyush",
  //     userHandle : 'Piyush_ghughuskar',
  //     postTime:"2h",
  //     userAvatar :"https://media.istockphoto.com/id/1430286027/photo/information-technology-businessman-working-on-computer-in-office-for-digital-app-software.webp?b=1&s=170667a&w=0&k=20&c=YFwXXbAFfDtX7-2iNcbH6N-ttS3CcnMt7rlUlwIXZ2g=",
  //     postImage: "https://images.unsplash.com/photo-1539667468225-eebb663053e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D",
  //     likes:5826,
  //     Comments:10201,

  //   },
  // ]


  return (
    <div className='flex flex-col items-center'>

      {
        allPosts.map((post, index) =>
          <Post
            key={index}
            userId={userId}
            userName={userInfo?.USER_NAME}
            userHandle={userInfo?.USER_HANDLEID}
            userAvatar={userInfo.USER_AVATAR}
            postImage={post.postData?.POST_IMAGE}
            postText={post.postData?.POST_TEXT}
            postTimestamp={post.postData?.POST_TIMESTAMP}
            likes={post.likes}
            Comments={post.Comments}
          />
        )
      }
    </div>
  )
}


export default Allposts