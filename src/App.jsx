import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Techs from "./components/Techs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <BrowserRouter>
      <Nav />
      <div id="header">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services"  >
        <Services />
      </div>
      <Techs id="techs" />
      <div id="projects" data-aos="fade-up">
        <Projects />
      </div>
      <div id="contact" data-aos="fade-left">
        <Contact />
      </div>

      <Footer />
    </BrowserRouter>
  );
};
export default App;
