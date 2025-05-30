import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


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

    const openGit = () => {
        window.open("https://github.com/officialaditshrm/tic-tac-toe", "_blank")
    }

    const openDep = () => {
        window.open("https://tic-tac-toe-wheat-omega.vercel.app/", "_blank")
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToshow: 1,
        slidesToScroll: 1
    }

    return (
        <>
            <div className = "font-gugi flex flex-col bg-sky-200 dark:bg-zinc-900 dark:text-white text-center">
                <div className = "flex flex-1 items-center justify-end py-4 px-5 max-sm:justify-center">
                    <h1 className = "text-[5vw] font-extrabold">PROJECTS</h1>
                </div>
                <div className = "flex flex-1 max-sm:flex-col bg-gradient-to-t from-neutral-800/0 to-neutral-800/50">
                    <div className = "flex-1 flex flex-col-reverse justify-center">
                        <div className = "flex justify-center items-center px-10 max-sm:p-3 border border-black">
                            <img src = {project} className = "rounded-xl w-full h-[50vh] object-contain"/>
                        </div>
                        <div className = " flex justify-center items-center">
                            <h1 className = "text-[3.6vw] font-bold">Tic-Tac-Toe</h1>
                        </div>
                    </div>
                    <div className = "flex-1 flex flex-col ">
                        <div className = "flex justify-evenly items-center text-white dark:text-black py-12 max-sm:py-2">
                            <button onClick = {openGit} className = "max-sm:py-3 max-sm:px-6 rounded-md hover:translate-x-[8px] hover:translate-y-[4px] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.3)] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.3)] duration-300 py-5 px-10 bg-neutral-800 dark:bg-neutral-300">Github</button>
                            <button onClick = {openDep} className = "max-sm:py-3 max-sm:px-6 rounded-md hover:translate-x-[8px] hover:translate-y-[4px] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.3)] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.3)] duration-300 py-5 px-10 bg-neutral-800 dark:bg-neutral-300">Deployment</button>
                        </div>
                        <div className = "p-10 max-sm:p-8 font-gruppo text-[1.5vw] max-sm:text-[3vw]">
                            <p>
                                A clean and interactive Tic-Tac-Toe game built with a focus on user-friendly design, responsive layout, and intuitive gameplay. The application allows two players to enter their names and play a classic 3x3 game, with real-time win detection and a visual highlight of the winning combination.<br/><br/>
                                <b>Key Features:</b>
                                <ol className = "gap-4 flex-col flex">
                                    <li>Player Name Input</li>
                                    <li>Responsive Design</li>
                                    <li>Winning Highlight</li>
                                    <li>Game Logic</li>
                                    <li>Dark/Light Mode Toggle</li>
                                    <li>Reset Functionality</li>
                                </ol>
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
        </>
    )
}

import project from "../images/Vagabond.png"

const projectlist = [
    {
        name: "VIT Music Club",
        url: "https://vitmusicclub.com",
        git: "https://github.com",
        img: project,
        description: "This is going to contain some information about the project that is mentioned here. We use some numerical values to highlight the achievements in this project. For example: “Increase of user satisfaction by 40%”, “Sub-1s execution of the process”, etc. I am basically going to add random words here so that I can fill this up here and have some good looking space to myself. This is all for my personal reference."
    },
]


export default Projects