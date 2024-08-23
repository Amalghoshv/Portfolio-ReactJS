import "../styles/projects.css";

function Projetcs() {
  return (
    <div className="projects-container">
      <h5 className="projects-heading">Projects</h5>
      <div className="cards">
        <div className="project-card">
          <h1 className="project-title">Fuel Expense Calculator</h1>
          <p className="project-subtitle">
            A simple tracking app made using React js{" "}
          </p>
          <img
            className="card-img"
            src="/img/fuelexpense.jpeg"
            alt="fuel expense"
          />
        </div>
        <div className="project-card">
          <h1 className="project-title">Expense Tracker</h1>
          <p className="project-subtitle">
            A simple tracking app made using Vue js{" "}
          </p>
          <img
            className="card-img"
            src="/img/expense-tracker.jpeg"
            alt="fuel expense"
          />
        </div>
        <div className="project-card">
        <h1 className="project-title">eCommerce React</h1>
        <p className="project-subtitle">
          eCommerce using React js
        </p>
        <img
          className="card-img"
          src="/img/16544.jpg"
          alt="fuel expense"
        />
      </div>
      </div>
      
    </div>
  );
}

export default Projetcs;
