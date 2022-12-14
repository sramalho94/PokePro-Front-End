import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Trainer from '../components/Trainer'
import Search from './Search'

const Home = ({ user, authenticated }) => {
  const navigate = useNavigate()

  const [trainers, setTrainers] = useState(null)

  useEffect(() => {
    const getTrainers = async () => {
      const response = await axios.get(
        'https://pokepro-backend.herokuapp.com/api/trainers/'
      )
      setTrainers(response.data)
    }
    getTrainers()
  }, [])

  return user && authenticated ? (
    <div id="home-container">
      <header className="home-header">
        <h2 id="greet-user">
          I know you'll be a Pokemon master, {user.userName}
        </h2>
      </header>
      <div className="search-component-container">
        <Search trainersData={trainers} />
      </div>
      <main className="home-main">
        {trainers?.map((trainer) => (
          <Trainer
            key={trainer.id}
            id={trainer.id}
            name={trainer.name}
            image={trainer.image}
            sprite={trainer?.sprite}
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
