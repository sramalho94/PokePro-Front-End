import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import Trainer from '../components/Trainer'

const Search = () => {
  const initialState = {
    id: null
  }

  const [trainers, setTrainers] = useState(null)
  const [trainer, setTrainer] = useState(null)
  const [formValues, setFormValues] = useState(initialState)

  const getTrainers = async () => {
    const response = await Client.get(
      `https://pokepro-backend.herokuapp.com/api/trainers/`
    )
    setTrainers(response.data)
  }

  useEffect(() => {
    getTrainers()
  }, [])

  const getTrainer = async () => {
    const response = await Client.get(
      `https://pokepro-backend.herokuapp.com/api/trainers/id/${formValues.id}`
    )
    setTrainer(response.data)
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    getTrainer()
  }

  const handleHide = () => {
    setTrainer(null)
  }

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label className="form-header" htmlFor="id">
              Search A Trainer:
            </label>
            <select onChange={handleChange} name="id" required>
              <option value=""> Trainers </option>
              {trainers?.map((trainer) => (
                <option key={trainer.id} value={trainer.id} className="option">
                  {trainer?.name}
                </option>
              ))}
            </select>
            <button className="button"> Search </button>
          </div>
        </form>

        {trainer && (
          <div>
            <div>Search Results</div>
            <Trainer
              key={trainer.id}
              id={trainer.id}
              name={trainer.name}
              image={trainer.image}
              sprite={trainer?.sprite}
            />
            <div>End of Search Results</div>
            <button onClick={handleHide} className="button">
              Hide Search
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
