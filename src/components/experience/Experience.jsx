import "./Experience.scss"
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="experience">
        <motion.div
            className="experience-div"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2>Experience</h2>
            <p>Coming soon...</p>
        </motion.div>
        </div>
    )
    }

export default Experience;