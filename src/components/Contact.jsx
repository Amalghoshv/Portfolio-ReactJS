import "../styles/contact.css";
function Contact() {
  return (
    <div className="container">
      <div className="contact">
        <div>
          <p className="subtitle">How can you communicate?</p>
          
        </div>
        <div className="flex ">
          <div>
            <form action="" className="contact-form">
              <div className="form-row">
              <h5 className="title">Contact Me!</h5>
                <div className="form-group">
                  <input
                    type="text"
                    size={40}
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group ">
                  <input
                    type="email"
                    size={40}
                    className="form-control"
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="form-group ">
                  <textarea
                    name="comment"
                    id="comment"
                    rows="5"
                    cols={40}
                    size={40}
                    className="form-control"
                    placeholder="Write Something"
                  ></textarea>
                </div>
                <div className="form-group">
                  <button className="sent-btn">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="contact-img-div">
            <img
              className="contact-img"
              src="../src/assets/img/contact.png"
              alt="contact img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
