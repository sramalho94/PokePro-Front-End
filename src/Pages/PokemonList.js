import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from '../components/PokemonCard'
import { NavLink } from 'react-router-dom'

const PokemonList = () => {
  const [Pokemon, setPokemon] = useState(null)

  const getPokemon = async () => {
    let response = await axios.get(
      'https://pokepro-backend.herokuapp.com/api/pokemon/'
    )
    setPokemon(response.data)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  const divStyle = {
    backgroundImage: 'url(/background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div className="min-h-screen" style={divStyle}>
      <div className="text-3xl text-center font-bold underline mb-3">
        Pokemon:
      </div>
      <div className="flex flex-row justify-center">
        <NavLink
          to="/create_pokemon"
          className="p-1 mx-auto bg-white rounded-xl"
        >
          Add Pokemon
        </NavLink>
      </div>
      <div className="grid grid-cols-2 md:grid md:grid-cols-4">
        {Pokemon?.map((pokemon) => (
          <div className="pokemon-card-container" key={pokemon.id}>
            <PokemonCard
              name={pokemon.name}
              types={pokemon.types}
              image={pokemon.image}
              id={pokemon.id}
              sprite={pokemon.sprite}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonList
