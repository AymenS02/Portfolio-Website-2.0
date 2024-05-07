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
      <motion.ul
        className="skills-ul"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.li className="skills-li" variants={item}>
          <img src="public/python.webp" alt="python" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
        <img src="public/javascript.svg" alt="javascript" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
          <img src="public/react.webp" alt="react" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
          <img src="public/node.webp" alt="node" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
          <img src="public/postgresql.svg" alt="postgresql" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
          <img src="public/java.webp" alt="java" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
          <img src="public/c++.webp" alt="c++" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
          <img src="public/Haskell-Logo.svg" alt="html" />
        </motion.li>

      </motion.ul>
    </div>
  )
}

export default Skills