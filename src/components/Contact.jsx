import twitter from '../images/twitter.png'
import twitterLight from '../images/twitterLight.png'
import instagram from '../images/instagram.png'
import instagramLight from '../images/instagramLight.png'
import linkedin from '../images/linkedin.png'
import linkedinLight from '../images/linkedinLight.png'

function Contact({darkMode}) {

    const contactButtonClick = (event) => {
        const id = event.currentTarget.id
        if (id == "twitter"){
            window.open("https://twitter.com/aditshrm", "_blank")
        }
        if (id == "instagram"){
            window.open("https://instagram.com/aditshrm", "_blank")
        }
        if (id == "linkedin"){
            window.open("https://linkedin.com/in/aditshrm", "_blank")
        }
    }

    const submit = (event) => {
        event.preventDefault()
    }
    return(
        <div id = "Contact" className = "bg-amber-100 dark:bg-amber-950 flex flex-col">
            <div id = "contactheader" className = "flex-1 flex justify-left max-sm:justify-center font-gugi dark:text-white font-extrabold items-center p-8">
                <h1 className = "text-[5vw] max-sm:text-[7vw]">CONTACTme</h1>
            </div>
            <div id = "contactcontent" className = "flex max-sm:flex-col">
                <div id = "socialbuttons" className = "flex-1 flex sm:flex-col justify-evenly items-center">
                    <button id = "twitter" 
                        className = "w-[15vw] hover:translate-x-[8px] hover:translate-y-[4px] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.5)] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.5)] rounded-xl hover:border border-neutral-500 hover:border-neutral-500"
                        onClick = {contactButtonClick}>
                        <img src = {`${darkMode ? twitter : twitterLight}`}/>
                    </button>
                    <button id = "instagram" 
                        className = "w-[15vw] hover:translate-x-[8px] hover:translate-y-[4px] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.5)] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.5)] rounded-xl hover:border border-neutral-500 hover:border-neutral-500" 
                        onClick = {contactButtonClick}>
                        <img src = {`${darkMode ? instagram : instagramLight}`}/>
                    </button>
                    <button id = "linkedin" 
                        className = "w-[15vw] hover:translate-x-[8px] hover:translate-y-[4px] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.5)] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.5)] rounded-xl hover:border border-neutral-500 hover:border-neutral-500" 
                        onClick = {contactButtonClick}>
                        <img src = {`${darkMode ? linkedin : linkedinLight}`}/>
                    </button>
                </div>
                <div id = "messageui" className = "font-gugi p-10 flex-1 flex-col items-center justify-center">
                    <fieldset className = "border-2 p-10 border-black dark:border-amber-100 rounded-xl flex flex-col justify-center dark:text-white items-center">
                        <legend className = "px-2 mr-2 text-[2.5vw] text-right">Drop a Message</legend>
                        <form className = "flex flex-col gap-8 max-sm:gap-4 text-center w-full" onClick = {submit} >
                            <div className = "w-full flex flex-1 justify-center gap-3 items-center">
                                <label>Name:</label><input type="text" className = "dark:bg-neutral-900/70 max-sm:text-[2.4vw] max-sm:w-[36vw] w-[20vw] h-[7vh] p-2 text-[3vh] rounded-md border border-neutral-500"/>
                            </div>
                            <div className = "w-full flex flex-1 justify-center gap-3 items-center">
                                <label>Organization:</label><input type = "text" className = "dark:bg-neutral-900/70 max-sm:text-[2.4vw] max-sm:w-[36vw] w-[20vw] h-[7vh] p-2 text-[3vh] rounded-md border border-neutral-500"/>
                            </div>
                            <div className = "w-full flex flex-1 justify-center gap-3 items-center">
                                <label>Contact:</label><input className = "dark:bg-neutral-900/70 max-sm:text-[2.4vw] max-sm:w-[36vw] w-[20vw] h-[7vh] p-2 text-[3vh] rounded-md border border-neutral-500" type = "text" id = "contactinput"/>
                            </div>
                            <div className = "w-full flex flex-col items-center justify-center">
                                <label>Message:</label><textarea className = "dark:bg-neutral-900/70 max-sm:text-[2.4vw] m-8 rounded-md border w-full border-neutral-500 h-[20vh]" id = "messageinput"/>
                            </div>
                            <div>
                                <button id = "sendbutton" className = "hover:translate-x-[8px] hover:translate-y-[4px] hover:shadow-[-8px_-4px_5px_0_rgba(0,0,0,0.5)] dark:hover:shadow-[-8px_-4px_5px_0_rgba(255,255,255,0.5)] py-4 rounded-lg bg-zinc-800 text-white dark:text-black dark:bg-neutral-200 px-8 border border-neutral-500" onClick={submit}>SEND</button>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default Contact