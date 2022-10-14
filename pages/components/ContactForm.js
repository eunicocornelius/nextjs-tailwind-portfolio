import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

// @TODO: Fix the layout and Disable the input field once submited.

function ContactForm() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_contact_form', 'template_contact_form', form.current, 'fp9jsGVohbyYXll1m')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset()
    }

  return (
    <div className='m-auto w-1/2 '>
        <div className='text-6xl font-burtons py-10'>
            Let&apos;s Talk
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <label>Name</label>
                <input type="text" name="user_name" placeholder='Name'/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="user_email" placeholder='E-mail'/>
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" placeholder='Write down your thoughts...' maxLength='10000'/>
            </div>
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default ContactForm