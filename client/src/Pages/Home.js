import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Trainer from '../components/Trainer'

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
    <div id="home-container">
      <header className="home-header">
        <h2 className="greet-user">
          I know you'll be a Pokemon master, {user.userName}
        </h2>
      </header>
      <main className="home-main">
        {trainers?.map((trainer) => (
          <Trainer
            key={trainer.id}
            id={trainer.id}
            name={trainer.name}
            image={trainer.image}
          />
        ))}
      </main>
    </div>
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
