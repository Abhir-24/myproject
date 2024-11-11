import { useEffect, useState } from "react";
const Navbar = () => {

  const [navbarColor, setNavbarColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      // const homeSection = document.getElementById("home").getBoundingClientRect();
      const aboutSection = document.getElementById("about").getBoundingClientRect();

      if (aboutSection.top <= 50) {
        setNavbarColor("grey"); // Color for About section
      } else /*if (homeSection.top <= 50)*/ {
        setNavbarColor("white"); // Default color for Home section
      } 
      // else {
      //   setNavbarColor("transparent"); // Color when scrolled to top
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='navbar'>
        <div className="navframe" style={{ color: navbarColor, transition: "0.3s" }}>
            <div className="navname"><h2>MyProject</h2></div>
            <div className="nav-options">
                <span className='nav-links'>Home</span>
                <span className='nav-links'>How it Works</span>
                <span className='nav-links'>Integration</span>
                <span className='nav-links'>Showcase</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar