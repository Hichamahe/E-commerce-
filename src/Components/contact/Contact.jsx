import React, { useState } from 'react';
import './contact.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Contact() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic, such as sending data to a server

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
  return (
    <>
    <Header />
    <div className="container">
    <div className='contact-us'>
    <div className='row'>
    <div className='col-lg-6 col-md-6 col-sm-0 d-flex align-items-center'>
      <img src={require('./image/contact cover.jpg')} alt='contact' />
    </div>
    <div className='col-lg-6 col-md-6 d-flex col-sm-12 flex-column m-0 p-0'>
      <h1 style={{display:"flex",justifyContent:"center", margin:"18px"}}>contact us</h1>
      <div className='form-group'>
      <div className='form-contact'>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Full Name'
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='email'
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='message'
        ></textarea>

      <button type="submit">Send</button>
    </form>
      </div>
      <div className='info'>
      <h3>Contact</h3>
      <h6>shooping@hom.com</h6>
      <h3>Based in</h3>
      <h6>Casablanca</h6>
      <h6>Maarif</h6>
      <div className='social-media'>
      <i className="bi bi-facebook"></i>
      <i className="bi bi-instagram"></i>
      <i className="bi bi-whatsapp"></i>
      </div>
      </div>
      </div>

    </div>
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact