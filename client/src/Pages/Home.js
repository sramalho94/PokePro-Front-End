import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = ({ user, authenticated }) => {
  const navigate = useNavigate()

  const [trainers, setTrainers] = useState(null)

  useEffect(() => {
    const getTrainers = async () => {
      const response = await axios.get('http://localhost:3001/api/trainers/')
      setTrainers(response.data)
    }
    getTrainers()
  }, [])

  return user && authenticated ? (
    <div>Home</div>
  ) : (
    <div className="protected">
      <h3 className="protected-prompt">
        To be the very best you must be logged in!
      </h3>
      <button className="form-button" onClick={() => navigate('/login')}>
        Login
      </button>
    </div>
  )
}

export default Home
