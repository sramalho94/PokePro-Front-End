import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddPokemon } from '../services/Auth'

const AddPokemonForm = () => {
  let types = []
  const Navigate = useNavigate()
  const initialState = {
    name: '',
    image: '',
    type1: '',
    type2: null,
    sprite: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    types.push(formValues.type1.toLowerCase())
    if (formValues.type2) {
      types.push(formValues.type2.toLowerCase())
    }
    await AddPokemon({
      name: formValues.name,
      image: formValues.image,
      types: types,
      sprite: formValues.sprite
    })
    setFormValues(initialState)
    Navigate('/')
  }
  return (
    <div className="add-pokemon-container">
      <img
        src="https://archives.bulbagarden.net/media/upload/3/36/Spr_5b_448.png"
        alt="lucario"
      />
      <div className="card-overlay">
        <form className="form-items" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="name"> name: </label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="name"
              value={formValues.name}
              className="input"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="image"> image-url: </label>
            <input
              onChange={handleChange}
              name="image"
              type="text"
              placeholder="image"
              value={formValues.image}
              className="input"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="type1"> First Type: </label>
            <input
              onChange={handleChange}
              name="type1"
              type="text"
              placeholder="type 1"
              value={formValues.type1}
              className="input"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="type2"> Second Type: </label>
            <input
              onChange={handleChange}
              name="type2"
              type="text"
              placeholder="type 2"
              value={formValues.type2}
              className="input"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="sprite"> Sprite: </label>
            <input
              onChange={handleChange}
              name="sprite"
              type="text"
              placeholder="sprite"
              value={formValues.sprite}
              className="input"
              required
            />
          </div>
          <div className="submit-button-container">
            <button
              type="submit"
              className="button"
              disabled={
                !formValues.name ||
                !formValues.image ||
                !formValues.sprite ||
                !formValues.type1
              }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPokemonForm
