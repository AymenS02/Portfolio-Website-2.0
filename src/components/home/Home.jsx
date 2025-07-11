import "./Home.scss"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollArrow: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const imageVariants = {
  initial: {
    x: 150,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const sliderVariants = {
  initial: {
    x: window.innerWidth,
  },
  animate: {
    x: "-100%",
    transition: {
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      duration: 15,
    },
  },
};

const Home = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home">
      <div className="overlay">
        <div className="wrapper">
          <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>AYMEN SHOTERI</motion.h2>
            <motion.h1 variants={textVariants}>Full Stack Developer</motion.h1>
            <motion.h3 variants={textVariants}>Student @ McMaster University | Seeking Winter 2026 Internships</motion.h3>
            <motion.p variants={textVariants}>Currently pursuing my studies in Computer Science and Mathematics.</motion.p>
            {viewportWidth < 1100 && (
            <motion.img className="scroll" src="./arrow.png" alt="scroll" variants={textVariants} animate="scrollArrow"/>
            )}
            <motion.div className="buttons" variants={textVariants}>
                <a href="/ShoteriAresume.pdf" className="resume" target="_blank">
                    <motion.button variants={textVariants}>View Resume</motion.button>
                </a>  
                <motion.button onClick={() => window.location.href = "mailto:aymenshoteri@gmail.com"} variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            {viewportWidth >= 1100 && (
            <motion.img className="scroll" src="./arrow.png" alt="scroll" variants={textVariants} animate="scrollArrow"/>
            )}
          </motion.div>
        </div>
        <motion.div className="imageContainer" variants={imageVariants} initial="initial" animate="animate">
          <img src="/meComp.png" alt="hero" />
        </motion.div>
      </div>
      {viewportWidth > 1281 && (
        <div className="slidingTextContainer">
          <motion.div
            className="slidingText"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
          >
            <h2>Full Stack Developer</h2>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Home;