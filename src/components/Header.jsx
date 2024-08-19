import "../styles/header.css";
function Header() {
  return (
    <div className="header">
      <div className="overlay"></div>
        <div className="header-content container">
          <div className="left-header">
            <h1 className="header-title">
              <span className="up">HI!</span>
              <span className="down">I&apos;m ghosh</span>
              <p className="header-subtitle">WEB DEVELOPER </p>
              {/* <button className="worksBtn">Visit My Works</button> */}
            </h1>
          </div>
          <div className="right-header">
            <img
              className="right-header-img"
              src="/src/assets/img/right.svg"
              alt="Right Header"
            />
          </div>
        </div>
    </div>
  );
}

export default Header;
