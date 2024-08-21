import "../styles/about.css";

function About() {
  const aboutImg= "/img/avatar.png";
  const handleDownload = () => {
  
    const cvLink = '/cv.pdf'
  
   
    const link = document.createElement('a');
    link.href = cvLink;
    link.download = 'Amalghosh_CV.pdf';
    document.body.appendChild(link);
    link.click();
  
    document.body.removeChild(link);
  };
  
  return (
    <div className="about">
      <div className="about-img-holder" data-aos="fade-up">
        <img
          src={aboutImg}
          className="about-img"
          alt="avatar"
        />
      </div>
      <div className="about-caption">
        <h2 className="section-title"  data-aos="fade-up"
    >About Me</h2>
        <p className="about-p">
          Hello! I&apos;m Amalghosh,a passionate web developer specializing in
          frontend technologies. My current focus is on building dynamic and
          user-friendly interfaces using tools like React.js and Vue.js. I’m
          always exploring new technologies and finding innovative ways to
          enhance my development skills. When I&apos;m not coding, I enjoy
          creating Instagram filters and experimenting with the latest tech
          trends to keep my skills sharp.
        </p>
        <button className="btn-cv"  onClick={handleDownload}>Download CV</button>
      </div>
      <div className="blob">
        <img src="../src/assets/img/blob1.svg" className="blob-img" alt="blob" />
      </div>
    </div>
  );
}

export default About;
