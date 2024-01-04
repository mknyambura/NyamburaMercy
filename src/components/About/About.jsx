import React from 'react'
import Navbar from '../Navbar/Navbar'
import './About.scss'
import Footer from '../Footer/Footer'

function About() {
  return (
    <div className='page'>
        <div className='w-1/2 pt-[50px]'>
            <Navbar/>
            <div className='about flex flex-col'>
                <div className='flex flex-col gap-8 pt-[50px]'>
                    <h1 className='text-[50px] font-bold text-[#333333]'>Mercy F Nyambura Kariuki.</h1>
                    <h3 className='text-xl'>
                        <a href='https://www.tees.ac.uk/Postgraduate_courses/Computing_&_Cyber_Security/msc_data_science.cfm' className='underline'>Msc. Applied Data Science</a> + Big Data & Intelligence Lab Assistant
                        <a href="https://www.tees.ac.uk/" className='underline'>@ Teesside University</a>
                    </h3>
                </div>
                <div className='flex flex-row justify-between gap-8 items-center pt-[100px]'>
                    <img src="src\assets\dp.jpg" alt="dp" width={450} height={450}/>
                    <div className='flex flex-col items-center gap-8'>
                        <p className='text-xl'>
                            I am a data scientist/machine learning engineer with a background in computer science, economics and mathematics
                            I am currently a student at Teesside University, pursuing a Masters in Applied Data Science
                        </p>
                        <button className='text-[18px] text-[#7e7e7e] hover:transition-all hover:duration-500 hover:ease-in-out hover:text-[22px] rounded-[20px] hover:underline hover:text-black ml-[20px] mr-[20px] mt-[10px] mb-[10px]'>Resume</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
      
    </div>
  )
}

export default About