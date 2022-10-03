import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

function SocialMedia({socialList}) {
  return (
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
        <a href={socialList.github} target="_blank"><AiFillGithub/></a>
        <a href={socialList.linkedin} target="_blank"><AiFillLinkedin/></a>
        <a href={socialList.instagram} target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default SocialMedia