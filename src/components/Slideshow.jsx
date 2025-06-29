import Slider from 'react-slick'
import webdevelopment from "../images/webdevelopment.jpg"
import machinelearning from "../images/machinelearning.jpg"
import artificialintelligence from '../images/artificialintelligence.jpg'
import languages from "../images/languages.jpg"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <button
            className={`${className} !left-4 z-10`}
            style={{ ...style, display: "block", borderRadius: "50%" }}
            onClick={onClick}
            aria-label="Previous"
        />
    )
}

function NextArrow(props) {
    const { className, style, onClick } = props
    return (
        <button
            className={`${className} !right-4 z-10`}
            style={{ ...style, display: "block", borderRadius: "50%" }}
            onClick={onClick}
            aria-label="Next"
        />
    )
}

function Slideshow({darkMode}) {

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }
    return (
            <Slider className = "size-full justify-center mb-20" {...settings} >
                {skills.map((slide) => (
                    <div className = "h-[60vh] max-sm:h-[50vh] rounded-t-xl">
                        <div style = {{backgroundImage : `url(${slide.img})`}} className = {`bg-cover bg-no-repeat text-white rounded-xl border-black size-full `}>
                            <div className = "backdrop-blur-[1.5px] rounded-xl p-4 size-full flex gap-5 flex-col justify-evenly items-center">
                                <h1 className = "font-extrabold text-center max-sm:text-xl text-4xl">{slide.name}</h1>
                                <div className = "w-full h-[60%] flex flex-col">
                                    <h2 className = "font-extrabold text-sm md:text-md lg:text-lg text-center flex-1">Tech Stack:</h2>
                                    <ol className ="text-center w-full h-[80%] flex text-xs md:text-sm lg:text-md flex-col flex-wrap px-10">
                                        {slide.techstack.map((tech, index) => (
                                            <li key = {index}>{tech.name}</li>
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