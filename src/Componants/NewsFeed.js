import React from 'react'
import Statuses from './Statuses'
import Allposts from './Allposts'

function NewsFeed() {
  
  return (
    <div  className='w-[700px] ml-[250px]'>
      {/* Statuses */}
      <Statuses/>

      {/* all posts */}
      <Allposts/>
    </div>
  )
}

export default NewsFeed