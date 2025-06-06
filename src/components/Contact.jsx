import twitter from '../images/twitter.png'
import twitterLight from '../images/twitterLight.png'
import instagram from '../images/instagram.png'
import instagramLight from '../images/instagramLight.png'
import linkedin from '../images/linkedin.png'
import linkedinLight from '../images/linkedinLight.png'
import Footer from './Footer'

import { useRef } from 'react'

function Contact({darkMode}) {
    const formRef = useRef(null)

    const contactButtonClick = (event) => {
        const id = event.currentTarget.id
        if (id == "twitter"){
            window.open("https://twitter.com/aditshrm", "_blank")
        }
        if (id == "instagram"){
            window.open("https://instagram.com/aditya.sharma.117", "_blank")
        }
        if (id == "linkedin"){
            window.open("https://linkedin.com/in/aditshrm", "_blank")
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = formRef.current
        const name = form.elements['name'].value
        const organization = form.elements['organization'].value
        const email = form.elements['email'].value
        const message = form.elements['message'].value

        const emailRegex = /^[\w\.-]+@([\w-]+\.)+[\w-]{2,}$/
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.")
            return
        }

        const data = { name, organization, email, message }

        const response = await fetch("https://formspree.io/f/xzzgpeqy", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            alert("Message sent!")
            form.reset()
        } else {
            alert("There was an error. Please try again.")
        }
    }


    return(
        <div id = "Contact" className = " flex flex-col">
            <div id = "contactheader" className = "flex-1 flex justify-left max-sm:justify-center font-gugi dark:text-white font-extrabold items-center p-8">
                <h1 className = "text-[5vw] max-sm:text-[7vw]">CONTACTme</h1>
            </div>
            <div id = "contactcontent" className = "flex max-sm:flex-col pb-10">
                <div id = "socialbuttons" className = "flex-1 flex sm:flex-col justify-center items-center max-sm:pb-5 max-sm:justify-evenly">
                    <button id = "twitter" 
                        className = "w-[12vw] max-sm:w-[18vw] hover:translate-x-[8px] hover:translate-y-[4px] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.5)] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.5)] rounded-xl hover:border border-neutral-500 hover:border-neutral-500"
                        onClick = {contactButtonClick}>
                        <img src = {`${darkMode ? twitter : twitterLight}`}/>
                    </button>
                    <button id = "instagram" 
                        className = "w-[12vw] max-sm:w-[18vw] hover:translate-x-[8px] hover:translate-y-[4px] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.5)] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.5)] rounded-xl hover:border border-neutral-500 hover:border-neutral-500" 
                        onClick = {contactButtonClick}>
                        <img src = {`${darkMode ? instagram : instagramLight}`}/>
                    </button>
                    <button id = "linkedin" 
                        className = "w-[12vw] max-sm:w-[18vw] hover:translate-x-[8px] hover:translate-y-[4px] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.5)] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.5)] rounded-xl hover:border border-neutral-500 hover:border-neutral-500" 
                        onClick = {contactButtonClick}>
                        <img src = {`${darkMode ? linkedin : linkedinLight}`}/>
                    </button>
                </div>
                <div id = "messageui" className = " font-gugi flex-1 flex-col px-10 items-center justify-center">
                    <fieldset className = "dark:bg-neutral-800/70 bg-neutral-100/70 backdrop-blur-md px-10 py-5 rounded-xl flex flex-col justify-center dark:text-white shadow-[0_0_10px_0.5px_rgba(0,0,0,0.5)]">
                        <h1 className = "text-[2.5vw] py-5 text-center max-sm:text-[3.5vw]">Drop a Message</h1>
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="flex flex-col items-center gap-6 text-left max-sm:gap-4 w-full"
                        >
                            <div className="w-full flex flex-1 flex-col gap-3">
                                <label>Name:</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    className="bg-neutral-900/70 dark:bg-neutral-200/70 max-sm:text-[3.6vw] w-3/4 h-[7vh] p-2 text-[3vh] rounded-md border-2 border-neutral-950 dark:border-neutral-500"
                                />
                            </div>
                            <div className="w-full flex flex-1 flex-col gap-3">
                                <label>Organization:</label>
                                <input
                                    name="organization"
                                    type="text"
                                    required
                                    className="bg-neutral-900/70 dark:bg-neutral-200/70 max-sm:text-[3.6vw] w-3/4 h-[7vh] p-2 text-[3vh] rounded-md border-2 border-neutral-900 dark:border-neutral-500"
                                />
                            </div>
                            <div className="w-full flex flex-1 flex-col gap-3">
                                <label>Email:</label>
                                <input
                                    name="email"
                                    type="text"
                                    required
                                    className="bg-neutral-900/70 dark:bg-neutral-200/70 max-sm:text-[3.6vw] w-3/4 h-[7vh] p-2 text-[3vh] rounded-md border-2 border-neutral-900 dark:border-neutral-500"
                                />
                            </div>
                            <div className="w-full flex-1 gap-3 flex flex-col">
                                <label>Message:</label>
                                <textarea
                                    name="message"
                                    required
                                    className="p-2 dark:bg-neutral-200/70 bg-neutral-900/70 max-sm:text-[3.6vw] rounded-md border-2 border-neutral-900 dark:border-neutral-500 h-[20vh]"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    id="sendbutton"
                                    className="hover:translate-x-[8px] hover:translate-y-[4px] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.5)] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.5)] py-4 rounded-lg bg-zinc-800 text-white dark:text-black dark:bg-neutral-200 px-8 border border-neutral-500"
                                >
                                    SEND
                                </button>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact