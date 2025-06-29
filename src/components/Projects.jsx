import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import scrollimage from "../images/scroll.png"
import { useState } from 'react'

function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <button
            className={`${className} !left-4 z-10`}
            style={{ ...style, display: "block", borderRadius: "50%", backgroundColor: "black"}}
            onClick={onClick}
            aria-label="Previous"
        />
    )
}

function NextArrow(props) {
    const { className, style, onClick } = props
    return (
        <button
            className={`${className} !right-4 z-10`}
            style={{ ...style, display: "block", borderRadius: "50%", backgroundColor: "black"}}
            onClick={onClick}
            aria-label="Next"
        />
    )
}

function Dots(props) {
    const { className, style, onClick } = props
    return (
        <button
            className={`${className} !bottom-4 z-10`}
            style={{ ...style, display: "fixed"}}
            onClick={onClick}
        />
    )
}

function Projects({darkMode}){
    const [scrollHover3, setScrollHover3] = useState(false)

    const onScrollHover3 = () => {
        setScrollHover3((prev) => !prev)
    }

    const scrollToFrame = () =>{
        window.scrollBy({top: 300, left: 0, behavior: 'smooth'})
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoPlay: true,
        autoPlaySpeed: 5000,
    }

    return (
            <div className = "font-gugi flex flex-col dark:text-white flex flex-col items-center text-center">
                <div className = "flex flex-1 items-center justify-end py-4 px-5 max-sm:justify-center">
                    <h1 className = "text-[5vw] font-extrabold">PROJECTS</h1>
                </div>
                <Slider {...settings} adaptiveHeight = {true} className = "w-[90%] dark:bg-zinc-800 bg-zinc-100 shadow-[0_0_10px_1px_rgba(0,0,0,0.4)] rounded-2xl">
                    {projectlist.map((project, index) => {
                        return <div key = {index} className = "dark:bg-zinc-800 bg-zinc-100 p-10 max-sm:py-5 rounded-2xl">
                            <div className = "rounded-2xl flex justify-evenly md:gap-8 flex-col">
                                <div className = "flex-1 flex justify-center items-center">
                                    <h1 className = "text-3xl max-md:text-lg font-bold">{project.name}</h1>
                                </div>
                                <div className = "flex-1 flex max-md:flex-col items-center max-md:pt-5 max-md:gap-10">
                                    {project.img && <img src = {project.img} className = "shadow-[0_2px_5px_1px_rgba(0,0,0,0.2)] mx-10  rounded-2xl object-cover h-[40vh] max-sm:h-[20vh]"/>}
                                    <p className = "font-gruppo text-md max-sm:text-xs max-md:text-sm md:text-right">
                                        {project.description}<br/><br/>
                                    </p>
                                </div>
                                {project.techstack.length > 0 && <div className = "flex-1 font-gruppo py-4 text-[1.5vw] gap-2 flex flex-col justify-evenly max-sm:text-[3vw]">
                                    <b className = "text-lg md:text-2xl">Tech Stack:</b>
                                    <ul className = "gap-4 flex text-sm flex-wrap justify-center">
                                        {project.techstack.map((element, idx) => (
                                            <li key = {idx}>{element}</li>
                                        ))
                                        }
                                    </ul>
                                </div>}
                                <div className = "flex justify-evenly items-center gap-2 text-white dark:text-black py-4 max-sm:py-2">
                                    {project.isOnGit && <button onClick = {() => window.open(project.git, "_blank")} className = "py-2 px-3 max-sm:text-sm rounded-md hover:translate-x-[8px] hover:translate-y-[4px] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.3)] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.3)] duration-300 bg-neutral-800 dark:bg-neutral-300">Github</button>}
                                    {project.isDeployed && <button onClick = {() => window.open(project.url, "_blank")} className = "py-2 px-3 max-sm:text-sm rounded-md hover:translate-x-[8px] hover:translate-y-[4px] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.3)] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.3)] duration-300 bg-neutral-800 dark:bg-neutral-300">Deployment</button>}
                                </div>
                            </div>
                        </div>
                    })}
                </Slider>
                <div className = "items-center h-[15vh] bg-gradient-to-b from-[rgba(0,0,0,0)] to-zinc-800 dark:to-neutral-500" id = "scrolldiv3">
                    <button className = "w-full h-full flex justify-center items-center hover:bg-[rgba(0,0,0,0.1)] dark:hover:bg-[rgba(255,255,255,0.1)] duration-300" onClick = {scrollToFrame} onMouseEnter = {onScrollHover3} onMouseLeave={onScrollHover3} id = "scrolltoframe3">
                        {scrollHover3 && <img src = {scrollimage}/>}
                    </button>
                </div>
            </div>
    )
}

