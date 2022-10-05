import React from 'react'
import Image from 'next/image'

function Portfolio({portfolioList}) {
  return (
    <div className='flex flex-col gap-20 py-10 lg:flex-row lg:flex-wrap'>
        {
            portfolioList.map((portfolio)=>{
                return(
                    <div className='basis-1/3 flex-1' href={portfolio.url}>
                        <a href={portfolio.url} target="_blank">
                            <Image src={portfolio.image} className='rounded-lg object-cover' width={'100%'} height={'50%'} layout='responsive'/>
                        </a>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Portfolio