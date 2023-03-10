import React from 'react'
import Client from '../services/api'

const Pokemon = ({ id, name, image, types, trainer, sprite, getTeams }) => {
  const handleDelete = async () => {
    const response = await Client.delete(
      `https://pokepro-backend.herokuapp.com/api/teams/trainer/${trainer}/pokemon/${id}`
    )
    getTeams()
  }

  const divStyle = {
    backgroundImage: 'url(/background.png)'
  }
  const findWeakness = (types) => {
    const weaknessTable = {
      grass: 'fire',
      poison: 'ground',
      normal: 'fighting',
      fire: 'water',
      water: 'electric',
      electric: 'ground',
      ice: 'fighting',
      ground: 'grass',
      fighting: 'fairy',
      flying: 'electric',
      psychic: 'bug',
      bug: 'fire',
      rock: 'water',
      ghost: 'dark',
      dragon: 'ice',
      dark: 'bug',
      steel: 'ice',
      fairy: 'steel'
    }
    let weaknesses = new Set()
    for (let type of types) {
      weaknesses.add(weaknessTable[type])
    }
    weaknesses = Array.from(weaknesses)

    return (
      <div>
        {weaknesses.map((weakness) => (
          <p key={weakness}>{weakness}</p>
        ))}
      </div>
    )
  }
  return (
    <div
      id="pokemon-card"
      className="flex flex-col align-middle p-1 rounded-xl mx-auto"
    >
      <div className="pokemon-name-wrapper">
        <h2 className="header-text">{name}</h2>
      </div>
      <div className="pokemon-wrapper">
        <div className="pokemon-image-wrapper">
          <img
            src={sprite}
            alt={id}
            className="p-1 rounded-xl"
            style={divStyle}
          />
        </div>
        <div className="pokemon-types">
          <p>type:</p>
          <div
            className="flex flex-wrap
          "
          >
            {types.map((type) => (
              <div
                className={`p-1 text-black rounded-lg border-white bg-${type}`}
                key={type}
              >
                {type}
              </div>
            ))}
          </div>
          <p>Weak to:</p>
          {findWeakness(types)}
        </div>
      </div>
      <div className="remove-pokemon-button">
        <button onClick={handleDelete} className="button">
          {' '}
          Remove
        </button>
      </div>
    </div>
  )
}

export default Pokemon
