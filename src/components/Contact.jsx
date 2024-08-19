import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  }); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cedyrqk', 'template_bkrokoe', e.target, 'nWJpqYLF_rKxgiFf-'
    )
      .then((result) => {
          console.log('Email successfully sent!', result.text);
      }, (error) => {
          console.log('Failed to send email:', error.text);
      });

    setFormData({ name: '', email: '', message: '' }); 
  };
  return (
    <div className="container">
      <div className="contact">
        <div>
          <p className="subtitle">How can you communicate?</p>
          
        </div>
        <div className="flex ">
          <div>
            <form action="" className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
              <h5 className="title">Contact Me!</h5>
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    id="email"
                    // size={40}
                    className="form-control"
                    placeholder="Your Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group ">
                  <input
                    name="email"
                    type="email"
                    id="email"
                    // size={40}
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group ">
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    // cols={40}
                    // size={40}
                    className="form-control"
                    onChange={handleChange}
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
