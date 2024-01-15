import React from 'react'

const skills= [
    'Java', 'Python', 'C', 'MySQL', 'HTML',
    'CSS', 'Javascript', 'Bootstrap', 'VueJS', 'ReactJS', 'Tailwind CSS',
    'Git', 'Linux', 'Flask', 'Docker', 'PHP (planned)',
    'AWS (planned)'
]

export const About = () => {
  return (
    <div id='about' className=' mx-auto w-[80%] min-h-screen my-6 text-center'>
        <h1 className='text-[#50afac] mb-10'>
            About Me
            <hr className='w-6 h-1 mx-auto my-4 bg-[#AC50AF] border-0 rounded'></hr>
        </h1>
        <div className='flex flex-col md:flex-row gap-6'>
            <div className='md:w-[50%] my-4'>
                <h2 className='text-center text-2xl font-bold mb-6 md:text-left text-[#AFAC50]'>Get to Know Me</h2>
                <p className='text-left'>Nihowdy. life is not daijoubu. 
                Chatgpt is love, chatgpt is life. bing bong my bren is gone</p>
            </div>
            <div className='md:w-[50%] flex flex-col my-4'>
                <h2 className='text-center text-2xl font-bold mb-6 md:text-left text-[#AFAC50]'>My Skills</h2>
                <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                    {skills.map((skill) => (
                        <p
                            key={skill}
                            className='p-2  rounded-sm  bg-black/10 m-2'>
                            {skill}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
export default About