import "../styles/header.css";

import { ReactTyped } from "react-typed";
function Header() {
  const headerImg = "/img/right.svg";
  return (
    <div className="header">
      <div className="overlay"></div>
        <div className="header-content">
          <div className="left-header">
            <div className="header-title">
              <h1  className="up">Hi!</h1>
              <h1  className="down">I&apos;m ghosh</h1>
              {/* <span className="up">HI!</span>
              <span className="down">I&apos;m ghosh</span> */}
            </div>
            <ReactTyped className="header-subtitle" strings={["WEB DEVELOPER ","WEB DESIGNER","META SPARK CREATOR"]} loop typeSpeed={40}  backSpeed={50} />

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
