import React, { useState, useEffect } from 'react';
import style from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars }from '@fortawesome/free-solid-svg-icons';


function Navbar(){

  const [hover, setHover] = useState(false);
  const [toggle, setToggle] = useState (false);
  
  useEffect(()=>{    
    function handleResize() {
      const width = window.innerWidth;
      if(width >= 768) {
        setToggle(true); 
      
      }
}
  handleResize();
    window.addEventListener('resize', handleResize);
    return  () => window.removeEventListener('resize', handleResize);
  },[]);

    return (
        <nav className={style.navbar}  onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}>
        <span id="home" className={style.span}></span>
        <div className={style.container}>
          <div className={style.header}>
          <FontAwesomeIcon className={style.icon} icon={faBars} onClick={()=> setToggle(!toggle)}/>
         {toggle && (<ul className={style.ul} >
            <li className={`style.li + ${hover ? ":hover" : ""}`}><a href="/Portfolio/#home">Home</a></li>
            <li className={style.li}><a href="/Portfolio/#projects">Projects</a></li> 
            <li className={style.li}><a href="/Portfolio/#resume">Resume</a></li>
            <li className={style.li}><a href="/Portfolio/#contact">Contact</a></li>
          </ul>
         )}
          </div>
        </div>
      </nav>  
    )
};

export default Navbar;