import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'

function Navbar({resume, darkMode, handleDarkMode}) {
  return (
    <nav className='py-10 md:mb-12 flex justify-between'>
        <h1 className=' text-xl font-burtons dark:text-white md:text-3xl'>Eunico Cornelius</h1>
        <ul className='flex items-center'>
            <li><BsFillMoonStarsFill onClick={handleDarkMode} className=' cursor-pointer text-xl dark:text-white'/></li>
            <li><a className='bg-gradient-to-bl from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:bg-gradient-to-tr hover:ease-in-out hover:transition-all' href={resume} download>Resume</a></li>
        </ul>
    </nav>
  )
}

export default Navbar