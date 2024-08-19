
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
// const styles = {
//   card: {
//     position: 'relative',
//     backgroundColor: 'white',
//     borderRadius: '8px',
//     boxShadow: 'box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
//     padding: '20px',
//     textAlign: 'center',
//     width: '200px',
//     margin: '10px',
//   },
 
  
//   logoContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100px',
//     marginBottom: '15px',
//   },
//   logo: {
//     minHeight: '50px',
//     minWidth: '50px',
//   },
//   heading: {
//     fontSize: '1.1rem',
//     margin: '10px 0',
//   },
//   description: {
//     fontSize: '1rem',
//     color: '#666',
//   },
// };


export default Card;
