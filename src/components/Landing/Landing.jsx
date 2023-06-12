import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='flex flex-row'>
        <div className='flex items-center justify-center bg-[#f3e9c6] h-screen w-[calc(50%-40px)] hover:w-[calc(50%+800px)] transition-all ease-in-out duration-700'>
            <Link to='#' className='text-center items-center justify-center font-bold text-6xl text-[#9ba5b5]'>Data Scientist</Link>
        </div>
        <div className=' flex items-center justify-center bg-[#9ba5b5] h-screen w-[calc(50%+40px)] hover:w-[calc(50%+800px)] transition-all ease-in-out duration-700 border-l-[180px] border-l-[#f3e9c6] border-b-[650px] border-b-transparent box-border'>
            <Link to='#' className='absolute top-[40%] text-center items-center justify-center font-bold text-6xl text-[#f3e9c6]'>Front-End React Developer</Link>
        </div>
    </div>
  )
}

export default Landing