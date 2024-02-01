import './App.scss'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Skills from './components/skills/Skills'

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
      <section id="Skills" className='sectionSkills'>
        <Skills />
      </section>
    </>
  )
}

export default App
