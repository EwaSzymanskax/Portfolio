import React, { useState } from 'react';
import style from "./Projects.module.css";
import portfolioTemplate from '../image/portfolioTemplate.png';
import ReflexGame from '../image/ReflexGame.png';
import ListOfProducts from '../image/ListOfProducts.png';
import ExpensesList from '../image/ExpensesList.png';
import TicTacToe from '../image/TicTacToe.png';

function Projects(){
    const [hover, setHover] = useState(false);

    return(
    <div className={style.projectsContainer}>
    <span id="projects" className={`style.span + ${hover ? ":hover" : ""}`}></span>
    <h1 className={style.h1Project}>Projects:</h1>
    <div className={style.projectsBox} onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}>
        <div className={style.card} >
            <div className={style.aboutProject}>
                <h2  className={style.h2Projects}>Portfolio Template</h2>
                <p className={style.pProjects}>A responsive portfolio website created based on Figma design.</p>
            </div>
            <a href="https://ewaszymanskax.github.io/Portfolio-Template" >
            <img className={style.imgProjects} src={portfolioTemplate} alt="portfolio"/> 
            </a>
        </div>

        <div className={style.card}>
            <div className={style.aboutProject}>
                <h2 className={style.h2Projects}>Reflex Game</h2>
                <p className={style.pProjects}>The game that a player has to click on a green randomly selected square.</p>
            </div>
            <a href="https://ewaszymanskax.github.io/ReflexGame/" >
            <img className={style.imgProjects} src={ReflexGame} alt="game"/>
            </a>
        </div>
        <div  className={style.card}>
            <div className={style.aboutProject}>
                <h2  className={style.h2Projects}>List of products</h2>
                <p className={style.pProjects}>The app returns a search results that match the parameters specified in the API.</p>
                </div>
                <a href="https://ewaszymanskax.github.io/TicTacToeGame/" >
                <img className={style.imgProjects} src={ListOfProducts} alt="app"/>
                </a>
        </div>
        <div  className={style.card}>
            <div className={style.aboutProject}>
                <h2 className={style.h2Projects}>Expenses List</h2>
                <p className={style.pProjects}>The app includes list of expenses with the date, the amount and the expenses browser.</p>
                </div>
                <a href="https://ewaszymanskax.github.io/ExpensesList/" >
                <img className={style.imgProjects} src={ExpensesList} alt="app"/>
                </a>
        </div>
            <div className={style.card}>
            <div className={style.aboutProject}>
                <h2  className={style.h2Projects}>Tic Tac Toe Game</h2>
                <p className={style.pProjects}>The interactive tic-tac-toe game with React.</p>
                </div>
                <a href="https://ewaszymanskax.github.io/TicTacToeGame/" >
                <img className={style.imgProjects} src={TicTacToe} alt="tic-tac-toe"/>
                </a>
        </div>
    </div>
    </div>
    )
    

};



export default Projects;