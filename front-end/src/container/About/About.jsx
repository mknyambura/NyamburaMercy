import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { images } from '../../constants';
import './About.scss'
import { urlFor, client } from '../../client';

// const abouts =[
//   {
//     'title': 'Web Development', description: 'I am a good web developer', imageUrl: images.about01
//   },
//   {
//     'title': 'Web Design', description: 'I am a good web designer', imageUrl: images.about02
//   },
//   {
//     'title': 'UI/UX', description: 'I am a good web developer', imageUrl: images.about03
//   },
//   {
//     'title': 'Web Animations', description: 'I am a good web animator', imageUrl: images.about04
//   }
// ]
function About() {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query)
      .then((data) => setAbouts(data))
  }, []);
  
  return (
    <>
      <h2 className="head-text">I Know that <br/><span>Good Development </span>means <span>Good Business</span></h2>
      <div className="profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='profile-item'
            key={about.title + index}
          >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
              <p className="p-text" style={{marginTop: 0}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About