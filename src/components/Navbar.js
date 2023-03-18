import React, { Component } from 'react';
import style from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars }from '@fortawesome/free-solid-svg-icons';



function Navbar(){
    return (
      
        <nav className={style.navbar}>
        <div className={style.container}>
          <div className={style.header}>
          <FontAwesomeIcon className={style.icon} icon={faBars} />
          <ul className={style.ul}>
            <li className={style.li}><a href="/#">Home</a></li>
            <li className={style.li}><a href="/#">Projects</a></li> 
            <li className={style.li}><a href="/#">Resume</a></li>
            <li className={style.li}><a href="/#">Contact</a></li>
          </ul>
          </div>
        </div>
      </nav>
      
    )
    

};



export default Navbar;