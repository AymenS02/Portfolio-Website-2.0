import "./About.scss"

const About = () => {
  return (
    <div className="about">
        <video width="100%" autoPlay loop muted>
          <source src="./public/infiniteDrift.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default About
