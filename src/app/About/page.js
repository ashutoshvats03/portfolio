"use client"
import React, { useState } from 'react';
import TechCarousel from '../components/Carousel';
import { InfoIcon } from 'lucide-react';

function About() {
    const [info, setInfo] = useState(false);
    const languages = [
        { "name": "JavaScript", "link": "js.png" },
        { "name": "Python", "link": "python.png" },
        { "name": "Java", "link": "java.png" },
    ];
    const frontend = [
        { "name": "HTML", "link": "html.png" },
        { "name": "CSS", "link": "css.png" },
        { "name": "TailwindCSS", "link": "tailwind.jpeg" },
        { "name": "React", "link": "react.png" },
        { "name": "Redux", "link": "redux.png" },
        { "name": "Next.js", "link": "nextjs.jpeg" },
    ];
    const backend = [
        { "name": "Node.js", "link": "nodejs.png" },
        { "name": "Express.js", "link": "expressjs.png" },
        { "name": "Django", "link": "django.png" },
    ];
    const database = [
        { "name": "MongoDB", "link": "mongoDB.png" },
        { "name": "PostgreSQL", "link": "postgre.png" },
    ];
    const devops = [
        { "name": "AWS", "link": "aws.png" },
        { "name": "Docker", "link": "docker.png" },
    ]
    const techStack = [
        ...languages,
        ...frontend,
        ...backend,
        ...database,
        ...devops
    ];
    const bio = [
        "I'm Ashutosh Vats, a developer with a strong focus on backend technologies. I leverage my problem-solving skills and logical thinking to create scalable, efficient, and cost-effective solutions for organizations. I am passionate about robust automation and deployment, always seeking to optimize processes for desirable results. My knowledge of system design guides me in selecting the right tools and technologies, which I then implement using my tech stack—and I'm always eager to learn new ones when needed.",
    ];

    return (
        <div className="container mx-auto p-4 md:p-8 sm:p-4">
            <h1 className='text-4xl font-bold mb-2'>
                About Me
                <div className="my-2 border-b-4  w-16"></div>
            </h1>
            <div className="summary mt-5 leading-relaxed space-y-4">
                {bio.map((paragraph, index) => (
                    <p key={index} className=' text-gray-400'>{paragraph}</p>
                ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 flex gap-5 items-center">
                <div>Frameworks and Technologies I Know</div>
                <InfoIcon
                    onClick={() => setInfo(!info)}
                    size={25}
                />
            </h2>
            {/* <TechCarousel techStack={frontend} />
                <TechCarousel techStack={backend} />
                <TechCarousel techStack={database} />
                <TechCarousel techStack={devops} />
                <TechCarousel techStack={languages} /> */}
            <div className="relative ">
                {!info && <TechCarousel techStack={techStack} />}
                <div className={`absolute top-0  px-3 py-2 flex flex-col gap-1 ${info ? 'block' : 'hidden'}`}>
                    <div className='flex gap-2 font-bold items-center'>
                        <div className=''>Languages :</div>
                        {languages.map((item, index) => (
                            <div key={index} className=' text-gray-500'>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-2 font-bold items-center'>
                        <div className=''>Frontend :</div>
                        {frontend.map((item, index) => (
                            <div key={index} className=' text-gray-500'>
                                <p>{item.name} </p>
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-2 font-bold items-center'>
                        <div className=''>Backend :</div>
                        {backend.map((item, index) => (
                            <div key={index} className=' text-gray-500'>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-2 font-bold items-center'>
                        <div className=''>Database :</div>
                        {database.map((item, index) => (
                            <div key={index} className=' text-gray-500'>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex gap-2 font-bold items-center'>
                        <div className=''>DevOps :</div>
                        {devops.map((item, index) => (
                            <div key={index} className=' text-gray-500'>
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;