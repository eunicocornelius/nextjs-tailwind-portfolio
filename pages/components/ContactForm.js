import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';

// @TODO: Fix the layout and Disable the input field once submited.

function ContactForm() {

    const form = useRef();
    const wiggleTitleRef = useRef();

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

    

    // const wiggleElements = document.querySelectorAll('.contactform-title')
    // wiggleElements.forEach((el) => wiggleObserver.observe(el))

    useEffect(() => {
        const wiggleObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if(entry.isIntersecting){
                    entry.target.classList.add('animate-wiggle');
                } else {
                    entry.target.classList.remove('animate-wiggle');
                }
            })
        })

        wiggleObserver.observe(wiggleTitleRef.current)
    })

  return (
    <div className='m-auto w-auto px-10 md:w-1/2 '>
        <div className='pt-10 pb-20'>
            <div className='text-6xl font-burtons pb-5 text-center' ref={wiggleTitleRef}>
                Let&apos;s Talk
            </div>
            <div className='text-base text-center md:text-xl'>
                Thank you for viewing my portfolio till the end! If you have job enquiries, looking for collaboration, or just wanted to send me a message, feel free to fill in this form below.
            </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5 pb-20'>
            <div className='flex flex-1 basis-1/2 gap-5 flex-wrap align-middle justify-center'>
                <input required type="text" name="user_name" placeholder='Name' className='sm:text-2xl flex-grow px-5 py-3 w-1/2 2xl:w-1/4 rounded-md bg-teal-600 placeholder-teal-grey dark:bg-blue-grey dark:placeholder-dark-blue-grey'/>
                <input required type="email" name="user_email" placeholder='E-mail' className='sm:text-2xl flex-grow px-5 py-3 w-1/2 2xl:w-1/4 rounded-md bg-teal-600 placeholder-teal-grey dark:bg-blue-grey dark:placeholder-dark-blue-grey'/>
            </div>
            <div className='flex flex-1 basis-1/2 align-middle justify-center'>
                <textarea required name="message" placeholder='Write down your thoughts...' maxLength='10000' className='sm:text-2xl flex-grow h-80 px-5 py-3 rounded-md bg-teal-600 placeholder-teal-grey dark:bg-blue-grey dark:placeholder-dark-blue-grey'/>
            </div>
            <div className='flex flex-1 basis-1/2 align-middle justify-center pt-10'>
                <input type="submit" value="Send" className='bg-creamyyellow-normal hover:bg-creamyyellow-dark active:bg-creamyyellow-light text-black flex-grow py-3 rounded-md text-2xl font-bold dark:text-white dark:bg-creamyblue-normal dark:hover:bg-creamyblue-dark dark:active:bg-creamyblue-light'/>
            </div>
        </form>
    </div>
  )
}

export default ContactForm