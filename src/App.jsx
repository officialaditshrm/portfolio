import { useState, useRef, useEffect } from 'react'
import Header from './components/Header.jsx'
import spcode from './images/spcode.png'
import Slideshow from './components/Slideshow.jsx'
import scrollimage from './images/scroll.png'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import { motion } from 'framer-motion'
import spcodeLight from './images/spcodeLight.png'


function App() {
  const [scrollHover1, setScrollHover1] = useState(false)
  const [scrollHover2, setScrollHover2] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const myRef = useRef()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIsVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current)
  }, [])

  const onScrollHover1 = () => {
    setScrollHover1((prev) => !prev)
  }

  const onScrollHover2 = () => {
    setScrollHover2((prev) => !prev)
  }

  const scrollToFrame = () => {
    window.scrollBy({top: 300, left: 0, behavior: 'smooth'})
  }

  const spClick = () => {
    window.open("https://open.spotify.com/track/19qeqEplt79YKey4DWgwUR?si=8587fa40446c455c", "_blank")
  }


  return (
    <div className = {darkMode && "dark"}>
      <Header darkMode = {darkMode} setDarkMode = {setDarkMode} isVisible = {isVisible}/>
      <div 
        id="frame1" 
        ref = {myRef}
        className = "bg-sky-300 dark:bg-[url('./images/perks.jpg')] h-screen flex flex-col justify-center bg-cover">
        <div id ="mainframe1" className="h-[85%] flex flex-col justify-end">
          <motion.div id = "name" className = "sm:pl-5 h-max flex flex-col max-sm:items-center max-sm:h-full max-sm:justify-center w-full ">
            <img src = {`${darkMode ? spcode : spcodeLight}`} className = "max-sm:w-[50%] w-[25%] h-[15%] object-cover dark:object-contain hover:translate-x-[8px] hover:translate-y-[4px] hover:cursor-pointer hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.5)] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.5)] dark:hover:bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(255,255,255,0.2)] rounded-xl" onClick = {spClick} id= "spcode" alt= "blue jean" />
            <h1 className = "font-gruppo dark:text-white max-sm:text-[9vw] text-[7vw]">ADITYA SHARMA</h1>
          </motion.div>
        </div>
        <div id = "scrolldiv1" className= "items-center h-[15vh] bg-gradient-to-b from-[rgba(0,0,0,0)] to-zinc-800 dark:to-neutral-500">
          <button  className = "w-full h-full duration-300 hover:bg-[rgba(0,0,0,0.1)] dark:hover:bg-[rgba(255,255,255,0.1)] flex justify-center items-center" onClick = {scrollToFrame} onMouseEnter = {onScrollHover1} onMouseLeave={onScrollHover1} id = "scrolltoframe1">
            {scrollHover1 && <img className = "h-[50%]" src = {scrollimage}/>}
          </button>
        </div>
      </div>
      <div id="frame2" className = "flex flex-col dark:bg-[url('./images/frame2.jpg')] bg-white bg-cover font-gruppo dark:text-white">
        <div id = "frame2header" className = "h-[20vh] flex justify-center items-center">
          <h2 className = "text-[5vw]">WELCOME TO MY WEB-PAGE!</h2>
        </div>
        <div id ="mainframe2" className = "py-8 w-full flex max-sm:flex-col justify-center align-center">
          <div id = "frame2flash" className = "rounded-xl w-full max-sm:h-full flex items-center justify-center border border-black dark:border-white">
            Slideshow
            <Slideshow darkMode = {darkMode}/>
          </div>
          <div id = "frame2content" className="w-full p-8 flex items-center justify-center">
            <article className = "text-center rounded-xl bg-zinc-500/50 dark:bg-neutral-500/50 flex flex-col p-8 justify-evenly">
              <header id = "aboutheader">
                <h2 className = "text-[5vw]">ABOUT</h2>
              </header>
              <div id = "aboutcontent" className = "max-sm:text-[2.5vw] text-[1.5vw]">
                <p>
                  Mera naam Aditya  Sharma hai. Meri do taange hain.
                  Meri do aankhein hain jo mujhe majnu bhaiiya ne di thi.
                  Mere ko paisa chahiye.... dher saara paisa chahiye. job chahiye - hiranmayi <br></br><br></br>
                  paisa do. paisa chahiye gta 6 se pehle 
                  placement chahiye. music club. thenga
                </p>  
              </div>
            </article>
          </div>
        </div>
        <div id = "scrolldiv2" className= "items-center h-[15vh] bg-gradient-to-b from-[rgba(0,0,0,0)] to-zinc-800 dark:to-neutral-500">
          <button className = "w-full h-full duration-300 hover:bg-[rgba(0,0,0,0.1)] dark:hover:bg-[rgba(255,255,255,0.1)] flex justify-center items-center" onClick = {scrollToFrame} onMouseEnter = {onScrollHover2} onMouseLeave={onScrollHover2} id = "scrolltoframe2">
            {scrollHover2 && <img className = "h-[50%]" src = {scrollimage}/>}
          </button>
        </div>
      </div>
      {<Projects darkMode = {darkMode}/>}
      {<Contact darkMode = {darkMode}/>}
    </div>
  )
}

export default App
