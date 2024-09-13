
import PropTypes from 'prop-types';
import "./card.css"
const Card = ({ logo, heading, description, customClass }) => {
  
  return (
    <div className={`card ${customClass}`}>
      <div className="card-logo-container">
        <img src={logo} alt="Service Logo"className="card-logo" />
      </div>
      <h3 className="card-heading">{heading}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

Card.propTypes = {
    logo: PropTypes.string.isRequired,       
    heading: PropTypes.string.isRequired,    
    description: PropTypes.string.isRequired ,
    customClass:PropTypes.string.isRequired
  };

export default Card;
