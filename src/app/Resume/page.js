import React from 'react';

// Sample data for the sections
const educationData = [
  {
    institution: 'Heritage College Of Art',
    period: '2022 - 2026',
    description: '7.1 CGPA',
  },
  {
    institution: 'New York Academy Of Art',
    period: '2020 - 2022',
    description: '81.6 %',
  },
  {
    institution: 'High School Of Art And Design',
    period: '2008 – 2020',
    description: '79 %',
  },
];

const experienceData = [
  {
    role: 'Spatialty.ai - Software Developer',
    period: '2024 – Present',
    description: 'Building scalable web applications and services.',
  },
];

const skillsData = [
  { name: 'MERN STACK', percentage: 80 },
  { name: 'NEXTJS with DJANGO', percentage: 80 },
  { name: 'DEVOPS', percentage: 30 },
];

export default function Home() {
  return (
    <div className="bg-zinc-800 text-gray-300 p-8 rounded-md shadow-lg">
      {/* Education Section */}
      <h1 className='text-4xl font-bold'>
        Resume
        <div className="my-4 border-3 border-amber-300 w-16 rounded-full"></div>
      </h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">Education</h2>
        <div className="relative pl-6">
          <div className="absolute top-0 left-0 w-0.5 h-full bg-yellow-500"></div>
          {educationData.map((edu, index) => (
            <div key={index} className="mb-4 pl-4">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <h3 className="font-semibold text-gray-100">{edu.institution}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">{edu.period}</p>
              <p className="text-gray-300 text-sm">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-zinc-700 mb-8" />

      {/* Experience Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">Experience</h2>
        <div className="relative pl-6">
          <div className="absolute top-0 left-0 w-0.5 h-full bg-yellow-500"></div>
          {experienceData.map((exp, index) => (
            <div key={index} className="mb-4 pl-4">
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <h3 className="font-semibold text-gray-100">{exp.role}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-1">{exp.period}</p>
              <p className="text-gray-300 text-sm">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-zinc-700 mb-8" />

      {/* My Skills Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-100">My Skills</h2>
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-100 text-sm">{skill.name}</span>
              <span className="text-gray-400 text-sm">{skill.percentage}%</span>
            </div>
            <div className="bg-zinc-700 rounded-full h-2.5">
              <div
                className="bg-yellow-500 rounded-full h-2.5"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}