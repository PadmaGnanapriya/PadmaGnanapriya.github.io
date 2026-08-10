import { LazyMotion, domAnimation } from 'motion/react'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { Skills } from './components/Skills'
import { Articles } from './components/Articles'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </LazyMotion>
  )
}
