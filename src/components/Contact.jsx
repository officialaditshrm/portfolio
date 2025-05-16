import "./Contact.css"
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'


function Contact() {

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
        <div id = "Contact">
            <div id = "contactheader">
                <h1>CONTACTme</h1>
            </div>
            <div id = "contactcontent">
                <div id = "socialbuttons">
                    <button id = "twitter" onClick = {contactButtonClick}><img width= "100%" src = {twitter}/></button>
                    <button id = "instagram" onClick = {contactButtonClick}><img width= "100%" src = {instagram}/></button>
                    <button id = "linkedin" onClick = {contactButtonClick}><img width= "100%" src = {linkedin}/></button>
                </div>
                <div id = "messageui">
                    <fieldset>
                        <legend>Drop an eMail</legend>
                        <form onClick = {submit}>
                            <div id ="smalltextbox">
                                <label>Name:</label><input type="text" className = "smalltext"/>
                                <label>Organization:</label><input type = "text" className = "smalltext"/>
                            </div>
                            <div id = "contactbox">
                                <label>Contact:</label><input type = "text" id = "contactinput"/>
                            </div>
                            <div id = "messagebox">
                                <label>Message:</label><textarea id = "messageinput"/>
                            </div>
                            <div id = "submitbox">
                                <button id = "sendbutton" onClick={submit}>SEND</button>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}

export default Contact