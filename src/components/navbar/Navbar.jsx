import "./Navbar.scss"
import Sidebar from "./sidebar/Sidebar"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar />
        <div className="wrapper">

          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Aymen Shoteri
          </motion.span>

            <div className="social">
                <a href="https://github.com/AymenS02" target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="github" /></a>
                <a href="https://www.linkedin.com/in/aymen-shoteri/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.webp" alt="linkedin" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
