import React from 'react';
import { NavigationDots, SocialMedia } from '../components';


const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`container ${classNames}`}>
        <SocialMedia/>
        <div className='wrapper flex'>
            <Component/>
            <div className='copyright'>
                <p className="p-text">@2022 Mercy F. Nyambura Kariuki</p>
                <p className="p-text">All rights reserved</p>
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  );
};

export default AppWrap;