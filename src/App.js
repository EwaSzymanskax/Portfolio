import React from 'react';
// import { HashRouter, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import style from './App.module.css';


function App() {
  return (
    <>
    <main className={style.main}>
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </main>
    </>
  );
}

export default App;
