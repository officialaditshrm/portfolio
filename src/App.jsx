import { useState, useRef, useEffect } from 'react'
import Header from './components/Header.jsx'
import spcode from './images/spcode.png'
import Slideshow from './components/Slideshow.jsx'
import scrollimage from './images/scroll.png'
import scrolllight from './images/scrolllight.png'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import { motion } from 'framer-motion'
import spcodeLight from './images/spcodeLight.png'
import Process from './components/Process.jsx'
<comp></comp>


function App() {
  const [scrollHover2, setScrollHover2] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const homeRef = useRef()
  const [isVisible, setIsVisible] = useState(false)

  const contactRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({behavior : 'smooth'})
  }
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({behavior : 'smooth'})
  }
  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({behavior : 'smooth'})
  }
  const scrollToHome = () => {
    homeRef.current?.scrollIntoView({behavior : 'smooth'})
  }


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setIsVisible(entry.intersectionRatio >= 0.3)
    }, 
    {threshold: 0.3})
    observer.observe(homeRef.current)
    return () => observer.disconnect()
  }, [])

  const onScrollHover1 = () => {
    setScrollHover2((prev) => !prev)
  }

  const scrollToFrame = () => {
    window.scrollBy({top: 300, left: 0, behavior: 'smooth'})
  }

  const spClick = () => {
    window.open("https://open.spotify.com/track/19qeqEplt79YKey4DWgwUR?si=8587fa40446c455c", "_blank")
  }


  return (
    <div className = {`${darkMode ? "dark bg-[url('./images/perks.jpg')]":"bg-[url('./images/perkslight.jpg')]"} bg-repeat `}>
      <Header 
      darkMode = {darkMode} 
      setDarkMode = {setDarkMode} 
      isVisible = {isVisible} 
      scrollToContact={scrollToContact} 
      scrollToAbout={scrollToAbout}
      scrollToProjects={scrollToProjects}
      scrollToHome={scrollToHome}/>
      <div 
        id="frame1" 
        ref = {homeRef}
        className = "h-screen pb-5 flex flex-col justify-center bg-gradient-to-b from-neutral-900/0 to-neutral-900/30">
        <div id ="mainframe1" className="h-[85%] flex flex-col justify-end">
          <div id = "name" className = "sm:pl-5 h-max flex flex-col max-sm:items-center max-sm:h-full max-sm:justify-center w-full justify-end">
            <img src = {`${darkMode ? spcode : spcodeLight}`} className = "max-sm:w-[50%] w-[25%] h-[20%] sm:dark:h-auto object-cover max-sm:dark:object-contain hover:translate-x-[8px] hover:translate-y-[4px] hover:cursor-pointer hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.5)] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.5)] dark:hover:bg-[rgba(30,30,30)] hover:bg-[rgba(235,235,235)] rounded-xl" onClick = {spClick} id= "spcode" alt= "blue jean" />
            <h1 className = "font-gruppo dark:text-white max-sm:text-[9vw] text-[5vw]">ADITYA SHARMA</h1>
          </div>
        </div>
        <div id = "scrolldiv1" className= "h-[15vh] flex justify-center">
          <button  className = "w-1/4 w-1/4 h-full h-full rounded-xl duration-300  flex justify-center items-center hover:translate-x-[8px] hover:translate-y-[-4px] hover:cursor-pointer hover:shadow-[-8px_4px_5px_0_rgba(0,0,0,0.5)] dark:hover:shadow-[-8px_4px_5px_0_rgba(255,255,255,0.5)] dark:hover:bg-[rgba(30,30,30)] hover:bg-[rgba(235,235,235)]" onClick = {scrollToFrame} onMouseEnter = {onScrollHover1} onMouseLeave={onScrollHover1} id = "scrolltoframe1">
            <img className = "h-[50%]" src = {darkMode ? scrollimage : scrolllight}/>
          </button>
        </div>
      </div>
      <div id="frame2" ref = {aboutRef} className = "flex flex-col pt-5 font-gruppo dark:text-white bg-gradient-to-t from-neutral-900/0 to-neutral-900/30">
        <div id = "frame2header" className = "flex justify-center items-center">
          <h2 className = "text-[5vw] w-[80%] text-center font-gugi h-full border-2 border-x-black/0 border-b-black/0 dark:border-t-white pt-5 border-t-black font-bold">WELCOME TO MY WEB-PAGE!</h2>
        </div>
        <div id ="mainframe2" className = "p-8 max-sm:p-4 w-full flex max-sm:flex-col-reverse max-sm:gap-10 justify-center items-start">
          <div id = "frame2flash" className = "flex flex-col items-center rounded-xl sm:w-[50%] w-full">
            <Slideshow darkMode = {darkMode}/>
          </div>
          <div id = "frame2content" className="w-full sm:px-8 flex items-center justify-center">
            <article className = "text-center hover:scale-105 rounded-xl bg-neutral-100 dark:bg-neutral-700 backdrop-blur-md z-0 flex flex-col p-8 justify-evenly">
              <header id = "aboutheader">
                <h2 className = "max-sm:text-xl max-md:text-2xl text-3xl font-bold">ABOUT</h2>
              </header>
              <div id = "aboutcontent" className = "max-sm:text-sm">
                <p>
                  I am a 4th-year B.Tech student in Computer Science with a specialization in Data Science at Vellore Institute of Technology, Vellore. Passionate about Web Development, I have hands-on experience with HTML, CSS, JavaScript, Django and React.js. I am also keenly interested in Machine Learning and have a solid grasp of its fundamentals.
                  I am proficient in multiple programming languages, including Python, Java, and C++, and I continuously seek opportunities to expand my technical skill set.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div id = "scrolldiv1" className= "h-[15vh] flex justify-center">
          <button  className = "w-1/4 h-full border-2 border-x-white/0 border-t-white/0 dark:border-b-white border-b-black dark:hover:border-b-white/0 hover:border-b-black/0 rounded-xl duration-300  flex justify-center items-center hover:translate-x-[8px] hover:translate-y-[-4px] hover:cursor-pointer hover:shadow-[-8px_4px_5px_0_rgba(0,0,0,0.5)] dark:hover:shadow-[-8px_4px_5px_0_rgba(255,255,255,0.5)] dark:hover:bg-[rgba(30,30,30)] hover:bg-[rgba(235,235,235)]" onClick = {scrollToFrame} onMouseEnter = {onScrollHover1} onMouseLeave={onScrollHover1} id = "scrolltoframe1">
            <img className = "h-[50%]" src = {darkMode ? scrollimage : scrolllight}/>
          </button>
        </div>
      </div>
      <div>
        <Process />
      </div>
      <div ref = {projectsRef}>
        {<Projects darkMode = {darkMode}/>}
      </div>
      <div ref = {contactRef}>
        {<Contact darkMode = {darkMode}/>}
      </div>
    </div>
  )
}

export default App
