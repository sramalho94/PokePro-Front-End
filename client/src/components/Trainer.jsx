import React from 'react'
import { Link } from 'react-router-dom'

const Trainer = ({id, name, image }) => {
  return (
    <div className='trainer-card' key={id}>
      <div className='image-wrapper'>
        {/* open link here */}
        <img src={image} alt={`Pic of trainer: ${name}`}/>
        {/* close link here */}
      </div>
      <div className='trainer-info'>
        <Link to={`trainer_team/${id}`} 
        name = {name}
        >
        <h2>{` Trainer: ${name}`}</h2>
        </Link>
      </div>
    </div>
  )
}

export default Trainer