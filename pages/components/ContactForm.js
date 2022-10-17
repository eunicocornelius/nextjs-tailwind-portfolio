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
    <div className='m-auto w-auto px-10 md:w-1/2 '>
        <div className='pt-10 pb-20'>
            <div className='text-6xl font-burtons pb-5 text-center'>
                Let&apos;s Talk
            </div>
            <div className='text-base text-center md:text-xl'>
                Thank you for viewing my portfolio till the end! If you have job enquiries, looking for collaboration, or just wanted to send me a message, feel free to fill in this form below.
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 pb-20'>
            <div className='flex flex-1 basis-1/2 gap-5 flex-wrap align-middle justify-center'>
                <input required type="text" name="user_name" placeholder='Name' className='sm:text-2xl flex-grow px-5 py-3 w-1/2 2xl:w-1/4 rounded-md bg-teal-600 placeholder-teal-grey'/>
                <input required type="email" name="user_email" placeholder='E-mail' className='sm:text-2xl flex-grow px-5 py-3 w-1/2 2xl:w-1/4 rounded-md bg-teal-600 placeholder-teal-grey'/>
            </div>
            <div className='flex flex-1 basis-1/2 align-middle justify-center'>
                <textarea required name="message" placeholder='Write down your thoughts...' maxLength='10000' className='sm:text-2xl flex-grow h-80 px-5 py-3 rounded-md bg-teal-600 placeholder-teal-grey'/>
            </div>
            <div className='flex flex-1 basis-1/2 align-middle justify-center pt-10'>
                <input type="submit" value="Send" className='bg-[#e9ed9f] hover:bg-[#d9de7c] active:bg-[#f0f3bd] text-black flex-grow py-3 rounded-md text-2xl font-bold'/>
            </div>
        </form>
    </div>
  )
}

export default ContactForm