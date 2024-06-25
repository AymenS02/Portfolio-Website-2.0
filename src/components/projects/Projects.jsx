import './Projects.scss'
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <div className="projects">
        <motion.div
            className="projects-div"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
        <h1>Projects</h1>
        <div className="projects-container">
            <div className="project">
                <h2>Project 1</h2>
                <p>Project 1 description</p>
                <img src="public\projects\cointracker.png" alt="coin project image" />
            </div>
            <div className="project">
                <h2>Project 2</h2>
                <p>Project 2 description</p>
                <img src="public\projects\personalPort.png" alt="coin project image" />

            </div>
            <div className="project">
                <h2>Project 3</h2>
                <p>Project 3 description</p>
                <img src="public\projects\dynamic_sun.mp4" alt="coin project image" />

            </div>
            <div className="project">
                <h2>Project 4</h2>
                <p>Project 4 description</p>
                <img src="public\projects\connect4.png" alt="coin project image" />
            </div>
        </div>
        </motion.div>
        </div>
    )
    }

export default Projects;