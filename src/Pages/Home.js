import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Trainer from '../components/Trainer'
import Search from './Search'

const Home = ({ user, authenticated }) => {
  const navigate = useNavigate()

  const [trainers, setTrainers] = useState(null)

  const getTrainers = async () => {
    const response = await axios.get(
      'https://pokepro-backend.herokuapp.com/api/trainers/'
    )
    setTrainers(response.data)
  }

  useEffect(() => {
    getTrainers()
  }, [])

  const divStyle = {
    backgroundImage: 'url(/background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
  return user && authenticated ? (
    <div id="home-container" style={divStyle} className="min-h-screen">
      <header className="flex flex-row justify-center text-xl p-2 font-bold text-[#ee1515] md:text-4xl">
        <h2>I know you'll be a Pokemon master, {user.userName}!</h2>
      </header>
      <div className="search-component-container">
        <Search />
      </div>
      <main className="home-main grid grid-cols-2 lg:grid-cols-3 ">
        {trainers?.map((trainer) => (
          <Trainer
            key={trainer.id}
            id={trainer.id}
            name={trainer.name}
            image={trainer.image}
            sprite={trainer?.sprite}
            getTrainerData={getTrainers}
            divStyle={divStyle}
          />
        ))}
      </main>
    </div>
  ) : (
    <div
      className="flex flex-col justify-center align-middle min-h-screen"
      style={divStyle}
    >
      <h3 className="text-center text-xl font-bold">
        To be the very best you must be logged in!
      </h3>
      <button
        className="m-1 p-1 rounded-lg bg-white mx-auto"
        onClick={() => navigate('/login')}
      >
        Login
      </button>
    </div>
  )
}

export default Home
