import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


// Email validation left with useForm!!

export const ContactMe = () => {

  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const serviceID = 'service_ID';
  const templateID = 'template_ID';
  const publicKEY = 'ESLs3wkKC4hEs1IU0';

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKEY)
      .then((result) => {
          console.log(result.text);
          setIsSent(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contactMe-container'>
      <div className='contactMe-heading'>
        <h2>Get in touch with me!</h2>
      </div>
      <form ref={form} onSubmit={sendEmail}>
      <div className='row'>
        <div className='col-md-6 col-xs-12 info'>
          <input
            className='form-control'
            placeholder='Full Name'
            name='name'
          />
          <input
            className='form-control'
            placeholder='Phone Number'
            name='phone'
          />
          <input
            className='form-control'
            placeholder='Email'
            name='email'
          />
          <input
            className='form-control'
            placeholder='Subject'
            name='subject'
          />
        </div>
        <div className='col-md-6 col-xs-12'>
          <textarea
            type='text'
            className='form-control'
            placeholder='Please provide a brief message.'
            name='description'
          />
          <button className='btn btn-warning contact-btn' type='submit'>Contact Me</button>
          {isSent && <p>Message sent successfully!</p>}
        </div>

      </div>
      </form>

    </div>

  )
}
