import "./About.scss"

const About = () => {
  return (
    <div className="about">
        <video width="100%" autoPlay loop muted>
          <source src="./public/drift.mp4" />
        </video>
    </div>
  )
}

export default About;
