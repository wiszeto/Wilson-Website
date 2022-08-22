import React, { Component } from 'react'
import "../css/skills.css"
import pyimg from '../images/pythonimg.png'
import htmlimg from '../images/html5logo.jpg'
import cssimg from '../images/csslogo.png'
import gitimg from '../images/gitlogo.png'
import awsimg from '../images/awslogo.png'
import luaimg from '../images/lualogo.svg'
import reactimg from '../images/reactlogo.svg'
import seleniumimg from '../images/seleniumlogo.png'





class Skills extends Component {
    render() {
        return (
       
            <section id="skillheader" className="flex-project-container">

                    <div><img src={pyimg} width="100" height="100" alt="python"/></div>
                    <div><img src={gitimg} width="100" height="100" alt="git"/></div>
                    <div><img src={htmlimg} width="100" height="100" alt="html"/></div>  
                    <div><img src={cssimg} width="100" height="100" alt="css"/></div>
                    <div><img src={reactimg} width="100" height="100" alt="react"/></div>
                    <div><img src={luaimg} width="100" height="100" alt="lua"/></div>
                    <div><img src={awsimg} width="100" height="100" alt="aws"/></div>
                    <div><img src={seleniumimg} width="100" height="100" alt="selenium"/></div>






            </section>
        )
    }
}

export default Skills
