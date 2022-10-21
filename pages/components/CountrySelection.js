import React from 'react'
import Flag from 'react-world-flags'

function CountrySelection({companies}) {
  return (
    <div className='text-center shadow-lg p-10 rounded-xl my-10 flex flex-col flex-1 dark:bg-gray-700'>
        <div id="flag-panel" className=" flex flex-1 rounded-lg flex-wrap">
            <div className='shadow-md rounded-md overflow-hidden mx-1 mb-2 border-solid border-black border-2'>
                <Flag code="ID" className='h-6 object-fill'/>
            </div>
            <div className='shadow-md rounded-md overflow-hidden mx-1 mb-2 border-solid border-black border-2'>
                <Flag code="DE" className='h-6 object-fill'/>
            </div>
        </div>
        <div id="flag-panel" className=" flex flex-1 rounded-lg flex-wrap bg-teal-400">
            <div className='shadow-md rounded-md overflow-hidden mx-1 mb-2 border-solid border-black border-2'>
                <Flag code="ID" className='h-6 object-fill'/>
            </div>
            <div className='shadow-md rounded-md overflow-hidden mx-1 mb-2 border-solid border-black border-2'>
                <Flag code="DE" className='h-6 object-fill'/>
            </div>
        </div>
    </div>
  )
}

export default CountrySelection