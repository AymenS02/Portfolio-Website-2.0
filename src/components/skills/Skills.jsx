import "./Skills.scss"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="skills">

      <h1 className="skills-title">Skills</h1>
      {viewportWidth >= 1100 && (
      <motion.ul
        className="skills-ul"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        <motion.li className="skills-li" variants={item}>
          <img src="/python.webp" alt="python" />
          <img src="/java.webp" className="smaller" alt="java" />
          <img src="/c++.webp" alt="c++" />
          <img src="/c.svg" alt="c" />
          <img src="/haskell.svg" alt="haskell" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
          <img src="/javascript.svg" alt="javascript" />
          <img src="/typescript.svg" alt="typescript" />
          <img src="/react.webp" alt="react" />
          <img src="/node.webp" alt="node" />
          <img src="/tailwind.png" alt="tailwind" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
          <img src="/postgresql.svg" alt="postgresql" />
          <img src="/mongodb.svg" className="larger" alt="mongodb" />
        </motion.li>
        <motion.li className="skills-li" variants={item}>
        </motion.li>
      </motion.ul>
      )}
      {viewportWidth < 1100 && (
      <motion.ul
        className="skills-ul"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        <motion.li className="skills-li" variants={item}>
          <img src="/python.webp" alt="python" />
          <img src="/java.webp" className="smaller" alt="java" />
        </motion.li>

        <motion.li className="skills-li" variants={item}>
          <img src="/c++.webp" alt="c++" />
          <img src="/c.svg" alt="c" />
        </motion.li>

        <motion.li className="skills-li" variants={item}>
          <img src="/haskell.svg" alt="haskell" />
          <img src="/javascript.svg" alt="javascript" />
        </motion.li>
        
        <motion.li className="skills-li" variants={item}>
          <img src="/typescript.svg" alt="typescript" />
          <img src="/react.webp" alt="react" />
        </motion.li>

        <motion.li className="skills-li" variants={item}>
          <img src="/node.webp" alt="node" />
          <img src="/tailwind.png" alt="tailwind" />
        </motion.li>

        <motion.li className="skills-li" variants={item}>
          <img src="/postgresql.svg" alt="postgresql" />
          <img src="/mongodb.svg" className="larger" alt="mongodb" />
        </motion.li>
      </motion.ul>
      )}
    </div>
  )
}

export default Skills