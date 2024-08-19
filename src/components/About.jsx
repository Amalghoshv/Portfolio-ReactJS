import "../styles/about.css";

function About() {
  return (
    <div className="about">
      <div className="about-img-holder">
        <img
          src="/src/assets/img/avatar.png"
          className="about-img"
          alt="avatar"
        />
      </div>
      <div className="about-caption">
        <h2 className="section-title mb-3">About Me</h2>
        <p>
          Hello! I&apos;m Amalghosh, a passionate web developer specializing in
          frontend technologies. My current focus is on building dynamic and
          user-friendly interfaces using tools like React.js and Vue.js. I’m
          always exploring new technologies and finding innovative ways to
          enhance my development skills. When I&apos;m not coding, I enjoy
          creating Instagram filters and experimenting with the latest tech
          trends to keep my skills sharp.
        </p>
        <button className="btn-cv">Download CV</button>
      </div>
      <div className="blob">
        <img src="../src/assets/img/blob1.svg" className="blob-img" alt="blob" />
      </div>
    </div>
  );
}

export default About;
