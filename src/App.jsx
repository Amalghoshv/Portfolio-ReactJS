import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import {BrowserRouter} from 'react-router-dom'
import About from "./components/About";
import Services from "./components/Services";
import Techs from "./components/Techs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
const  App = ()=> {
  return (
    <BrowserRouter>
      <Nav/>
      <Header />
      <About/>
      <Services/>
      <Techs/>
      <Projects/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
