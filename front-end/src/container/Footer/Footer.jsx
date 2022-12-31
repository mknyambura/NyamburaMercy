import React, { useState, useRef } from 'react';

import emailjs from '@emailjs/browser'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();
  

  const { name, email, message } = formData;

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((error) => console.log(error));
  };

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('kariuki.mercie', 'kariuki.mercie', form.current, 'OEHQRwCUzRHmsO7ti')
      .then((response) => {
        console.log(response.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };


  return (
    <>
      <h2 className="head-text">Buy me a Coffee</h2>
      <div className="footer-cards">
        <div className="footer-card">
          <img src={images.email} alt="email" />
          {/* <a href="mailto:mercie.dev@gmail.com" className='p-text'>mercie.dev@gmail.com</a> */}
        </div>
        {/* <div className="footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+254112371751" className='p-text'>+254112371751</a>
        </div> */}
      </div>

      {!isFormSubmitted ? (
        <form ref={form} onClick={sendEmail} className="footer-form flex">
          {/* <div className="flex"> */}
          <input type="text" placeholder='Your Name' className="p-text" value={name} name="name" onChange={handleChangeInput} required/>
          {/* </div> */}
          {/* <div className="flex"> */}
          <input type="text" placeholder='Your Email' className="p-text" value={email} name="email" onChange={handleChangeInput} required/>
          {/* </div> */}
  
          {/* <div> */}
          <textarea className="p-text" name="message" placeholder="Your Message" onChange={handleChangeInput} required/>
          {/* </div> */}
          <button className="p-text" type='button' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </form>
        ) : ( 
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'footer'),
  'footer',
  'white-background',
);