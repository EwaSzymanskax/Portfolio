import React, { useState } from 'react';
import style from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars }from '@fortawesome/free-solid-svg-icons';


function Navbar(){

  const [hover, setHover] = useState(false);
  const [toggle, setToggle] = useState (true);

    return (
        <nav className={style.navbar}  onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}>
        <span id="home" className={style.span}></span>
        <div className={style.container}>
          <div className={style.header}>
          <FontAwesomeIcon className={style.icon} icon={faBars} onClick={()=> setToggle(!toggle)}/>
         {toggle && (<ul className={style.ul} >
            <li className={`style.li + ${hover ? ":hover" : ""}`}><a href="/#home">Home</a></li>
            <li className={style.li}><a href="/#projects">Projects</a></li> 
            <li className={style.li}><a href="/#resume">Resume</a></li>
            <li className={style.li}><a href="/#contact">Contact</a></li>
          </ul>
         )}
          </div>
        </div>
      </nav>  
    )
};

export default Navbar;