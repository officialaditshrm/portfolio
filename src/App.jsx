import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import spcode from './images/spcode.png'
import Slideshow from './components/Slideshow.jsx'
import scrollimage from './images/scroll.png'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import { motion } from 'framer-motion'


function App() {
  const [scrollHover1, setScrollHover1] = useState(false)
  const [scrollHover2, setScrollHover2] = useState(false)

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
    <>
      {<Header/>}
      <div id="frame1">
        <div id ="mainframe1">
          <motion.div id = "name">
            <img src = {spcode} onClick = {spClick} id= "spcode" alt= "blue jean" />
            <h1>ADITYA SHARMA</h1>
          </motion.div>
        </div>
        <div id = "scrolldiv1">
          <button onClick = {scrollToFrame} onMouseEnter = {onScrollHover1} onMouseLeave={onScrollHover1} id = "scrolltoframe1">
            {scrollHover1 && <img src = {scrollimage}/>}
          </button>
        </div>
      </div>
      <div id="frame2">
        <div id = "frame2header">
          <h2>WELCOME TO MY WEB-PAGE!</h2>
        </div>
        <div id ="mainframe2">
          <div id = "frame2flash">
            <Slideshow/>
          </div>
          <div id = "frame2content">
            <article>
              <header id = "aboutheader">
                <h2>ABOUT</h2>
              </header>
              <div id = "aboutcontent">
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
        <div id = "scrolldiv2">
          <button onClick = {scrollToFrame} onMouseEnter = {onScrollHover2} onMouseLeave={onScrollHover2} id = "scrolltoframe2">
            {scrollHover2 && <img src = {scrollimage}/>}
          </button>
        </div>
      </div>
      {<Projects/>}
      {<Contact/>}
    </>
  )
}

export default App
