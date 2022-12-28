import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

function Header() {
  return (
    <div id='home' className='header flex'>
      <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 3 }}
        className="header-info">
          <div className="header-badge">
            <div className="badge-cmp flex">
              <span>👋</span>
              <div style={{marginLeft: '20'}}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Mercy</h1>
              </div>
            </div>
            <div className="tag-cmp flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Data Scientist</p>
            <p className="p-text">Freelancer</p>
            </div>
          </div>

      </motion.div>

      <motion.div 
        whileInView={{opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 2 }}
        className="header-image">
          <img src={images.avatar1} alt="" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="overlay-circle"
            src={images.circle}
            alt='profile-circle'
          />
      </motion.div>
        
      <motion.div 
        variants={scaleVariants}
        whileInView = {scaleVariants.whileInView}
        className='header-circles'>
          {[images.sass, images.react, images.tailwind].map((circle, index) => (
            <div className="circle-cmp flex" key={`circle-${index}`}>
              <img src={circle} alt="" />
            </div>
          ))}

      </motion.div>
    </div>
  )
}

export default Header