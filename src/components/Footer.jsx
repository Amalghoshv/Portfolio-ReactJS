import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer">
        <div>
          <h3 className="footer-text">GHOSHDEV</h3>
        </div>
        <div className="icons">
          <div>
            <a
              href="https://github.com/Amalghoshv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon"
                src="../src/assets/techs/github.svg"
                alt="GitHub"
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/_ghosh__/" target="_blank">
              <img
                className="icon"
                src="../src/assets/techs/footer-insta.svg"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/amalghoshv/" target="_blank">
              <img
                className="icon"
                src="../src/assets/techs/footer-linkedin.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div>
        <p className="footer-p">
          Built from scratch with &#10084; ©Copyright 2024, ghosDev All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
