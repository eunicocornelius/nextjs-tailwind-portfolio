import React from 'react'


function Intro({name, role, desc}) {
  return (
    <div className='text-center px-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>{name}</h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>{role}</h3>
        <p className='text-medium py-5 leading-8 text-gray-800 max-w-md md:max-w-xl mx-auto md:text-xl dark:text-gray-400'>
            {desc}
        </p>
    </div>
  )
}

export default Intro