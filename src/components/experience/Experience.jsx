import "./Experience.scss"
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <motion.div
            className="experience-div"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <img src="public/thewin.png" alt="react" />
            <div className="text">
            
                <h1>Experience</h1>
                <p>Coming soon...</p>
            </div>
        </motion.div>
    )
    }

export default Experience;