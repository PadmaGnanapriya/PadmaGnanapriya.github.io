import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Articles } from './components/Articles'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Articles />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
