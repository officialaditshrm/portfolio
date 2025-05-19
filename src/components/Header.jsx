
import { useState, useEffect } from 'react'
import moon from '../images/moon.png'
import sun from '../images/sun.png'
function Header({darkMode, setDarkMode, isVisible, scrollToContact, scrollToProjects, scrollToHome, scrollToAbout}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [shortMenu, setShortMenu] = useState(false)

    const toggleContact = () => {
        scrollToContact()
        setMenuOpen(false)
    }
    
    const toggleHome = () => {
        scrollToHome()
        setMenuOpen(false)
    }

    const toggleProjects = () => {
        scrollToProjects()
        setMenuOpen(false)
    }
    
    const toggleAbout = () => {
        scrollToAbout()
        setMenuOpen(false)
    }

    const toggleGit = () => {
        window.open('https://github.com/officialaditshrm', '_blank')
        setMenuOpen(false)
    }

    useEffect (() => {
        function handleResize () {
            if (!isVisible || window.innerWidth<640) {
                setShortMenu(true)
            } else {
                setShortMenu(false)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isVisible])

    const toggleDark = () => {
        setDarkMode(!darkMode)
    }

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    return (
        <header id = "mainheader" className = {`${shortMenu ? 'block' : 'dark:bg-[rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.5)] fixed w-full flex h-[20vh] items-stretch justify-center font-gruppo'}`}>
            {!shortMenu &&
                <div id = "buttons" className =  {`flex flex-1 dark:text-white text-[2.8vw] justify-evenly`}>
                    <button className = "flex-1 hover:bg-neutral-700/30 dark:hover:bg-neutral-200/30 hover:border-b-2 hover:border-neutral-700 dark:hover:border-neutral-200" onClick = {toggleGit}>GitHub</button>
                    <button className = "flex-1 hover:bg-neutral-700/30 dark:hover:bg-neutral-200/30 hover:border-b-2 hover:border-neutral-700 dark:hover:border-neutral-200" onClick = {toggleAbout}>About</button>
                    <button className = "flex-1 hover:bg-neutral-700/30 dark:hover:bg-neutral-200/30 hover:border-b-2 hover:border-neutral-700 dark:hover:border-neutral-200" onClick = {toggleProjects}>Projects</button>
                    <button className = "flex-1 hover:bg-neutral-700/30 dark:hover:bg-neutral-200/30 hover:border-b-2 hover:border-neutral-700 dark:hover:border-neutral-200" onClick = {toggleContact}>Contact</button>
                </div>
            }
            {shortMenu &&
                <button
                onClick = {toggleMenu}
                id = "headerbutton"
                className = {`${menuOpen && 'bg-white/0 dark:bg-black/0 border-none'} z-50 fixed flex flex-col justify-evenly items-center right-3 top-3 bg-white border-neutral-500 border dark:bg-black max-sm:w-[12vw] max-sm:h-[12vw] w-[7vw] h-[7vw] rounded-md py-1.5 hover:scale-105 hover:cursor-pointer`}
                >
                    <div className = {`${menuOpen && 'bg-white/0 dark:bg-white/0'} w-[60%] max-sm:h-[1.2vw] h-[0.7vw] bg-black dark:bg-white rounded-md`}></div>
                    <div className = {`${menuOpen && 'rotate-[45deg]'} w-[60%] max-sm:h-[1.2vw] h-[0.7vw] bg-black dark:bg-white rounded-md`}></div>
                    <div className = {`${menuOpen && 'rotate-[-45deg]'} absolute w-[60%] max-sm:h-[1.2vw] h-[0.7vw] bg-black dark:bg-white rounded-md`}></div>
                    <div className = {`${menuOpen && 'bg-white/0 dark:bg-white/0'} w-[60%] max-sm:h-[1.2vw] h-[0.7vw] bg-black dark:bg-white rounded-md`}></div>
                </button>
            }
            {shortMenu && menuOpen &&
                <div id = "menu" className = {`font-gruppo fixed p-[1.7vw] z-40 dark:text-white gap-5 text-[1.5vw] flex flex-col rounded-2xl bg-white/70 backdrop-blur-md dark:bg-black/70 items-center justify-evenly w-[15vw] max-sm:justify-center max-sm:w-screen top-24 right-7 max-sm:right-0 max-sm:top-0 max-sm:rounded-none max-sm:h-screen max-sm:text-[4.5vw]`}>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {toggleHome}>HOME</button>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {toggleGit}>GITHUB</button>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {toggleAbout}>ABOUT</button>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {toggleProjects}>PROJECTS</button>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {toggleContact}>CONTACT</button>
                </div>
            }
            <div id= "darkmode" className = {`${shortMenu ? 'fixed bottom-5 right-5 max-sm:bottom-1 max-sm:right-1 dark:text-white flex z-30 justify-center items-center bg-white/0 rounded-full w-[9vw] h-[9vw] max-sm:w-[30vw] max-sm:h-[30vw]' : 'border-l-2 border-black/30 dark:border-white/30 w-[15%] flex items-center justify-center'}`}>
                <button
                    id = "darkmodetoggle"
                    onClick = {toggleDark}
                    className = "max-sm:h-[12vw] max-sm:w-[20vw] dark:text-white bg-sky-200 dark:bg-sky-950 h-[4vw] w-[8vw] rounded-full border-2 border-black dark:border-white hover:scale-110 duration-300 flex items-center"
                    >
                    {
                        <div className = {`h-[3.4vw] max-sm:h-[10vw] mx-[0.2vw] max-sm:mx-[0.8vw] border border-black flex items-center justify-center w-[3.4vw] max-sm:w-[10vw] rounded-full bg-white bg-contain bg-no-repeat bg-center dark:translate-x-[3.9vw] max-sm:dark:translate-x-[7.8vw] `}>
                            <img src = {`${darkMode ? moon : sun}`} className = " w-[80%]"/>
                        </div>}
                </button>
            </div>
        </header>
    )
}

export default Header