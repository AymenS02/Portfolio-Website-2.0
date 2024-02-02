import "./About.scss"

const About = () => {
  return (
    <div className="about">
        <video width="100%" autoPlay loop muted>
          <source src="./public/drift.mp4" />
        </video>
        <div className="overlay"></div>
        <div className="about-content">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
            sagittis odio. Integer et orci auctor, tincidunt nunc in, rhoncus
            libero. Proin nec leo eget nunc aliquam luctus. Nulla facilisi.
            Phasellus et turpis vitae enim tempus congue. Sed eget nunc ac
            tortor aliquet ultricies. Sed eget nunc ac tortor aliquet ultricies.
            Sed eget nunc ac tortor aliquet ultricies. Sed eget nunc ac tortor
            aliquet ultricies.
          </p>
          </div>
    </div>
    
  )
}

export default About;
