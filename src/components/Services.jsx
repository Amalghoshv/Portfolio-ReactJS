import services from "../services.js";
import Card from "./ui/Card";
import "../styles/services.css";
function Services() {

  return (
    <div className="services-container" data-aos="zoom-in" >
      <p className="services-subtitles">What I Do ?</p>
      <h5 className="titles">Services</h5>
      <div className="cards-container" >
        {services.map((service, index) => (
          <Card
            
            key={index}
            logo={service.logo}
            heading={service.heading}
            description={service.description}
            customClass="glass-card"
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
