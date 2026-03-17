import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {

    console.log(props)
    
  return (
    <div className='card'>
      <div className="header">
        <img src={props.job.logo} alt={props.job.company} />
        <button>Save <Bookmark /></button>
      </div>
      <div className="center">
        <h1>{props.job.company} {props.job.posted}</h1>
        <h1>{props.job.title}</h1>
        <p>{props.job.type}</p>
        <p>{props.job.mode}</p>
      </div>
      <div className="bot">
        <h1>{props.job.salary}</h1>
        <p>{props.job.location}</p>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
