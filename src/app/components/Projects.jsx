import React from 'react'
import Image from 'next/image'
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'

const projects = [
    {
        name: 'Calculator',
        description: 'Simple calculator webpage with responsiveness, unique button hover effect and cursor effect. Created with Next.js and Tailwind CSS.',
        image: '/images/calc.png',
        github: 'https://github.com/chloekoh2003/calculator',
        link: 'https://calculator-gamma-three-28.vercel.app/'
    },
    {
        name: 'File Encryptor/Decryptor',
        description: 'Python utility for AES-based file encryption and decryption, using SHA256 for password hashing. Includes chunked file processing for handling large files, password integrity verification, and data padding for AES block alignment.',
        image: '/images/enc.png',
        github: 'https://github.com/chloekoh2003/file-encryptor'
    },
    {
        name: 'Weather app',
        description: 'Weather app made with React JS. Includes city search and shows temperature, humidty, and wind speed. ',
        image: '/images/weather.png',
        github: 'https://github.com/chloekoh2003/WeatherApp',
        link: 'https://weather-app-alpha-peach-77.vercel.app/'
    },
]

export const Projects = () => {
  return (
    <div id='projects' className=' mx-auto w-[80%] min-h-screen my-6 text-center'>
        <h1 className='text-[#50afac] mb-10'>
            Projects
            <hr className='w-6 h-1 mx-auto my-4 bg-[#AC50AF] border-0 rounded'></hr>
        </h1>
        <div className='flex flex-col mx-auto w-[80%] md:flex-row gap-6'>
            {projects.map((project, idx) => (
                <div key={idx}>
                    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <Image 
                            src={project.image} 
                            alt={project.name}
                            width={400}
                            height={250}
                            layout="responsive"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-gray-600">{project.name}</div>
                            <p class="text-gray-700 text-base">
                            {project.description}
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                <a href={project.github} target="_blank"><FaGithub size={25} className='hover:text-[#AFAC50]'/></a>
                            </span>
                            {project.link ? 
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    <a href={project.link} target="_blank"><FaExternalLinkAlt size={25} className='hover:text-[#AFAC50]'/></a>
                                </span>
                            : <div></div>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
export default Projects