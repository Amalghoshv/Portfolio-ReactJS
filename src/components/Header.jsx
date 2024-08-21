import "../styles/header.css";

import { ReactTyped } from "react-typed";
function Header() {
  const headerImg = "/img/right.svg";
  return (
    <div className="header">
      <div className="overlay"></div>
        <div className="header-content">
          <div className="left-header">
            <h1 className="header-title">
              <span className="up">HI!</span>
              <span className="down">I&apos;m ghosh</span>
            </h1>
            <ReactTyped className="header-subtitle" strings={["WEB DEVELOPER ","WEB DESIGNER","SPARK AR CREATOR"]} loop typeSpeed={40}  backSpeed={50} />

          </div>
          <div className="right-header">
            <img
              className="right-header-img"
              src={headerImg}
              alt="Right Header"
            />
          </div>
        </div>
    </div>
  );
}

export default Header;
