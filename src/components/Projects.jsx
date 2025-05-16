import React from "react";
import project from "../images/Vagabond.png"
import "./projects.css"
import scrollimage from "../images/scroll.png"
import { useState } from 'react'

function Projects(){
    const [scrollHover3, setScrollHover3] = useState(false)

    const onScrollHover3 = () => {
        setScrollHover3((prev) => !prev)
    }

    const scrollToFrame = () =>{
        window.scrollBy({top: 300, left: 0, behavior: 'smooth'})
    }

    return (
        <div id = "projects">
            <div id = "projectsheader">
                <h1>PROJECTS</h1>
            </div>
            <div id = "project">
                <div id = "projectflash">
                    <div id = "projectshow">
                        
                    </div>
                    <div id = "projecttitle">
                        <h1>PROJECT - I</h1>
                    </div>
                </div>
                <div id = "projectcontent">
                    <div id = "projectbuttons">
                        <button>Github</button>
                        <button>Deployment</button>
                    </div>
                    <div id = "projectdesc">
                        <p>
                            This is going to contain some information about the project that is mentioned here.
                            We use some numerical values to highlight the achievements in this project.<br/>
                            For example: “Increase of user satisfaction by 40%”, “Sub-1s execution of the process”, etc.<br/>
                            I am basically going to add random words here so that I can fill this up here
                            and have some good looking space to myself. This is all for my personal reference.
                        </p>
                    </div>
                </div>
            </div>
            <div id = "scrolldiv3">
                <button onClick = {scrollToFrame} onMouseEnter = {onScrollHover3} onMouseLeave={onScrollHover3} id = "scrolltoframe2">
                    {scrollHover3 && <img src = {scrollimage}/>}
                </button>
            </div>
        </div>
    )
}

export default Projects