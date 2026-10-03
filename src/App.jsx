import { Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Stats from './components/Stats.jsx'
import Skills from './components/Skills.jsx'
import Cybersecurity from './components/Cybersecurity.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Learning from './components/Learning.jsx'
import CareerGoal from './components/CareerGoal.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import NotFound from './components/NotFound.jsx'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Cybersecurity />
      <Projects />
      <Education />
      <Certifications />
      <Learning />
      <CareerGoal />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <div className="relative bg-bg text-text font-body min-h-screen">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
