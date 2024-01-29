import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
        <div className="wrapper">
            <h2>Hi, my name is</h2>
            <h1>AYMEN SHOTERI</h1>
            <h3>Full Stack Developer</h3>
            <p>I&apos;m currently pursuing my studies in Computer Science and Mathematics at McMaster University.</p>
            <div className="home-buttons">
                <a href="public/Aymen-Shoteri.pdf" className="resume" target="_blank">
                    <button>View Resume</button>
                </a>  
                <button href="mailto:aymenshoteri@gmail.com">Get In Touch</button>
            </div>
        </div>
    </div>
  )
}

export default Home;