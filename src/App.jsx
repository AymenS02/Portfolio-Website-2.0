import './App.scss'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'

function App() {

  return (
    <>
      <section id="Home" className='sectionAll'>
        <Navbar />
        <Home />
      </section>
      <section id="About" className="sectionAbout">
        <About />
      </section>
      <section id="Experience" className='sectionExperience'>
        <Experience />
      </section>
      <section id="Skills" className='sectionSkills'>
        <Skills />
      </section>
      <section id="Projects" className='sectionProjects'>
        <Projects />
      </section>
    </>
  )
}

export default App
