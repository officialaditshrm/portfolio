
import { useState, useEffect } from 'react'
import moon from '../images/moon.png'
function Header({darkMode, setDarkMode, isVisible}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [shortMenu, setShortMenu] = useState(false)

    useEffect (() => {
        function handleResize () {
            if (!isVisible || window.innerWidth<768) {
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
                    <button className = "flex-1">Socials</button>
                    <button className = "flex-1">Projects</button>
                    <button className = "flex-1">GitHub</button>
                    <button className = "flex-1">Contact</button>
                </div>
            }
            {shortMenu &&
                <button
                onClick = {toggleMenu}
                id = "headerbutton"
                className = {`${menuOpen && 'z-20 bg-white/0 dark:bg-black/0 border-none'} fixed flex flex-col justify-evenly items-center right-3 top-3 bg-white border-neutral-500 border dark:bg-black max-sm:w-[12vw] max-sm:h-[12vw] w-[7vw] h-[7vw] rounded-md py-1.5 hover:scale-105 hover:cursor-pointer`}
                >
                    <div className = {`${menuOpen && 'bg-white/0 dark:bg-white/0'} w-[60%] max-sm:h-[1.2vw] h-[0.7vw] bg-black dark:bg-white rounded-md`}></div>
                    <div className = {`${menuOpen && 'rotate-[45deg]'} w-[60%] max-sm:h-[1.2vw] h-[0.7vw] bg-black dark:bg-white rounded-md`}></div>
                    <div className = {`${menuOpen && 'rotate-[-45deg]'} absolute w-[60%] max-sm:h-[1.2vw] h-[0.7vw] bg-black dark:bg-white rounded-md`}></div>
                    <div className = {`${menuOpen && 'bg-white/0 dark:bg-white/0'} w-[60%] max-sm:h-[1.2vw] h-[0.7vw] bg-black dark:bg-white rounded-md`}></div>
                </button>
            }
            {shortMenu && menuOpen &&
                <div id = "menu" className = {`font-gruppo fixed p-[1.7vw] z-10 dark:text-white gap-5 text-[1.5vw] flex flex-col rounded-2xl bg-white/70 backdrop-blur-md dark:bg-black/70 items-center justify-evenly w-[15vw] max-sm:justify-center max-sm:w-screen top-24 right-7 max-sm:right-0 max-sm:top-0 max-sm:rounded-none max-sm:h-screen max-sm:text-[4.5vw]`}>
                    <button className = "max-sm:flex-none flex-1">SOCIALS</button>
                    <button className = "max-sm:flex-none flex-1">PROJECTS</button>
                    <button className = "max-sm:flex-none flex-1">GITHUB</button>
                    <button className = "max-sm:flex-none flex-1">CONTACT</button>
                </div>
            }
            <div id= "darkmode" className = {`${shortMenu ? 'fixed bottom-5 right-5 dark:text-white dark:bg-black border-neutral-500 border flex z-0 justify-center items-center bg-white rounded-full w-[9vw] h-[9vw] max-sm:w-[15vw] max-sm:h-[15vw]' : 'border-l-2 border-black/30 dark:border-white/30 w-[15%] flex items-center justify-center'}`}>
                <button
                    id = "darkmodetoggle"
                    onClick = {toggleDark}
                    className = "bg-[url('./images/moon.png')] bg-cover bg-center bg-contain dark:text-white bg-no-repeat h-[5vw] w-[5vw] hover:scale-110 duration-300 "
                    >
                    {`${darkMode ? "Dark" : "Light"}`}
                </button>
            </div>
        </header>
    )
}

export default Header