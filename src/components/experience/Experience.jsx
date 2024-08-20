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
            <div className="body1">
                <img src="/logoN.png" alt="react" />
                <div className="experience-div1">
                    <h1 className="title2">Freelancing Web Developer</h1>
                        <div className="body2">
                            <h3>December 2023 - Present</h3>
                            <ul>
                                <li>
                                    <p><strong>Developed custom websites</strong> using React and Next.js, and anything that aligned with the demands of the clients.</p>
                                </li>
                                <li>
                                    <p><strong>Implemented Tailwind CSS</strong> to streamline the styling process, resulting in faster development and consistent design across projects.</p>
                                </li>
                                <li>
                                    <p>Integrated <strong>secure payment gateways and subscription models</strong> using Stripe and PayPal APIs, ensuring smooth and reliable transactions for clients.</p>
                                </li>
                                <li>
                                    <p><strong>Created interactive and animated websites</strong> using Framer Motion, engaging users with dynamic content and seamless transitions.</p>
                                </li>
                                <li>
                                    <p>Managed <strong>client databases using MongoDB</strong>, ensuring secure storage and quick access to essential data for sometimes over 50 active clients.</p>
                                </li>
                                <li>
                                    <p><strong>Designed responsive and user-friendly interfaces</strong> with Figma and implemented them with React, improving client satisfaction and engagement.</p>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </motion.div>
    )
    }

export default Experience;