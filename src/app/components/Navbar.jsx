import Link from 'next/link'
import React, {useState} from 'react'
import { useRouter } from 'next/router'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav =() => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100] bg-[#493dfc]'>
            <div className='container mx-auto h-full flex justify-end'>
                <ul className='hidden md:flex mr-8 mt-8'>
                    <Link href="/#home">
                        <li className='ml-10 text-lg uppercase hover:underline'>Home</li>
                    </Link>
                    <Link href="/#about">
                        <li className='ml-10 text-lg uppercase hover:underline'>About Me</li>
                    </Link>
                    <Link href="/#projects">
                        <li className='ml-10 text-lg uppercase hover:underline'>Projects</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden rounded-full cursor-pointer m-4 p-3 hover:bg-black/10'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
            
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? ' fixed left-0 top-0 w-[80%] sm:w-[45%] md:w-[35%] h-screen bg-[#493dfc] p-10 ease-in-duration-500' 
                : 'fixed left-[-100%] top-0  p-10 ease-in-duration-500'}>
                    <div>
                        <div className='flex w-full justify-end'>
                            <div onClick={handleNav} className='rounded-full p-3 cursor-pointer hover:bg-black/10'>
                                <AiOutlineClose size={25}/>
                            </div>
                        </div>
                    </div>

                    <div className='p-4 flex flex-col'>
                        <ul>
                            <Link href="/#home">
                                <li className='py-4 text-md uppercase hover:text-[#e9ff00]'>Home</li>
                            </Link>
                            <Link href="/#about">
                                <li className='py-4 text-md uppercase hover:text-[#e9ff00]'>About Me</li>
                            </Link>
                            <Link href="/#projects">
                                <li className='py-4 text-md uppercase hover:text-[#e9ff00]'>Projects</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-wide text-[#FFFFFF]'>Let's connect</p>
                            <div className='flex items-center my-4 sm:w-[80%]'>
                                <div className='rounded-full shadow-lg p-3 mr-6 cursor-pointer hover:scale-110 ease-in-duration-500'>
                                    <a href="https://www.linkedin.com/in/chloe-koh-32590523b/" target="_blank"><FaLinkedinIn className='text-[#FFFFFF]'/></a>
                                </div>
                                <div className='rounded-full shadow-lg p-3 mr-6 cursor-pointer hover:scale-110 ease-in-duration-500'>
                                    <a href="https://github.com/chloekoh2003" target="_blank"><FaGithub className='text-[#FFFFFF]'/></a>
                                </div>
                                <div className='rounded-full shadow-lg p-3 mr-6 cursor-pointer hover:scale-110 ease-in-duration-500'>
                                    <a href="mailto:chloe.koh8@gmail.com"><AiOutlineMail className='text-[#FFFFFF]'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar