import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import axios from 'axios'
import Pokemon from '../components/Pokemon'

const TrainerTeam = () => {
  const { id } = useParams()
  const [teams, setTeams] = useState(null)
  const [trainer, setTrainer] = useState(null)

  useEffect(() => {
    const getTeams = async () => {
      const response = await Client.get(
        `https://pokepro-backend.herokuapp.com/api/teams/trainer/${id}`
      )
      setTrainer(response.data)
      setTeams(response.data.pokemon_team)
    }
    getTeams()
  }, [])

  return teams !== null ? (
    <div className="team-container">
      <h1>{trainer.name}'s team</h1>
      <div>
        <Link to={`/add_to_team/${id}`}>
          <button> Add to team </button>
        </Link>
      </div>
      {trainer.sprite && (
        <img src={trainer.sprite} className="team-trainer-sprite" />
      )}
      <div className="team-lineup">
        {teams?.map((pokemon) => (
          <Pokemon
            id={pokemon?.id}
            key={pokemon?.id}
            name={pokemon?.name}
            image={pokemon?.image}
            types={pokemon?.types}
            sprite={pokemon?.sprite}
            trainer={trainer.id}
          />
        ))}
      </div>
    </div>
  ) : null
}

export default TrainerTeam
