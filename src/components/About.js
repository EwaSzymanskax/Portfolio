import React from 'react';
import style from './About.module.css';
import img from '../image/image2.png';


function About() {
    return (
        <section className={style.about}>
          <div className={style.aboutContainer}>
            <h1 className={style.aboutH1}>Ewa Szymańska</h1>
            <h2 className={style.aboutH2}>Frontend developer</h2>
            <p className={style.aboutP}>Ready for continue expanding my JavaScript knowledge into perfecting accessibility and responsive design. </p>    
          <button><a href="#projects" className={style.aAbout}>Check my projects</a></button>           
          </div>
          <img src={img} alt="foto"></img>
 
        </section>
    )
    

};



export default About;