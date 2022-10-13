import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

function SocialMedia({socialList}) {
  return (
    <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
        <a href={socialList?.github} target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
        <a href={socialList?.linkedin} target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
        <a href={socialList?.instagram} target="_blank" rel="noopener noreferrer"><AiFillInstagram/></a>
    </div>
  )
}

export default SocialMedia