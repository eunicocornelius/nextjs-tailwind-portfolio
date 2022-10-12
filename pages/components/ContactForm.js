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
    <div>
        <form ref={form} onSubmit={sendEmail}>
            <div>
                <label>Name</label>
                <input type="text" name="user_name" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="user_email" />
            </div>
            <div>
                <label>Message</label>
                <textarea name="message" />
            </div>
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default ContactForm