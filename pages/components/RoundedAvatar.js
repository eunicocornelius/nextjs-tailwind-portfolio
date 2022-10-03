import React from 'react'
import Image from 'next/image'

function RoundedAvatar({avatar}) {
  return (
    <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden mb-10 md:h-96 md:w-96'>
        <Image src={avatar} layout="fill" objectFit='cover'/>
    </div>
  )
}

export default RoundedAvatar