import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PokemonCard from '../components/PokemonCard'
import { NavLink, Link } from 'react-router-dom'

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

  return (
    <div className="pokemon-list-container">
      <NavLink to="/create_pokemon" className="button">
        Add Pokemon
      </NavLink>
      <div className="pokemon-list-header">Pokemon:</div>
      <div className="pokemon-list">
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
