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

  const divStyle = {
    backgroundImage: 'url(/background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div
      className="min-h-screen flex flex-col justify-center align-middle mx-auto"
      style={divStyle}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center align-middle"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-center">
            <img
              src="https://archives.bulbagarden.net/media/upload/6/6f/Spr_5b_038.png"
              alt="ninetails"
            />
          </div>
          <label
            htmlFor="pokemon_id"
            className="mx-auto my-auto text-xl font-bold"
          >
            Pokemon:
          </label>
          <select
            onChange={handleChange}
            name="pokemon_id"
            id="pokemon_id"
            required
            className="mx-auto my-auto"
          >
            <option value="" className="choose-pokemon">
              Choose a Pokemon
            </option>
            {pokemons?.map((pokemon) => (
              <option
                value={parseInt(pokemon.id)}
                key={pokemon.id}
                className="option"
              >
                {pokemon.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="p-1  m-1 rounded-lg bg-white mx-auto ">
          {' '}
          Submit{' '}
        </button>
      </form>
    </div>
  )
}

export default AddToTeamForm
