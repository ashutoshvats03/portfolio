import Link from 'next/link'
import React from 'react'

function About() {
  const blogs = [
    {"link":"https://github.com/ashutoshvats03/chat-app.git" ,"title": "Chat-app", "tech": "Nextjs , Express , Socket.io , AWS-EC2 , Rabbitmq , Docker , Multer", "summary": "Build a scalabe and authenticated chatapp" },
    {"link":"https://github.com/ashutoshvats03/scraped_news.git", "title": "Scrapy_app", "tech": "Next.js , django , selenium , beautifulSoup , DRF , ollama , misteral:instruct", "summary": "Authentic news without media bias" },
   ]
  return (
    <div className='flex   w-full justify-center p-8 flex-col gap-7'>
      <h1 className='text-4xl font-bold'>
        Portfolio and Projects
        <div className="my-4 border-3 border-amber-300 w-16 rounded-full"></div>
      </h1>
      <div className="flex  flex-wrap   gap-5 justify-between items-center  ">
        {blogs.map((blog, index) => (
          <Link className='cursor-pointer' key={index} href={`${blog.link}`}>
            <div className="w-100 h-70 blog border-2 border-white rounded-md p-4">
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p className="text-sm text-gray-400">{blog.tech}</p>
              <p className="summary">{blog.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default About


