import Slider from 'react-slick'
import contact from "../images/contact.jpg"
import contactdark from "../images/contactdark.jpg"
import perks from '../images/perks.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Slideshow({darkMode}) {
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToshow: 1,
        slidesToScroll: 1
    }
    return (
            <Slider className = "size-full rounded-xl justify-center" {...settings} >
                {skills.map((slide) => (
                    <div className = "h-[50vh] rounded-b-xl">
                        <div className = {`text-white rounded-b-xl border-black ${slide.color} h-full flex flex-col items-center text-center justify-center`}>
                            <h1 className = " bottom-10 font-extrabold text-4xl">{slide.name}</h1>
                            Tech Stack:
                            <ol className ="text-left">
                                {slide.techstack.map((tech) => (
                                    <li>{tech.name}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                ))}
            </Slider>
    )
}

const skills = [
        {
            sno: 1,
            name: "Web Development",
            img: contact,
            color: 'bg-red-950',
            techstack: [
                {name: "Natural Language Processing"},
                {name: "RoBERTa"},
                {name: "Computer Vision"},
                {name: "Hugging Face"},
                {name: "TLDK"}
            ]
        },
        {
            sno: 2,
            name: "Machine Learning",
            img: contactdark,
            color: 'bg-blue-950',
            techstack: [
                {name: "Natural Language Processing"},
                {name: "RoBERTa"},
                {name: "Computer Vision"},
                {name: "Hugging Face"},
                {name: "TLDK"}
            ]
        },
        {
            sno: 3,
            name: "Artificial Intelligence",
            img: contactdark,
            color: 'bg-green-950',
            techstack: [
                {name: "Natural Language Processing"},
                {name: "RoBERTa"},
                {name: "Computer Vision"},
                {name: "Hugging Face"},
                {name: "TLDK"}
            ]
        },
    ]

export default Slideshow