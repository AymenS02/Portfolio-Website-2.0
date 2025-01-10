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
            <div className="body1">
                <img src="/r2r.png" alt="react" />
                <div className="experience-div1">
                    <h1 className="title2">Road 2 Righteousness Front-End Developer</h1>
                        <div className="body2">
                            <h3>October 2024 - Present</h3>
                            <ul>
                                <li>
                                    <p><strong>Developed a custom website</strong> for a self-development retreat company using <strong>React and Tailwind CSS</strong>, catering to over <strong>200 visitors</strong> and providing a seamless user experience.</p>
                                </li>
                                <li>
                                    <p><strong>Implemented Tailwind CSS</strong> to streamline styling, ensuring a modern, responsive design that enhanced the visual appeal and consistency of the website.</p>
                                </li>
                                <li>
                                    <p><strong>Utilized GSAP animations</strong> to create engaging and dynamic user experiences, adding smooth transitions and interactive elements that captivated the audience.</p>
                                </li>
                                <li>
                                    <p><strong>Managed secure user registrations and data</strong> using a scalable backend, ensuring a secure environment for personal development session sign-ups and feedback submissions.</p>
                                </li>
                                <li>
                                    <p><strong>Designed and implemented a booking system</strong> allowing users to seamlessly register for retreats, enhancing the overall user journey and simplifying the registration process.</p>
                                </li>
                                <li>
                                    <p><strong>Optimized the website</strong> for high traffic, ensuring smooth performance and quick load times during peak usage, enhancing user satisfaction and retention.</p>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
            <div className="body1">
                <img className="mac-img" src="/macmsa.png" alt="react" />
                <div className="experience-div1">
                    <h1 className="title2">McMaster MSA Website and Software Engineer</h1>
                        <div className="body2">
                            <h3>October 2024 - Present</h3>
                            <ul>
                                <li>
                                    <p><strong>Collaborated in a team of 6</strong> to develop a full-stack website and portal for McMaster MSA, providing a seamless platform for students and administrators.</p>
                                </li>
                                <li>
                                    <p><strong>Developed a responsive front-end</strong> using React, Next.js, and Tailwind CSS, ensuring a user-friendly interface with a modern design for both students and admins.</p>
                                </li>
                                <li>
                                    <p><strong>Implemented secure portal access</strong> for administrators using Firebase Authentication, enabling efficient management of events, announcements, and user data.</p>
                                </li>
                                <li>
                                    <p><strong>Utilized Firebase Firestore</strong> as the backend to store and manage user data, providing a scalable and real-time database solution that ensured data integrity and security.</p>
                                </li>
                                <li>
                                    <p><strong>Incorporated GSAP animations</strong> to enhance user experience with smooth transitions and interactive elements, making the website more engaging and dynamic.</p>
                                </li>
                                <li>
                                    <p><strong>Designed and implemented admin dashboards</strong> for easy management of portal content, improving operational efficiency and user engagement.</p>
                                </li>
                                <li>
                                    <p><strong>Optimized the website</strong> for performance, ensuring fast load times and smooth functionality even during high traffic periods, contributing to an enhanced user experience.</p>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </motion.div>
    )
    }

export default Experience;