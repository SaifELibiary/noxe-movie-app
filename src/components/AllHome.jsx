import React from 'react'
import NavBar from './NavBar'
import Home from './Home'

export default function AllHome() {




  return (
    <div className='relative w-full h-screen bg-gray-950 overflow-hidden'>
    <div className="fixed top-0 left-0 w-full z-50">
        <NavBar/>
    </div>

    <div className="w-full h-full">
        <Home/>
    </div>
</div>
  )
}
