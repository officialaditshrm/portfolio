import { useState } from 'react'
import "./Header.css"
import moon from "../images/moon.png"


function Header() {

    return (
        <header id = "mainheader">
            <div id = "buttons">
                <button>Socials</button>
                <button>Projects</button>
                <button>GitHub</button>
                <button>Contact</button>
            </div>
            <div id= "darkmode">
                <button id = "darkmodetoggle"><img src= {moon} height="100%" width="100%"/></button>
            </div>
        </header>
    )
}

export default Header