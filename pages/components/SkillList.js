import React from 'react'
import Skill from './Skill'

function SkillList({skillsetList}) {
  return (
    <div className='lg:flex gap-10'>
        {
            skillsetList.map((skillset, index)=>{
                return <Skill key={index} title={skillset.title} image={skillset.image} desc={skillset.desc} toolTitle={skillset.toolTitle} tools={skillset.tools}/>
            })
        }
        
    </div>
  )
}

export default SkillList