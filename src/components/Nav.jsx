import "../styles/nav.css";
import { useEffect,useState } from "react";
function Nav() {
    const [menuOpen,setMenuOpen] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.querySelector(".navbar");
          if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

      const toggleMenu = ()=>{
        setMenuOpen(!menuOpen)
      }
  return (
    <div>
      <nav className={`navbar ${menuOpen?'active': ""}`}>
        <div className="container">
          <a className="logo" href="#">
            Ghoshdev
          </a>
          <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
          <ul className={`nav ${menuOpen ? "open" : ""}`}>
            <li className="item">
              <a className="link" href="#home">
                Home
              </a>
            </li>
            <li className="item">
              <a className="link" href="#about">
                About
              </a>
            </li>
            <li className="item">
              <a className="link" href="#portfolio">
                Portfolio
              </a>
            </li>
            
            <li className="item">
              <a className="link" href="#blog">
                Works
              </a>
            </li>
            <li className="item">
              <a className="link" href="#contact">
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
