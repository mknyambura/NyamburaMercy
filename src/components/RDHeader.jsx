import React from 'react'

const RDHeader = () => {
  return (
    <div>
        <div className=' h-[50vh] py-12 px-12 '>
            <div className=' flex flex-col gap-8 items-center justify-center'>
                <h1 className='text-black font-bold text-2xl'>Mercy Nyambura Kariuki</h1>
                <div className='items-center w-3/4 flex flex-col relative gap-8'>
                    <div className='flex items-center justify-center w-[40%] bg-[#222CFD] h-[3px]'></div>
                    <div className='absolute top-[-5px] h-[15px] w-[15px] rounded-full bg-[#222CFD]'></div>
                </div>
            </div>
            <div className='flex flex-col gap-6 justify-center px-12 py-12 text-center item-center'>
                <p>
                    Hi! Glad to see you here.
                    <br/>  
                    <br/>
                    As a Front-End Developer, I possess an impressive arsenal of skills in <span className='text-[#222CFD] font-bold'>HTML, CSS, JavaScript, React, NextJS, Typescript, Tailwind, SaSS, Rails</span> and <span className='text-[#222CFD] font-bold'>Ruby</span>. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                </p>
            </div>
        </div>
    </div>
  )
}

export default RDHeader