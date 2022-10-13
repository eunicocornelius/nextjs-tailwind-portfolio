import React from 'react'
import Image from 'next/image'

function Portfolio({portfolioList}) {
  return (
    <div className='flex flex-col gap-20 py-10 lg:flex-row lg:flex-wrap'>
        {
            portfolioList?.map((portfolio, index)=>{
                return(
                    <div className='basis-1/3 flex-1 rounded-xl overflow-hidden' href={portfolio.url} key={index}>
                        <a href={portfolio.url} target="_blank" rel="noopener noreferrer">
                            <Image src={portfolio.image} className=' object-cover hover:scale-110 transition-all ease-in-out' width={'40%'} height={'20%'} layout='responsive'/>
                        </a>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Portfolio