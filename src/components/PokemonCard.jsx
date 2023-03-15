import React from 'react'

const PokemonCard = ({ id, name, image, types, sprite }) => {
  return (
    <div className="flex flex-col justify-center align-middle m-3 bg-purple-400 rounded-lg shadow-xl md:mx-20">
      <div className="flex flex-row justify-center">
        <img
          src={sprite}
          className="p-1 bg-pink-500 rounded-lg mt-3 shadow-xl"
          alt={name}
        />
      </div>
      <div className="pokemon-info">
        <div className="flex flex-col justify-center pt-2">
          <h2 className="p-1 font-rubik-puddles text-center">{`${name}`}</h2>
          <div className="flex flex-row justify-center">
            {types?.map((type) => (
              <h3 key={type} className={`p-1 font-rubik-iso text-${type}`}>
                {type}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
