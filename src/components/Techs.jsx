import html from "/icons/html.svg";
import css from "/icons/css.svg";
import js from "/icons/js.svg";
import typescript from "/icons/typescript.svg";
import react from "/icons/reactjs.svg";
import vue from "/icons/vuejs.svg";
import nodejs from "/icons/nodejs.svg";
import bootstrap from "/icons/bootstrap.svg";
import git from "/icons/git.svg";
import github from "/icons/github.svg";
import tailwind from "/icons/tailwind.svg";
import netlify from "/icons/netlify.svg";
import erpnext from "/icons/erpnext.svg";
import sparkar from "/icons/sparkar.svg";
import chatgpt from "/icons/chatgpt.svg";
import scss from "/icons/scss.svg";
import mongodb from "/icons/mongodb.svg";
import frappe from "/icons/frappe.svg";
import angular from "/icons/angular.svg";
import firebase from "/icons/firebase.svg";
import postman from "/icons/postman.svg";
import vscode from "/icons/vscode.svg";
import "../styles/techs.css";
import { useEffect, useRef } from "react";
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
  { logo: mongodb },
  { logo: scss },
  { logo: frappe },
  { logo: vscode },
  { logo: postman },
  { logo: firebase },
  { logo: angular },
  { logo: typescript },
];

function Techs() {
  const scrollRef = useRef(null);
  let scrollPosition = 0;
  useEffect(() => {
    const smoothScroll = () => {
      if (scrollRef.current) {
        scrollPosition += 0.5;
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });

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
          <div key={index} className="tech-item">
            <img src={technology.logo} alt="logos" className="tech-logo" />
          </div>
        ))}
        {tech.map((technology, index) => (
          <div key={`duplicate-${index}`} className="tech-item">
            <img src={technology.logo} alt="logos" className="tech-logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techs;
