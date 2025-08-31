import Link from 'next/link'
import React from 'react'

function About() {
  const projects = [
    {"link":"https://github.com/ashutoshvats03/chat-app.git" ,"title": "Chat-app", "tech": "Nextjs , Express , Socket.io , AWS-EC2 , Rabbitmq , Docker , Multer", "summary": "Build a scalabe and authenticated chatapp" },
    {"link":"https://github.com/ashutoshvats03/scraped_news.git", "title": "Scrapy_app", "tech": "Next.js , django , selenium , beautifulSoup , DRF , ollama , misteral:instruct", "summary": "Authentic news without media bias" },
   ]
  return (
    <div className='flex   w-full justify-center p-8 flex-col gap-7'>
      <h1 className='text-4xl font-bold'>
        Portfolio and Projects
        <div className="my-4 border-3 border-amber-300 w-16 rounded-full"></div>
      </h1>
      <div className="flex flex-col  gap-5   ">
        {projects.map((project, index) => (
          <Link className='cursor-pointer' key={index} href={`${project.link}`}>
            <div className="w-full  project border-2 border-white rounded-md p-4">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <p className="text-sm text-gray-400">{project.tech}</p>
              <p className="summary">{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default About


