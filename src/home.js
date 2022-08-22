import React from 'react'

import "./css/home.css"

import Navbar from './components/navbar.js'
import Projects from "./components/Projects.js";
import Skills from './components/Skills.jsx'

import linkedin from './images/linkedin.png'
import github from './images/github.png'
import discord from './images/discord.png'

export default function Home_page() {
    return (
        <div>
            <Navbar />
            <div class = 'front_page'>
                <div class = 'front_text'>
                <h1>Wilson Szeto</h1>
                <h2>Electrical Engineer // Software Dev</h2>
                <div class="icons">
                <a class="icons" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/wilson-szeto-3a4b591aa/" >
                    <img src={linkedin} alt="Linkedin" width="40px" height="40px" />
                </a>
                <a class="icons" target="_blank" rel="noopener noreferrer" href="https://github.com/wiszeto" >
                    <img src={github} alt="Linkedin" width="40px" height="40px" />
                </a>
                <a class="icons" href="#" >
                    <div class="tooltip">
                        <img src={discord} alt="Linkedin" width="40px" height="40px" />
                        <span class="tooltiptext">williepog#8786</span>
                    </div>
                </a>
                </div>
            </div>
        </div>

            <div class = 'front_page_2'>
                <div>
                    <h1 class = 'section_title'>Projects</h1>
                    <Projects />
                </div>
                
            </div>
            
            <div class = 'front_page_3'>
                <h1 class = 'section_title'>Skills</h1>
                <Skills />
            </div>

            <div class = 'front_page_4'>
                <h1 class = 'section_title'>Expirence</h1>
            </div>

            <div class = 'front_page_5'>
                <h1 class = 'section_title'>Resume</h1>
            </div>
            
        </div>
    )
}