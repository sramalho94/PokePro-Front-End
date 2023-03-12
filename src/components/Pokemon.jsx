import React from 'react'
import Client from '../services/api'
import { useState, useEffect } from 'react'

const Pokemon = ({ id, name, image, types, trainer, sprite, getTeams }) => {
  const [pokemonCounters, setPokemonCounters] = useState([])

  const handleDelete = async () => {
    const response = await Client.delete(
      `https://pokepro-backend.herokuapp.com/api/teams/trainer/${trainer}/pokemon/${id}`
    )
    getTeams()
  }

  const divStyle = {
    backgroundImage: 'url(/background.png)'
  }

  let countersForSearch = new Set()

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
      countersForSearch.add(weaknessTable[type])
    }

    countersForSearch = new Set([...countersForSearch, ...weaknesses])
    findCounter([...weaknesses])

    return (
      <div className="flex flex-col pb-3">
        <div className="flex flex-row">
          {Array.from(weaknesses).map((weakness) => (
            <p key={weakness} className="px-1">
              {weakness}
            </p>
          ))}
        </div>
        <div>
          <p className="font-bold">Counter with:</p>
          <div className="grid grid-cols-2 p-2 overflow-y-auto h-24">
            {pokemonCounters.map((pokemonCounter) => (
              <p key={pokemonCounter.pokemon.name} className="p-1">
                {pokemonCounter.pokemon.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const findCounter = async (types) => {
    let counters = []
    for (const type of types) {
      const url = `https://pokeapi.co/api/v2/type/${type}`
      try {
        const response = await fetch(url)
        const result = await response.json()
        const pokemonList = result.pokemon.slice(0, 8)
        counters = counters.concat(pokemonList)
      } catch (error) {
        console.log(error)
      }
    }
    return counters
  }

  useEffect(() => {
    const getPokemonCounters = async () => {
      const counters = await findCounter(Array.from(countersForSearch))
      setPokemonCounters(counters)
    }
    getPokemonCounters()
  }, [countersForSearch])

  return (
    <div
      id="pokemon-card"
      className="flex flex-col align-middle p-1 rounded-xl m-1 bg-purple-200 mt-2 md:p-10"
    >
      <div className="pokemon-name-wrapper">
        <h2 className="font-bold text-2xl text-center">{name}</h2>
      </div>
      <div className="pokemon-wrapper">
        <div className="flex flex-row justify-center">
          <img
            src={sprite}
            alt={id}
            className="p-1 rounded-xl md:p-10"
            style={divStyle}
          />
        </div>
        <div className="pokemon-types">
          <p className="font-bold">type:</p>
          <div className={`p-4 text-white rounded-lg border-white`}>
            {types.map((type) => (
              <div key={type}>{type}</div>
            ))}
          </div>
          <p className="font-bold">Weak to:</p>
          <div className="flex flex-row">{findWeakness(types)}</div>
        </div>
      </div>
      <div className="flex flex-row justify-center align-bottom">
        <button onClick={handleDelete} className="button">
          {' '}
          Remove
        </button>
      </div>
    </div>
  )
}

export default Pokemon
