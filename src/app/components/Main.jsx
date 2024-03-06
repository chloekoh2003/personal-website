import Link from 'next/link'
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'


export const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='w-full h-full mx-auto p-2 flex flex-col justify-center items-center'>
            <h1 className='p-4' style={{fontFamily: 'Courier'}}>Hi, my name is <span className='text-[#FF9E00]' style={{fontFamily: 'Courier', fontWeight: 'bold'}}>Chloe</span></h1>
            <p className='py-4 mx-auto max-w-[70%]'>
              I'm currently studying computer science in Singapore Management University. I have experience with building
              responsive front-end web applications and applying some back-end technolgies.
            </p>
            <div className='flex items-center justify-between py-4'>
              <div className='rounded-full shadow-lg p-3 m-8 cursor-pointer hover:scale-110 ease-in-duration-500'>
                <a href="https://www.linkedin.com/in/chloe-koh-32590523b/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-[#0061FF]'/></a>
              </div>
               <div className='rounded-full shadow-lg p-3 m-8 cursor-pointer hover:scale-110 ease-in-duration-500'>
                 <a href="https://github.com/chloekoh2003" target="_blank" rel="noopener noreferrer"><FaGithub className='text-[#0061FF]'/></a>
              </div>
              <div className='rounded-full shadow-lg p-3 m-8 cursor-pointer hover:scale-110 ease-in-duration-500'>
                <a href="mailto:chloe.koh8@gmail.com"><AiOutlineMail className='text-[#0061FF]'/></a>
              </div>
            </div>
        </div>
    </div>
  )
}
export default Main