import React from "react";
import project from "../images/Vagabond.png"
import scrollimage from "../images/scroll.png"
import { useState } from 'react'

function Projects({darkMode}){
    const [scrollHover3, setScrollHover3] = useState(false)

    const onScrollHover3 = () => {
        setScrollHover3((prev) => !prev)
    }

    const scrollToFrame = () =>{
        window.scrollBy({top: 300, left: 0, behavior: 'smooth'})
    }

    return (
        <div id = "projects" className = "font-gugi flex flex-col bg-sky-200 dark:bg-zinc-900 dark:text-white text-center">
            <div id = "projectsheader" className = "flex items-center justify-end py-4 px-5 max-sm:justify-center">
                <h1 className = "text-[5vw] font-extrabold">PROJECTS</h1>
            </div>
            <div id = "project" className = "flex max-sm:flex-col">
                <div id = "projectflash" className = "flex-1 flex flex-col">
                    <div id = "projectshow" className = "flex-1 flex justify-center items-center p-10 max-sm:p-3">
                        <img src = {project} className = "rounded-xl w-full h-full object-cover"/>
                    </div>
                    <div id = "projecttitle" className = "h-[15vh] flex justify-center items-center">
                        <h1 className = "text-[3.6vw] font-bold">PROJECT - I</h1>
                    </div>
                </div>
                <div id = "projectcontent" className = "flex-1 flex flex-col ">
                    <div id = "projectbuttons" className = "flex justify-evenly items-center text-white dark:text-black py-12 max-sm:py-2">
                        <button className = "max-sm:py-3 max-sm:px-6 rounded-md hover:translate-x-[8px] hover:translate-y-[4px] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.3)] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.3)] duration-300 py-5 px-10 bg-neutral-800 dark:bg-neutral-300">Github</button>
                        <button className = "max-sm:py-3 max-sm:px-6 rounded-md hover:translate-x-[8px] hover:translate-y-[4px] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.3)] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.3)] duration-300 py-5 px-10 bg-neutral-800 dark:bg-neutral-300">Deployment</button>
                    </div>
                    <div id = "projectdesc" className = "p-16 max-sm:p-8 font-gruppo text-[1.5vw] max-sm:text-[2.5vw]">
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
            <div className = "items-center h-[15vh] bg-gradient-to-b from-[rgba(0,0,0,0)] to-zinc-800 dark:to-neutral-500" id = "scrolldiv3">
                <button className = "w-full h-full flex justify-center items-center hover:bg-[rgba(0,0,0,0.1)] dark:hover:bg-[rgba(255,255,255,0.1)] duration-300" onClick = {scrollToFrame} onMouseEnter = {onScrollHover3} onMouseLeave={onScrollHover3} id = "scrolltoframe3">
                    {scrollHover3 && <img src = {scrollimage}/>}
                </button>
            </div>
        </div>
    )
}

export default Projects