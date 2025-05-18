import "./Header.css"


function Header({darkMode, setDarkMode}) {
    const toggleDark = () => {
        setDarkMode(!darkMode)
    }

    return (
        <header id = "mainheader" className = "dark:bg-[rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.5)] fixed w-full flex h-[20vh] items-stretch justify-center font-gruppo">
            <div id = "buttons" className = "flex w-[85%] dark:text-white text-[2.8vw] justify-evenly">
                <button className = "flex-1">Socials</button>
                <button className = "flex-1">Projects</button>
                <button className = "flex-1">GitHub</button>
                <button className = "flex-1">Contact</button>
            </div>
            <div id= "darkmode" className = "border-l-2 border-black/30 dark:border-white/30 w-[15%] flex items-center justify-center">
                <button id = "darkmodetoggle" onClick = {toggleDark} className = "bg-[url('./images/moon.png')] bg-cover bg-center bg-contain bg-no-repeat h-[5vw] w-[5vw] hover:scale-110 duration-300 w-">{`${darkMode ? "Dark" : "Light"}`}</button>
            </div>
        </header>
    )
}

export default Header