import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <>
    <nav className='flex flex-column items-center justify-between'>
        <div className='mercy-kariuki'>
            <a href="/" className='text-[30px] text-[#333333] hover:cursor-pointer'>Mercy Kariuki.</a>
        </div>
        <div className='flex flex-row justify-between gap-8 text-[18px] '>
            {/* <div className='flex flex-column'> */}
                <a href="/about" className='no-underline text-[#7e7e7e] pl-[16px] pr-[16px] hover:text-black hover:text-[20px] hover: cursor-pointer hover:underline hover: transition-all hover: duration-500 hover:ease-in-out'>About</a>
                {/* <span className='p-[3px] w-0 bg-transparent cursor-pointer hover:bg-[#7e7e7e]'></span> */}
            {/* </div> */}
            {/* <div className='flex flex-column'> */}
                <a href="/projects" className='no-underline text-[#7e7e7e] pl-[16px] pr-[16px] hover:text-black hover:text-[20px] hover: cursor-pointer hover:underline hover: transition-all hover: duration-500 hover:ease-in-out'>Projects</a>
                {/* <span className='p-[3px] w-0 bg-transparent cursor-pointer hover:bg-[#7e7e7e]'></span> */}
            {/* </div> */}
        </div>
    </nav>
    </>
  )
}

export default Navbar