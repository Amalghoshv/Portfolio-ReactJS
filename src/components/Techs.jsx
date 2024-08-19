import html from "../assets/techs/html.svg";
import css from "../assets/techs/css.svg";
import react from "../assets/techs/reactjs.svg";
// import js from "../assets/techs/js.svg";
import vue from "../assets/techs/vuejs.svg";
import  nodejs from "../assets/techs/nodejs.svg";
import  Bootstrap from  "../assets/techs/bootstrap.svg"
import git  from  "../assets/techs/git.svg"
import github  from  "../assets/techs/github.svg"
import tailwind  from  "../assets/techs/tailwind.svg"
import netlify  from  "../assets/techs/netlify.svg"
import erpnext  from  "../assets/techs/erpnext.svg"
import js  from  "../assets/techs/js.svg"
import sparkar  from  "../assets/img/sparkar.svg"
import chatgpt from "../assets/techs/chatgpt.svg"
import scss from "../assets/techs/scss.svg"
import mongodb from "../assets/techs/mongodb.svg"
import "../styles/techs.css"
import { useEffect, useRef } from 'react';
const tech = [
  { logo: html },
  { logo: css },
  { logo: nodejs },
  { logo: react },
  { logo: vue },
  { logo: Bootstrap },
  { logo: git },
  { logo: tailwind },
  { logo: netlify },
  { logo: erpnext },
  { logo: sparkar },
  { logo: github },
  { logo: js },
  { logo: chatgpt },
  { logo: mongodb},
  { logo: scss },
];

function Techs() {
    const scrollRef = useRef(null);
    let scrollPosition = 0;
    useEffect(() => {
        const smoothScroll = () => {
            if (scrollRef.current) {
              scrollPosition += 0.5; 
              scrollRef.current.scrollLeft = scrollPosition;
      
              if (scrollPosition >= scrollRef.current.scrollWidth / 2) {
                scrollPosition = 0; 
              }
            }
      
            requestAnimationFrame(smoothScroll);
          };
      
          requestAnimationFrame(smoothScroll);
      
          return () => cancelAnimationFrame(smoothScroll); 
        }, []);
  return (
    <div className="techs-container" ref={scrollRef}>
        <div className="techs-scroll">  
      {tech.map((technology, index) => (
        <div key={index} className="tech-item">
          <img
            src={technology.logo}
            alt='logos'
            className="tech-logo"
          />
        </div>
      ))}
       {tech.map((technology, index) => (
        <div key={`duplicate-${index}`} className="tech-item">
          <img
            src={technology.logo}
            alt='logos'
            className="tech-logo"
          />
      </div>
     ))}
     </div>
   </div>
 );
}

export default Techs;
