import React from 'react'

const Statuses = () => {
const statusList =[
    {
        image:"https://plus.unsplash.com/premium_photo-1686949554005-78d1370ab4f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1686949554005-78d1370ab4f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1686949554005-78d1370ab4f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1686949554005-78d1370ab4f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1686949554005-78d1370ab4f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1686949554005-78d1370ab4f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        image:"https://plus.unsplash.com/premium_photo-1686949554005-78d1370ab4f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
    }
]
  return (
    <div className='flex flex-row items-center justify-center p-3'>
        {
        statusList.map((status , index) =>(
            <img
            key={index}
            src={status.image}
            alt={status.image}
            className='w-16 h-16 rounded-full border border-transparent outline outline-4 outline-red-400 m-2'
            />
        ))
       }
    </div>
  )
}

export default Statuses