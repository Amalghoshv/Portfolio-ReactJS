import html from "/icons/html.svg";
import css from "/icons/css.svg";
import js  from  "/icons/js.svg"
import react from "/icons/reactjs.svg";
import vue from "/icons/vuejs.svg";
import  nodejs from "/icons/nodejs.svg";
import  bootstrap from  "../assets/techs/bootstrap.svg"
import git  from  "../assets/techs/git.svg"
import github  from  "/icons/github.svg"
import tailwind  from  "../assets/techs/tailwind.svg"
import netlify  from  "../assets/techs/netlify.svg"
import erpnext  from  "../assets/techs/erpnext.svg"

import sparkar  from  "/icons/sparkar.svg"
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
  { logo: bootstrap },
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
              scrollRef.current.scrollBy({ left: 1, behavior: 'smooth' });

      
              if (scrollPosition >= scrollRef.current.scrollWidth / 2) {
                scrollPosition = 0; 
                scrollRef.current.scrollLeft = 0;
                
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
        <div key={index} className="tech-item" >
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
