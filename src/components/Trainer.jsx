import React from 'react'
import { Link } from 'react-router-dom'

const Trainer = ({ id, name, image, sprite }) => {
  return (
    <div className="w-full p-2" key={id}>
      <div className="flex flex-row justify-center">
        <img src={image} alt={`Pic of trainer: ${name}`} className="h-52" />
      </div>
      <div className="p-2">
        <Link
          to={`trainer_team/${id}`}
          name={name}
          sprite={sprite}
          className="flex flex-row justify-center"
        >
          <h2 className="font-bold p-1 bg-white rounded-xl">{`${name}`}</h2>
        </Link>
      </div>
    </div>
  )
}

export default Trainer
