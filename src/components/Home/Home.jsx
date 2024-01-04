// import React from 'react'

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './Home.scss'


function Home() {
  return (
    <div className="page">
      <div className="w-1/2 pt-[50px] home">
        <Navbar/>
        <div className="pt-[50px]">
          <div>
            <h1 className="sm:text-[70px} md:text-[75px] lg:text-[80px] font-extrabold">Steering automation on the path to <span className="extraordinary">extraordinary</span> accomplishment</h1>
          </div>
          <p className="sm:text-[18px] md:text-[22px] lg:text-[28px] pt-[19px] pb-[16px]">
            As a data scientist/machine learning engineer, my aim is to transform numbers to valuable and comprehensible insights.
          </p>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Home