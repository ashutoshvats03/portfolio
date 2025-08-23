import React from 'react';

function About() {
    const techStack = [
        "JavaScript", "Nodejs", "Expressjs", "Tailwindcss",
        "React", "Redux", "Nextjs", "MongoDB", "PostgreSql",
        "Python", "Django", "AWS", "Docker",
    ];

    const summaryText = (
        <>
            <div>

            </div>
            <p>
                <b className='text-xl'> My Story ✨</b>
                I'm Ashutosh Vats, a passionate developer who believes engineering is all about learning and solving real-world problems. I get a thrill from building solutions that make a real impact, and my work is a testament to that passion. With an unquenchable curiosity for new technologies and a drive to innovate, I’m always searching for opportunities to experiment and contribute to projects that truly matter. 🚀
            </p>
            <br />

            <p>
                <b className='text-xl'>My Journey 🗺️</b>
                My journey began with a hands-on Software Developer Internship at Spatialty.ai, where I took the lead in creating a web application prototype and an admin dashboard using Next.js and Django. My work wasn't just about code—it was about solving complex challenges. I implemented secure JWT authentication and integrated Leaflet maps and Chart.js for visualization and analytics. I even used Redis caching to boost system efficiency by a staggering 99%. Beyond this, I've built personal projects like a real-time chat app and a news-scraping tool, showcasing my proficiency with technologies like Next.js, Express.js, Docker, and AWS.
            </p>
            <br />





            <p><b className='text-xl'>My Foundations 🛠️</b>
                I'm grounded in a strong skill set that allows me to bring ideas to life. From my foundation in languages like C, Java, and Python to my experience with frameworks like React and Django, I'm equipped to handle a wide range of projects. My toolkit includes everything from JWT and Redis to Docker and AWS, ensuring I'm prepared for modern development challenges. This blend of technical skills and a passion for problem-solving is what defines me as a developer</p>

        </>
    );

    return (
        <div className='flex w-full p-4 md:p-8 sm:p-4 flex-col gap-7'>
            <h1 className='text-4xl font-bold'>
                About Me
                <div className="my-4 border-3 border-amber-300 w-16 rounded-full"></div>
            </h1>
            <div className="summary md:text-sm sm:text-xs">
                {summaryText}
            </div>
            <div className="doing text-3xl font-bold">
                Framework and Tech that I Know
            </div>
            <div className="techs flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                    <div
                        key={index}
                        className="tech border-2 border-white rounded-full px-4 py-2 mt-3 text-lg font-semibold"
                    >
                        {tech}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;