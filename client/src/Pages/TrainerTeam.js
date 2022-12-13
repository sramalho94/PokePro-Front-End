import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import axios from 'axios'
import Pokemon from '../components/Pokemon'

const TrainerTeam = ({ name }) => {
  const { id } = useParams()
  const [teams, setTeams] = useState(null)
  const [trainer, setTrainer] = useState(null)

  useEffect(() => {
    const getTeams = async () => {
      const response = await Client.get(
        `http://localhost:3001/api/teams/trainer/${id}`
      )
      setTrainer(response.data)
      setTeams(response.data.pokemon_team)
    }
    getTeams()
  }, [])
  return teams !== null ? (
    <div className="team-container">
      <h1>{trainer.name}'s team</h1>
      <img src={trainer.image} className="team-trainer-image" />
      <div className="team-lineup">
        {teams?.map((pokemon) => (
          <Pokemon
            id={pokemon?.id}
            key={pokemon?.id}
            name={pokemon?.name}
            image={pokemon?.image}
            types={pokemon?.types}
            trainer={trainer.id}
          />
        ))}
      </div>
    </div>
  ) : null
}

export default TrainerTeam
