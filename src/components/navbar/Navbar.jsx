import "./Navbar.scss"
import Sidebar from "./sidebar/Sidebar"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="navbar">
        <Sidebar />
        <div className="wrapper">

        {viewportWidth > 1100 && (<motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Aymen Shoteri
          </motion.span>
        )}

            <div className="social">
                <a href="https://github.com/AymenS02" target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="github" /></a>
                <a href="https://www.linkedin.com/in/aymen-shoteri/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.webp" alt="linkedin" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
