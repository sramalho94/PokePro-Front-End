import React from 'react'

const PokemonCard = ({ id, name, image, types, sprite }) => {
  return (
    <div className="pokemon-card">
      <div className="image-wrapper">
        <img src={sprite} className="pokemon-image" alt={name} />
      </div>
      <div className="pokemon-info">
        <div className="pokemon-name-container">
          <h2 className="header-text">{`${name}`}</h2>
          <div className="type-container">
            {types?.map((type) => (
              <h3 key={type} className="header-text">
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
