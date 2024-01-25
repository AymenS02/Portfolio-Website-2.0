import './App.scss'
import Navbar from './components/navbar/navbar/Navbar'

function App() {

  return (
    <>
      <section id="Home">
        <Navbar />
        
      </section>
      <section id="About">
        <video width="100%"  autoPlay loop muted>
          <source src="./public/infiniteDrift.mp4" type="video/mp4" />
        </video>
      </section>
      <section id="Skills">Skills</section>
      <section id="Projects">Projects</section>
      <section id="Contact">Contact</section>
    </>
  )
}

export default App
