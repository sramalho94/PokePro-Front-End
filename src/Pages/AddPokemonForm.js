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

  const divStyle = {
    backgroundImage: 'url(/background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
  return (
    <div
      className="flex flex-col min-h-screen justify-center "
      style={divStyle}
    >
      <div className="flex flex-row justify-center">
        <img
          src="https://archives.bulbagarden.net/media/upload/3/36/Spr_5b_448.png"
          alt="lucario"
          className="h-56 w-56"
        />
      </div>
      <div className="flex flex-row justify-center ">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="flex justify-between py-1">
            <label htmlFor="name" className="font-bold">
              {' '}
              name:{' '}
            </label>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="name"
              value={formValues.name}
              className="rounded-xl"
              required
            />
          </div>
          <div className="flex justify-between py-1">
            <label htmlFor="image" className="font-bold">
              {' '}
              image-url:{' '}
            </label>
            <input
              onChange={handleChange}
              name="image"
              type="text"
              placeholder="image"
              value={formValues.image}
              className="rounded-xl"
              required
            />
          </div>
          <div className="flex justify-between py-1">
            <label htmlFor="type1" className="font-bold">
              {' '}
              First Type:{' '}
            </label>
            <input
              onChange={handleChange}
              name="type1"
              type="text"
              placeholder="type 1"
              value={formValues.type1}
              className="rounded-xl"
              required
            />
          </div>
          <div className="flex justify-between py-1">
            <label htmlFor="type2" className="font-bold">
              {' '}
              Second Type:{' '}
            </label>
            <input
              onChange={handleChange}
              name="type2"
              type="text"
              placeholder="type 2"
              value={formValues.type2}
              className="rounded-xl"
            />
          </div>
          <div className="flex justify-between py-1">
            <label htmlFor="sprite" className="font-bold">
              {' '}
              Sprite:{' '}
            </label>
            <input
              onChange={handleChange}
              name="sprite"
              type="text"
              placeholder="sprite"
              value={formValues.sprite}
              className="rounded-xl"
              required
            />
          </div>
          <div className="flex flex-row justify-center py-1 rounded-xl bg-white mx-auto">
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
