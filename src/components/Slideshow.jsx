import Slider from 'react-slick'
import webdevelopment from "../images/webdevelopment.jpg"
import machinelearning from "../images/machinelearning.jpg"
import artificialintelligence from '../images/artificialintelligence.jpg'
import languages from "../images/languages.jpg"
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
                        <div style = {{backgroundImage : `url(${slide.img})`}} className = {`bg-cover bg-no-repeat text-white rounded-b-xl border-black size-full `}>
                            <div className = "backdrop-blur-[1.5px] size-full flex flex-col justify-center items-center">
                                <h1 className = "font-extrabold text-4xl">{slide.name}</h1>
                                <div className = "w-full h-[60%] flex flex-col">
                                    <h2 className = "font-extrabold text-lg text-center flex-1">Tech Stack:</h2>
                                    <ol className ="text-center w-full h-[80%] flex flex-1 flex-col flex-wrap px-10">
                                        {slide.techstack.map((tech) => (
                                            <li>{tech.name}</li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
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
            img: webdevelopment,
            techstack: [
                {name: "HTML"},
                {name: "React.js"},
                {name: "Node.js"},
                {name: "Express.js"},
                {name: "Mongo DB"},
                {name: "Tailwind CSS"}
            ]
        },
        {
            sno: 2,
            name: "Machine Learning",
            img: machinelearning,
            bg: "../images/webdevelopment.jpg",
            techstack: [
                {name: "Supervised ML"},
                {name: "Unsupervised ML"},
                {name: "Numpy"},
                {name: "Sklearn"},
                {name: "MatPlotLib"},
                {name: "Pandas"}
            ]
        },
        {
            sno: 3,
            name: "Artificial Intelligence",
            img: artificialintelligence,
            techstack: [
                {name: "Natural Language Processing"},
                {name: "RoBERTa"},
                {name: "Computer Vision"},
                {name: "Hugging Face"},
                {name: "TLDK"}
            ]
        },
        {
            sno: 4,
            name: "Programming Languages",
            img: languages,
            techstack: [
                {name: "Java"},
                {name: "Python"},
                {name: "C++"},
                {name: "C"},
                {name: "JavaScript"}
            ]
        },
    ]

export default Slideshow