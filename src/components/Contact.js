import React from 'react';
import style from '../components/Contact.module.css';

function Contact(){
    return (
        <div className={style.containerContact}>
            <span id="contact"></span>
            <h1 className={style.h1Contact}>ewa.szymanskax@gmail.com</h1>
            <h2 className={style.h2Contact}>phone number: </h2>
            <h2 className={style.h2Contact}>+48 512-933-509</h2>
            <ul className={style.ulContact}>
                <li className={style.li}><a href="https://github.com/EwaSzymanskax">GitHub</a></li>
                <li className={style.li}><a href="https://linkedin.com/in/ewa-szymanskax">LinkedIn</a></li> 
            </ul>
            <button className={style.scroll}><a href="#home" className={style.aContact}>Scroll to top</a></button>
        </div>
    )
};

export default Contact;