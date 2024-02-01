'use client'
import Image from 'next/image'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import ParticlesBg from './components/Particlesbg.jsx'

export default function Home() {

  return (
    <main className="main">
      <Navbar />
      <ParticlesBg>
        <Main />
        <About />
        <Projects />
      </ParticlesBg>
    </main>
  )
}
