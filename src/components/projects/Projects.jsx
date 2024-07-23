import './Projects.scss'
import { motion } from "framer-motion";

const Projects = () => {

  
  return (
      <motion.div
          className="projects-div"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
      >
          <h1>Projects</h1>
          <div className="projects-container">
              <div className="project">
                  <h2>Crypto Tracker App with React</h2>
                  <h3><a href="https://aymens02.github.io/Crypto-Tracker/">Click Here for Live Demo</a></h3>
                  <h3><a href="https://github.com/AymenS02/Crypto-Tracker">Github Repo</a></h3>
                  <img src="public\projects\cointracker.png" alt="coin project image" />
              </div>
              <div className="project">
                  <h2>Ex-Personal Portfolio</h2>
                  <h3><a href="https://aymens02.github.io/AymenShoteri.github.io/">Click Here for Live Demo</a></h3>
                  <h3><a href="https://aymens02.github.io/Crypto-Tracker/">Github Repo</a></h3>
                  <img src="public\projects\personalPort.png" alt="coin project image" />
              </div>
              <div className="project">
                  <h2>Solar Systems Graphic Design with C++</h2>
                  <h3><a href="https://github.com/AymenS02/Solar-System">Github Repo</a></h3>
                  <img src="public\projects\solarsystem.gif" alt="coin project image" />
              </div>
              <div className="project">
                  <h2>Connect 4 with AI</h2>
                  <h3><a href="https://github.com/AymenS02/Connect-4-Game">Github Repo</a></h3>
                  <img src="public\projects\connect4.png" alt="coin project image" />
              </div>
          </div>
      </motion.div>
  )
  }

export default Projects;