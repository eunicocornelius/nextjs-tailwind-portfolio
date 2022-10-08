import React from 'react'
import Image from 'next/image'

function RoundedAvatar({avatar}) {
  return (
    <div>
      <div className='absolute mx-auto bg-black w-80 h-80 mt-20 ml-32 overflow-hidden mb-10 md:h-96 md:w-h-96  animate-blob-spin '/>
      <div className='relative mx-auto w-96 h-96  overflow-hidden mb-10 md:h-[36rem] md:w-[36rem] mix-blend-screen'>
        <div className='absolute mx-auto bg-gradient-to-b from-teal-500 to-white  w-96 h-96 md:h-[36rem] md:w-[36rem] '/>
        <div className='relative mx-auto w-96 h-96 overflow-hidden mt-20 md:h-96 md:w-96 '>
            <Image src={avatar} layout="fill" objectFit='cover' width={'500vh'} height={'500vh'}/>
        </div>
      </div>
    </div>
    // <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden mb-10 md:h-96 md:w-96 animate-blob transition-all '>
    //     <Image src={avatar} layout="fill" objectFit='cover'/>
    // </div>
  )
}

export default RoundedAvatar