import React from 'react'

export const ContactMe = () => {
  return (
    <div className='contactMe-container'>
      <div className='contactMe-heading'>
        <h2>Get in touch with me!</h2>
      </div>
      <div className='row'>
        <div className='col-md-6 col-xs-12 info'>
          <input
            className='form-control'
            placeholder='Name'
            name='name'
          />
          <input
            className='form-control'
            placeholder='Phone Number'
            phone='phone'
          />
          <input
            className='form-control'
            placeholder='Email'
            email='email'
          />
          <input
            className='form-control'
            placeholder='Subject'
            subject='subject'
          />
        </div>
        <div className='col-md-6 col-xs-12'>
          <textarea
            className='form-control'
            placeholder='Email'
            email='email'
          />
          <button className='btn btn-warning contact-btn' type='submit'>Contact Me</button>
        </div>

      </div>

    </div>

  )
}
