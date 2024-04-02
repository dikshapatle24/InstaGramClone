import React from 'react'
import LeftSidebar from '../Componants/LeftSidebar'
import NewsFeed from '../Componants/NewsFeed'
import RightSidebar from '../Componants/RightSidebar'

function Homepages() {
  return (
    <div className='flex flex-row w-screen  justify-center h-screen'>

        
        {/* Left Sidebar */}
        <LeftSidebar/>

        {/* News Feed */}
        <NewsFeed/>

        {/* Right Sidebar */}
        <RightSidebar/>

    </div>
  )
}

export default Homepages