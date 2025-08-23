import React from 'react'

function About() {
  const blogs = [
    { "title": "My First Blog", "date": "2022-01-01", "summary": "This is the summary of my first blog." },
    { "title": "My Second Blog", "date": "2022-02-01", "summary": "This is the summary of my second blog." },
    { "title": "My Third Blog", "date": "2022-03-01", "summary": "This is the summary of my third blog." },
    { "title": "My First Blog", "date": "2022-01-01", "summary": "This is the summary of my first blog." },
    { "title": "My Second Blog", "date": "2022-02-01", "summary": "This is the summary of my second blog." },
  ]
  return (
    <div className='flex   w-full justify-center p-8 flex-col gap-7'>
      <h1 className='text-4xl font-bold'>
        Blogs
        <div className="my-4 border-3 border-amber-300 w-16 rounded-full"></div>
      </h1>
      <div className="flex  flex-wrap   gap-5 justify-between items-center  ">
        {blogs.map((blog, index) => (
          <div key={index} className="w-100 h-70 blog border-2 border-white rounded-md p-4">
            <h2 className="text-2xl font-bold">{blog.title}</h2>
            <p className="text-sm text-gray-400">{blog.date}</p>
            <p className="summary">{blog.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
