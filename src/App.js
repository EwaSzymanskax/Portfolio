import React from 'react';
import  { Routes, Route, BrowserRouter } from 'react-router-dom';
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
      {/* <Navbar /> */}
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter> */}
      
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
