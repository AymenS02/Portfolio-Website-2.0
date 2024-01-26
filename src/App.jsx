import './App.scss'
import About from './components/about/About'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <section id="Home" className='sectionAll'>
        <Navbar />
        
      </section>
      <section id="About" className="sectionAbout">
        <About />
      </section>
      <section id="Skills" className='sectionAll'>Skills</section>
      <section id="Projects" className='sectionAll'>Projects</section>
      <section id="Contact" className='sectionAll'>Contact</section>
    </>
  )
}

export default App
