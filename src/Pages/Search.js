import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import Trainer from '../components/Trainer'

const Search = ({ trainersData }) => {
  const initialState = {
    id: null
  }

  const [trainers, setTrainers] = useState(null)
  const [trainer, setTrainer] = useState(null)
  const [formValues, setFormValues] = useState(initialState)

  useEffect(() => {
    const getTrainers = async () => {
      setTrainers(trainersData)
    }
    getTrainers()
  }, [])

  const getTrainer = async () => {
    const response = await Client.get(
      `https://pokepro-backend.herokuapp.com/api/trainers/id/${formValues.id}`
    )
    console.log(response.data)
    setTrainer(response.data)
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    getTrainer()
  }

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label className="form-header" htmlFor="id">
              Search A Trainer
            </label>
            <select onChange={handleChange} name="id" required>
              <option value=""> Trainers </option>
              {trainers?.map((trainer) => (
                <option key={trainer.id} value={trainer.id}>
                  {trainer.name}
                </option>
              ))}
            </select>
          </div>
          <button> Search </button>
        </form>
        {trainer && (
          <div>
            <h1>Search Results</h1>
            <Trainer
              key={trainer.id}
              id={trainer.id}
              name={trainer.name}
              image={trainer.image}
              sprite={trainer?.sprite}
            />
            <h1>End of Search Results</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
