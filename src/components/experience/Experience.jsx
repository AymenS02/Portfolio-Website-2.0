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
            <h1 className="title1">Experience</h1>
            <div className="body1">
                <img src="/thewin.png" alt="react" />
                <div className="experience-div1">
                    <h1 className="title2">Full Stack Developer Intern</h1>
                        <div className="body2">
                            <h3>May 2024 - Aug 2024</h3>
                            <ul>
                                <li>
                                    <p>  <strong>Spearheaded the development of a dynamic educational platform</strong> using JavaScript, incorporating Coursera-like course management. </p>
                                </li>
                                <li>
                                    <p>  <strong>Implemented SCSS</strong> into the design to increase manageability and readability. </p>
                                </li>
                                <li>
                                    <p>  Integrated <strong>secure payment gateways and user authentication systems</strong> using Collect.js, Tokenization, and Public Security Keys for smooth transactions. </p>
                                </li>
                                <li>
                                    <p>  <strong>Designed and maintained RESTful APIs</strong> and optimized database queries to enhance platform performance and reliability with <strong>MongoDB Atlas</strong>. </p>
                                </li>
                                <li>
                                    <p>   Ensured smooth operation for over <strong>100 active users</strong>, effectively managing their data and maintaining high performance. </p>
                                </li>
                                <li>
                                    <p>  <strong>Engineered a responsive and intuitive user interface</strong>, ensuring seamless usability across various screen sizes.</p>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </motion.div>
    )
    }

export default Experience;