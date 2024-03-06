import React from 'react'

const skills= [
    'Java', 'Python', 'C', 'MySQL', 'HTML',
    'CSS', 'Javascript', 'Bootstrap', 'VueJS', 'ReactJS', 'Tailwind CSS',
    'Git', 'Linux', 'Flask', 'Docker', 'PHP',
    'AWS', 'Spring Boot', 'Figma'
]

export const About = () => {
  return (
    <div id='about' className=' mx-auto w-[80%] min-h-screen my-8 py-4 text-center'>
        <h1 className='text-[#FF9E00] mb-10'>
            About Me
            <hr className='w-6 h-1 mx-auto my-4 bg-[#0061FF] border-0 rounded'></hr>
        </h1>
        <div className='flex flex-col md:flex-row gap-6'>
            <div className='md:w-[50%] my-4'>
                <h3 className='text-center text-xl font-bold mb-6 md:text-left text-[#ffffff]'>Get to Know Me</h3>
                <p className='text-left'>Hi, I'm Chloe. I am an aspiring Computer Science 
                student currently in my third year of study at Singapore Management University. 
                My journey in Computer Science started in high school where I learned Java as my very first
                programming language. Since then I have learned other programming languages and gained a foundation
                in areas such as data structures, software development, and database management. I also have an 
                interest in web development and cybersecurity.
                <br /> <br />
                I am eager to continue exploring the field of computer science and am particularly excited about 
                opportunities for internships or projects that can contribute to my learning. Feel free to reach 
                out to my LinkedIn or Github or reach out via email at chloe.koh8@gmail.com.
                </p>
            </div>
            <div className='md:w-[50%] flex flex-col my-4'>
                <h3 className='text-center text-xl font-bold mb-6 md:text-left text-[#ffffff]'>My Skills</h3>
                <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                    {skills.map((skill) => (
                        <p
                            key={skill}
                            className='p-2  rounded-sm  bg-black/10 m-2 hover:text-[#FF9E00] hover:scale-105'>
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