const Links = () => {

    const items = [
        "Home",
        "About",
        "Experience",
        "Skills",
        "Projects",
    ];
    
    return (
      <div className="links">
      {items.map((item, index) => (
        <a href={`#${item}`} key={index}>
          {item}
        </a>
      ))}
      </div>
    )
}

    
export default Links;