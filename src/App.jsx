import './App.scss'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects.tsx'

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
      {/* <section id="Skills" className='sectionSkills'>
        <Skills />
      </section>
      <section id="Projects" className='sectionProjects'>
        <Projects />
      </section> */}
      <footer className='footer'>
        <p>© 2024 by <a href="https://www.linkedin.com/in/aymen-shoteri/" target="_blank" rel="noreferrer">Aymen Shoteri</a></p>
        <p>All Rights Reserved, <a href="https://github.com/AymenS02/Portfolio-Website-2.0" target='_blank' rel="noreferrer" >Website Designed + Developed by Aymen Shoteri</a></p>
        
      </footer>
    </>
  )
}

export default App