import tictactoe from "../images/vagabond.png"
import mdjiki from "../images/resolute.png"
import mconthego from "../images/mconthego.png"
import ccfd from '../images/ccfd.png'


const projectlist = [
    {
        name: "Resolute (Resume Platform)",
        url: "https://resolute-by-aditya.vercel.app",
        git: "https://github.com/officialaditshrm/resumebuilder",
        img: mdjiki,
        description: "Resolute is a customizable, ATS Friendly, free-of-cost, Resume building, storing and sharing platform for multiple users built for the convenience for people seeking jobs. Current Features include: form to ATS-friendly Resume Conversion, multiple-Resume storing options for multiple job-roles, privacy Features including Log-in and private resumes, downloadable PDFs at multiple quality, public resume sharing into community, a Dark-Mode toggle for the convenience of your eye.",
        techstack: ["Express.js",
                        "Node.js",
                        "MongoDB",
                        "React.js",
                        "Tailwind CSS",
                        "Figma",
                        "HTML2PDF.js",
                        "Git",
                        "Vercel",
                        "Render",
                        "AWS S3"
                    ],
        isDeployed: true,
        isOnGit: true,
    },
    {
        name: 'Credit Card Fraud Detection',
        url: '',
        git: '',
        img: ccfd,
        description: 'Developed an ML pipeline to detect fraudulent credit card transactions on an imbalanced dataset of 50k+ transactions; and compared accuracy of multiple predictive models. Performed EDA in detail to analyze the transactions and applied SMOTE techniques to class imbalance. Trained and evaluated multiple models including logistic regression, decision trees & XGBoost to detect fraud. Compared the accuracy of predictive models using confusion-matrix visualizations from Seaborn to find best-fit.',
        techstack: [
            "Python",
            "Python Libraries",
            "Kaggle",
            "Scickit Learn",
            "MatPlotLib",
            "Pandas",
            "NumPy"
        ],
        isDeployed: false,
        inOnGit: false
    },
    {
        name: "MC On The Go",
        url: "",
        git: "",
        img: mconthego,
        description: "A full-stack, responsive web platform for 200+ members of the VIT Music Club, enabling streamlined access to upcoming event details and band practice slot bookings. Implemented a secure login system and integrated a dynamic member database to store and retrieve performance and band-related information. Optimized backend task creation to achieve sub-1s response times, significantly improving user experience for over 50 prototype testers.",
        techstack: [ "Node.js",
                        "Express.js",
                        "React.js",
                        "TailwindCSS",
                        "Figma",
                        "Socket.io",
                        "Vercel",
                        "AWS EC2",
                        "AWS S3",
                        "Mongo DB",
                        "Tailwind CSS"
                    ],
        isDeployed: false,
        isOnGit: false,
    },
    {
        name: "Tic-Tac-Toe",
        url: "https://tic-tac-toe-wheat-omega.vercel.app",
        git: "https://github.com/officialaditshrm/tic-tac-toe",
        img: tictactoe,
        description: "A clean and interactive Tic-Tac-Toe game built with a focus on user-friendly design, responsive layout, and intuitive gameplay. The application allows two players to enter their names and play a classic 3x3 game, with real-time win detection and a visual highlight of the winning combination.",
        techstack: ["React.js",
                        "Tailwind CSS",
                        "Figma",
                        "HTML",
                        "JavaScript",
                        "CSS"
                    ],
        isDeployed: true,
        isOnGit: true,
    },
]


export default Projects