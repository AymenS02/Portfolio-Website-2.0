import "./About.scss"
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      className="about"
      initial="initial"
      whileInView="animate"
    >

      <motion.div className="about-pic"     whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
        <img className="pic" src="/aboutpic1.png" alt="Profile Picture" />
      </motion.div>
      <motion.div className="about-me"     whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
        <motion.h1 className="heady">About Me</motion.h1>
        <motion.p>
          I&apos;m passionate about software development and I&apos;m always looking for opportunities to expand my skill set and gain experience in the field. I&apos;m currently seeking an internship starting the Summer 2024 term.
        </motion.p>
        <motion.p>
          I&apos;m particularly drawn to the world of software development, especially in areas involving databases and their integration into software systems. My passion lies in crafting efficient and robust solutions that leverage the power of databases.
        </motion.p>
        <motion.p>
          While pursuing my goal of becoming a software developer, I devote my time to personal projects that involve database-driven applications. I find joy in creating impactful software solutions and continuously expanding my skill set.
        </motion.p>
        <motion.p>
          Beyond my professional endeavors, I enjoy engaging in personal projects, much like this website, and actively seek connections with individuals who share similar passions and interests.
        </motion.p>
        <motion.p>
          Im a car enthusiast who enjoys car spotting. I run a instagram account for car spotting at my university <b>@mcmaster_cars</b>, check it out!
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default About;
