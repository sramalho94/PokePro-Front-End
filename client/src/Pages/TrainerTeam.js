import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import axios from 'axios'

const TrainerTeam = () => {
  const { id } = useParams()
  const [teams, setTeams] = useState(null)

  useEffect(() => {
    const getTeams = async () => {
      const response = await Client.get(
        `http://localhost:3001/api/teams/trainer/${id}`
      )
      setTeams(response.data.pokemon_team)
    }
    getTeams()
  }, [])
  return teams !== null ? <div>TrainerTeam</div> : null
}

export default TrainerTeam
