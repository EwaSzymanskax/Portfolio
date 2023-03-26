import React from 'react';
import style from '../components/Resume.module.css';
import cv from "../assets/EwaSzymańskaCV.pdf";


function Resume(){
    return (
        <div className={style.containerResume}>
            <span id='resume' className={style.resume}></span>
<button className={style.buttonResume}>
                <a className={style.aResume} href={cv} target="_blank" 
                    rel="noreferrer">
                    Resume
                </a>
                </button>
        </div>
    )
}

export default Resume;