'use client'
import Image from 'next/image'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Main />
      <About />
      <Projects />
    </main>
  )
}
