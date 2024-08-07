import "./Skills.scss"
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const Skills = () => {
  return (
    <div className="skills">

      <h1 className="skills-title">Skills</h1>
      <motion.ul
        className="skills-ul"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        <motion.li className="skills-li" variants={item}>
          <img src="/python.webp" alt="python" />
          <img src="/javascript.svg" alt="javascript" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
          <img src="/react.webp" alt="react" />
          <img src="/node.webp" alt="node" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
          <img src="/postgresql.svg" alt="postgresql" />
          <img src="/java.webp" alt="java" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
          <img src="/c++.webp" alt="c++" />
          <img src="/Haskell-Logo.svg" alt="html" />
        </motion.li>
      </motion.ul>
    </div>
  )
}

export default Skills