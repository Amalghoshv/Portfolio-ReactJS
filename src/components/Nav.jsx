import "../styles/nav.css";
import SmoothScroll from "smooth-scroll";
import { useEffect,useState } from "react";
import { Spin as Hamburger } from 'hamburger-react'
function Nav() {
    const [isOpen,setOpen] = useState(false)
    useEffect(() => {
       new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true,
        easing: "easeInOutCubic",
      });
        const handleScroll = () => {
          const navbar = document.querySelector(".navbar");
          const logo = document.querySelector(".logo");
          if (window.scrollY > 50 || isOpen) {
            navbar.classList.add("scrolled");
            logo.classList.add("small");
          } else {
            navbar.classList.remove("scrolled");
            logo.classList.remove("small");
          }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [isOpen]);
      const handleToggle = () => {
        setOpen(!isOpen);
        const navbar = document.querySelector(".navbar");
    
        if (!isOpen || window.scrollY > 50) {
          navbar.classList.add("scrolled", "active");
        } else {
          navbar.classList.remove("scrolled", "active");
        }
      };
    
  return (
    <div>
      <nav className={`navbar ${isOpen?'active': ""}`}>
        <div className="container">
          <a className="logo" href="#header">
            Ghoshdev
          </a>
          <Hamburger className="hamburger-react" toggled={isOpen} toggle={handleToggle} color="red" />
          {/* <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div> */}
          <ul className={`nav ${isOpen ? "open" : ""}`}>
            <li className="item">
              <a className="link" href="#header" onClick={handleToggle} >
                Home
              </a>
            </li>
            <li className="item">
              <a className="link" href="#about" onClick={handleToggle} >
                About
              </a>
            </li>
            <li className="item">
              <a className="link" href="#services"  onClick={handleToggle}>
                Services
              </a>
            </li>
            
            <li className="item">
              <a className="link" href="#projects" onClick={handleToggle} >
                Works
              </a>
            </li>
            <li className="item">
              <a className="link" href="#contact"  onClick={handleToggle}>
                Contact
              </a>
            </li>
          </ul>
         
        </div>
      </nav>
    </div>
  );
}

export default Nav;
