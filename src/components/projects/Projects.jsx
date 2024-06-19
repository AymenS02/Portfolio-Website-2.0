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
            <h2>Projects</h2>
            <p>Coming soon...</p>
        </motion.div>
        </div>
    )
    }

export default Projects;