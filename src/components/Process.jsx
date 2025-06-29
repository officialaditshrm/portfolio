import backend from '/gallery/backend.png'
import frontend from '/gallery/frontend.png'
import ml from '/gallery/ml.png'
import cse from '/gallery/cse.png'
import deploy from '/gallery/deploy.png'
import database from '/gallery/database.jpg'

const groups = [
    {
        name : 'Backend Development',
        description: 'Building REST APIs to perform CRUD operations using Express.js, HTTP and Node.js',
        img: backend
    },
    {
        name : 'Frontend Development',
        description: 'Responsive Web Design and API Integration using React.js and TailwindCSS and other Javascript based frameworks.',
        img: frontend
    },
    {
        name : 'Machine Learning & Data Science',
        description: "Making real world dataset predictions using Python Libraries and perform EDA on large datasets.",
        img: ml
    },
    {
        name : 'Computer Science Fundamentals',
        description: 'Implementing the concepts learnt from OOP and DSA strategically to deploy more realiable real world applications',
        img: cse
    },
    {
        name: 'Deployment',
        description: 'Exploring multiple platforms to find the best suited deployment environment for developed websites. Stack used so far: Vercel, Render, GH Pages.',
        img: deploy
    },
    {
        name: 'Databases & Storage',
        description: 'Finding organized ways of storing real world data with better security and reliability. Stack used so far: Mongo DB, SQLPlus, Amazon S3.',
        img: database
    }
]


function Process () {
    return (
        <div className = "flex-col font-gruppo flex items-center lg:p-24 md:p-16 sm:p-8 p-4 gap-12 dark:text-white">
            <div id = "head" className = "lg:text-5xl md:text-3xl text-2xl max-sm:w-full max-md:w-4/5 w-3/5 font-extrabold text-center">
            My Core Skills and How I Apply Them
            </div>
            <div id = "group" className = "grid max-lg:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-10">
                {groups.map((group, idx) => (
                    <div key = {idx} className = "relative overflow-hidden rounded-xl dark:bg-[rgba(30,30,30)] flex flex-col bg-[rgba(247,247,247,1)] gap-4 shadow-[0_0_10px_1px_rgba(0,0,0,0.5)]">
                        <div 
                        className = {`p-3 pb-2 items-center flex flex-col justify-end rounded-t-xl h-[30vh]`}
                        style = {group.img ? { backgroundImage: `url(${group.img})`, backgroundSize: 'cover', backgroundPosition: 'center'} : {}}>
                        </div>
                        <h1 className = "px-6 font-extrabold text-lg">
                            {group.name}
                        </h1>
                        <div className = "flex h-2 flex-row-reverse gap-4 mx-6 max-md:mx-10">
                            <div className = "bg-[rgba(255,62,84)] w-1/4 rounded-full"></div>
                        </div>
                        <p className = "mx-6 mb-6">
                            {group.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Process