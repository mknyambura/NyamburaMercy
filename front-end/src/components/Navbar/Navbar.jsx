import React, { useState } from 'react';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import './Navbar.scss';

function Navbar() {
  const [toggle, setToggle] = useState(false)
  
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        {/* <img src={images.mnk} alt="logo"/> */}
        <h1>M.N.K</h1>
      </div>
      <ul className='navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className='flex p-text'>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      {/* <img src={images.moon} alt="" className='theme-icon' /> */}
      <div className="navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)}/>
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0]}}
            transition={{duration: 0.05, ease: 'easeOut'}}>
              <HiX onClick={() => setToggle(false)}/>
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
                ))}
              </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar