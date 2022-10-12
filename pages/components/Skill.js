import React from 'react'
import Image from 'next/image'

function Skill({title, image, desc, toolTitle, tools}) {
  return (
    <div className='text-center shadow-lg p-10 rounded-xl my-10 flex-1 dark:bg-gray-700'>
      <Image src={image} width={100} height={100}/>
      <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>{title}</h3>
      <p className='py-2 dark:text-gray-300'>{desc}</p>
      <h4 className=' py-4 text-teal-600'>{toolTitle}</h4>
      {
        tools.map((tool, index) => {
            return <p key={index} className=' text-gray-800 py-1 dark:text-gray-400'>{tool}</p>
        })
      }
    </div>
  )
}

export default Skill