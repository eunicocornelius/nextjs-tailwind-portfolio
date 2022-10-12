import React from 'react'
import Image from 'next/image'

// TODO: fix the masking on dark mode

function RoundedAvatar({avatar}) {
  return (
    //  == Rotating animated blob ==
    // <div>
    //   <div className='absolute mx-auto bg-black w-80 h-80 mt-20 ml-20 overflow-hidden mb-10 md:h-96 md:w-96  animate-blob-spin '/>
    //   <div className='relative mx-auto w-96 h-96  overflow-hidden mb-10 md:h-[36rem] md:w-[36rem] mix-blend-screen'>
    //     <div className='absolute mx-auto bg-gradient-to-b from-teal-500 to-white  w-96 h-96 md:h-[36rem] md:w-[36rem] '/>
    //     <div className='relative mx-auto w-96 h-96 overflow-hidden mt-20 md:h-96 md:w-96 '>
    //         <Image src={avatar} layout="fill" objectFit='cover' />
    //     </div>
    //   </div>
    // </div>

    //  == Animated Blob ==
    // <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden mb-10 md:h-96 md:w-96 animate-blob transition-all '>
    //     <Image src={avatar} layout="fill" objectFit='cover'/>
    // </div>

    // Normal rounded frame
    <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-14 overflow-hidden mb-10 md:h-96 md:w-96 '>
        <Image src={avatar} layout="fill" objectFit='cover'/>
    </div>
  )
}

export default RoundedAvatar