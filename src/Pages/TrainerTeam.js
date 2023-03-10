import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import Client from '../services/api'
import Pokemon from '../components/Pokemon'

const TrainerTeam = () => {
  const { id } = useParams()
  const [teams, setTeams] = useState(null)
  const [trainer, setTrainer] = useState(null)
  const [deletePokemon, setDeletePokemon] = useState(false)

  const getTeams = useCallback(async () => {
    const response = await Client.get(
      `https://pokepro-backend.herokuapp.com/api/teams/trainer/${id}`
    )
    setTrainer(response.data)
    setTeams(response.data.pokemon_team)
  }, [id, setTrainer, setTeams])

  useEffect(() => {
    getTeams()
  }, [deletePokemon, getTeams])

  const divStyle = {
    backgroundImage: 'url(/background.png)'
  }

  const bgStyle = {
    backgroundImage: 'url(/battlebg.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return teams !== null ? (
    <div id="team-container" className="bg-purple-300 h-screen" style={bgStyle}>
      <h1 className="text-center text-2xl font-bold pt-5 md:mt-10 md:text-4xl">
        {trainer.name}'s team
      </h1>
      <div>
        <Link
          to={`/add_to_team/${id}`}
          className="flex flex-row justify-center my-1"
        >
          <button className="font-bold p-1 bg-red-400 rounded-xl">
            {' '}
            Add to team{' '}
          </button>
        </Link>
      </div>
      {trainer.sprite && (
        <div className="flex flex-row justify-center mt-3 md:mt-10 ">
          <img
            src={trainer.sprite}
            className="h-32 p-3 bg-red-300 rounded-xl md:h-64"
            alt={trainer.name}
            style={divStyle}
          />
        </div>
      )}
      <div className="flex flex-wrap">
        {teams?.map((pokemon) => (
          <Pokemon
            id={pokemon?.id}
            key={pokemon?.id}
            name={pokemon?.name}
            image={pokemon?.image}
            types={pokemon?.types}
            sprite={pokemon?.sprite}
            trainer={trainer.id}
            getTeams={getTeams}
          />
        ))}
      </div>
    </div>
  ) : null
}

export default TrainerTeam
