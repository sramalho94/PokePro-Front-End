import React from 'react'
import { Link } from 'react-router-dom'

const Trainer = ({id, name, image, sprite }) => {
  return (
    <div className='trainer-card' key={id}>
      <div className='image-wrapper'>
        <img src={image} alt={`Pic of trainer: ${name}`} className="trainer-image"/>
      </div>
      <div className='trainer-info'>
        <Link to={`trainer_team/${id}`} 
        name = {name}
        sprite = {sprite}
        >
          <div className='trainer-name-container'>
        <h2 className='header-text'>{`${name}`}</h2>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Trainer