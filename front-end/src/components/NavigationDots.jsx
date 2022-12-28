import React from 'react'

const NavigationDots = ({active}) => (
  <div className='navigation'>
      {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => (
          <a 
            href={`#${item}`}
            key={item + index}
            className="navigation-dot"
            style={active === item ? { backgroundColor: '#313abc'} : {}}
          ></a>
        ))}
  </div>
)

export default NavigationDots