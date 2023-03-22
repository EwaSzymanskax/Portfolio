import React from 'react';
import style from '../components/Resume.module.css';

function Resume(){
    return (
        <div className={style.containerResume}>
            <span id='resume' className={style.resume}></span>
            <button className={style.buttonResume}>
                <a href="lll" className={style.aResume}>Resume</a></button>
        </div>
    )
}

export default Resume;