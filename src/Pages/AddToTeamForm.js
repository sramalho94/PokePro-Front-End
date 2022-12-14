import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AddToTeam } from '../services/Auth'
import Client from '../services/api'
import axios from 'axios'

const AddToTeamForm = () => {
  let { id } = useParams()
  const navigate = useNavigate()
  const intitialState = {
    pokemon_id: null,
    id: id
  }
  const [pokemons, setPokemon] = useState(null)
  const [formValues, setFormValues] = useState(intitialState)

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get(
        'https://pokepro-backend.herokuapp.com/api/pokemon/'
      )
      setPokemon(response.data)
    }
    getPokemon()
  }, [])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await AddToTeam({
      ...formValues
    })
    navigate(`/trainer_team/${id}`)
  }

  return (
    <div className="add-to-team-container">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="pokemon_id" className="form-header">
            Pokemon:
          </label>
          <select
            onChange={handleChange}
            name="pokemon_id"
            id="pokemon_id"
            required
          >
            <option value="">Choose a Pokemon</option>
            {pokemons?.map((pokemon) => (
              <option value={parseInt(pokemon.id)} key={pokemon.id}>
                {pokemon.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="form-button">
          {' '}
          Submit{' '}
        </button>
      </form>
    </div>
  )
}

export default AddToTeamForm
