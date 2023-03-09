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
    <div className="flex flex-row justify-center py-3">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="mr-3  font-bold" htmlFor="id">
              Search A Trainer:
            </label>
            <select
              onChange={handleChange}
              name="id"
              required
              className="mr-3 "
            >
              <option value=""> Trainers </option>
              {trainers?.map((trainer) => (
                <option key={trainer.id} value={trainer.id} className="option">
                  {trainer?.name}
                </option>
              ))}
            </select>
            <button className="p-1 mb-3 bg-[#ee1515] rounded-lg hover:bg-white">
              {' '}
              Search{' '}
            </button>
          </div>
        </form>

        {trainer && (
          <div className="flex flex-col align-middle p-3 bg-red-400 rounded-lg">
            <div className="text-center font-bold md:text-2xl ">
              Search Result
            </div>
            <Trainer
              key={trainer.id}
              id={trainer.id}
              name={trainer.name}
              image={trainer.image}
              sprite={trainer?.sprite}
            />

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
