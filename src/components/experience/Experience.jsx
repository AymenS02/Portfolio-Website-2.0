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
            <div className="experience-div">
                <h1 className="title">Experience</h1>
                    <div className="body">
                        <h2>Front-end Developer</h2>
                        <h3>2021 - Present</h3>
                        <p>Working as a front-end developer at The Win, a digital marketing agency. I am responsible for developing websites and web applications using React and Angular.</p>
                    </div>
            </div>
        </motion.div>
    )
    }

export default Experience;