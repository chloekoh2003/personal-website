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
        description: 'Weather app made with React JS. Includes city search and shows temperature, humidty, and wind speed.',
        image: '/images/weather.png',
        github: 'https://github.com/chloekoh2003/WeatherApp',
        link: 'https://weather-app-alpha-peach-77.vercel.app/'
    },
    {
        name: 'E-MPOWER',
        description: 'Collaborated with a team to make an application that tracks the location of e-waste recycling bins and allows users to track their progress. It has a Spring Boot-based backend and VueJS-based frontend.',
        image: '/images/empower.png',
        github: 'https://github.com/zhiyisoh/e-mpower'
    },
    {
        name: 'Campus Compass',
        description: 'Collaborated with a team to develop a school recommendation web application, integrating the OneMap API for location-based functionalities.',
        image: '/images/sr.png',
        github: 'https://github.com/francis1009/CampusCompass'
    },
    {
        name: 'Astro Boy',
        description: 'Worked in a team of two, utilizing computer vision, arduino and 3d printing to create a camera attachment that added autofocus functionality to manual lenses for the purpose of astrophotography.',
        image: '/images/astro.png',
        github: 'https://github.com/chloekoh2003/astro-boy'
    },
    {
        name: 'Snake Game',
        description: 'Replicated the snake game using the Java Swing library.',
        image: '/images/snake.png',
        github: 'https://github.com/chloekoh2003/snakegame'
    }
]

export const Projects = () => {
  return (
    <div id='projects' className=' mx-auto w-full min-h-screen my-6 py-4 text-center'>
        <h1 className='text-[#e9ff00] mb-10'>
            Projects
            <hr className='w-6 h-1 mx-auto my-4 bg-[#70a3f5] border-0 rounded'></hr>
        </h1>
        <div className='flex flex-wrap justify-center gap-6 shadow-xl'>
            {projects.map((project, idx) => (
                <div key={idx} className="flex flex-col items-center mx-auto sm:w-2/3 md:w-1/4 mb-6">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <Image 
                            src={project.image} 
                            alt={project.name}
                            width={400}
                            height={250}
                            layout="responsive"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2 text-gray-600">{project.name}</div>
                            <p className="text-gray-700 text-base">
                            {project.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                <a href={project.github} target="_blank"><FaGithub size={25} className='hover:text-[#0061FF] hover:scale-105'/></a>
                            </span>
                            {project.link ? 
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                    <a href={project.link} target="_blank"><FaExternalLinkAlt size={25} className='hover:text-[#0061FF] hover:scale-105'/></a>
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