
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
        sessionStorage.setItem("darkmodevalue", !darkMode)
    }

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    return (
        <header id = "mainheader" className = {`${shortMenu ? 'block' : 'shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] justify-between dark:bg-[rgba(30,30,30)] rounded-2xl bg-[rgba(235,235,235)] fixed right-[5vw] left-[5vw] top-[2vw] flex h-[10vh] items-stretch font-gruppo'}`}>
            {!shortMenu &&
                <div id = "buttons" className =  {`flex dark:text-white text-lg justify-evenly gap-12 px-4`}>
                    <button className = "flex-1 rounded-l-2xl hover:font-extrabold hover:scale-90" onClick = {toggleGit}>GitHub</button>
                    <button className = "flex-1 hover:font-extrabold hover:scale-90" onClick = {toggleAbout}>About</button>
                    <button className = "flex-1 hover:font-extrabold hover:scale-90" onClick = {toggleProjects}>Projects</button>
                    <button className = "flex-1 hover:font-extrabold hover:scale-90" onClick = {toggleContact}>Contact</button>
                </div>
            }
            {shortMenu &&
                <button
                onClick = {toggleMenu}
                id = "headerbutton"
                className = {`${menuOpen && 'bg-transparent dark:shadow-none dark:bg-transparent shadow-none border-none'} z-50 fixed flex flex-col justify-evenly items-center right-3 top-3 border dark:border dark:border-white/10 shadow-[0px_0px_10px_2px_rgba(0,0,0,0.2)] justify-between dark:bg-[rgba(30,30,30)] bg-[rgba(235,235,235)] w-[8vh] h-[8vh] rounded-md hover:scale-105 hover:cursor-pointer`}
                >
                    <div className = {`${menuOpen && 'bg-white/0 dark:bg-white/0'} w-[75%] h-[0.8vh] bg-black dark:bg-white rounded-md`}></div>
                    <div className = {`${menuOpen && 'rotate-[45deg]'} absolute w-[75%] h-[0.8vh] bg-black dark:bg-white rounded-md`}></div>
                    <div className = {`${menuOpen && 'rotate-[-45deg]'} w-[75%] h-[0.8vh] bg-black dark:bg-white rounded-md`}></div>
                    <div className = {`${menuOpen && 'bg-white/0 dark:bg-white/0'} w-[75%] h-[0.8vh] bg-black dark:bg-white rounded-md`}></div>
                </button>
            }
            {shortMenu && menuOpen &&
                <div id = "menu" className = {`font-gruppo fixed max-sm:text-2xl p-[1.7vw] z-40 dark:text-white gap-8 flex flex-col rounded-2xl bg-white/70 backdrop-blur-md dark:bg-black/70 items-center justify-evenly sm:w-[25vw] shadow-[0_2px_5px_1px_rgba(0,0,0,0.25)] md:w-[20vw] max-sm:pt-20 max-sm:pb-12 max-sm:w-screen top-16 right-7 max-sm:right-0 max-sm:top-0 max-sm:rounded-none max-sm:h-screen `}>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {toggleHome}>HOME</button>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {toggleGit}>GITHUB</button>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {toggleAbout}>ABOUT</button>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {toggleProjects}>PROJECTS</button>
                    <button className = "max-sm:flex-none flex-1 hover:scale-125" onClick = {toggleContact}>CONTACT</button>
                </div>
            }
            <div id= "darkmode" className = {`${shortMenu ? 'fixed sm:top-6 max-sm:bottom-6 left-5 dark:text-white flex z-30 justify-center items-center bg-white/0 rounded-full' : 'border-l-2 border-black/30 rounded-r-2xl dark:border-white/30 w-[15%] flex items-center justify-center'}`}>
                <button
                    id = "darkmodetoggle"
                    onClick = {toggleDark}
                    className = {`relative h-[6vh] w-[10vh] dark:text-white rounded-full  hover:scale-110 duration-300 flex items-center`}
                    >
                    
                        <div className = {`h-[5vh] mx-[0.4vh] flex items-center justify-center w-[5vh] rounded-full bg-zinc-100 border border-zinc-500 z-40 dark:translate-x-[4.2vh] `}>
                            <img src = {`${darkMode ? moon : sun}`} className = " w-[80%]"/>
                        </div>
                        <div className = "w-full h-1/4 rounded-full shadow-[0_0_5px_1px_rgba(0,0,0,0.4)] z-30 bg-zinc-100 border border-zinc-500 absolute"/>
                </button>
            </div>
        </header>
    )
}

export default Header