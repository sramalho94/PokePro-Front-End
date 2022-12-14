import React from 'react'
import { UpdateUser } from '../services/Auth'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUserPage = () => {
  let navigate = useNavigate()
  let { id } = useParams()

  const intitialState = {
    userName: '',
    image: '',
    id: id
  }

  const [formState, setFormState] = useState(intitialState)

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(
        `https://pokepro-backend.herokuapp.com/api/users/${id}`
      )
      setFormState(res.data)
    }
    getUser()
  }, [])
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await UpdateUser({ ...formState })
    navigate('/')
  }
  return (
    <div className="User-Info-container">
      <div>
        <img
          src="https://archives.bulbagarden.net/media/upload/3/3d/Spr_5b_009.png"
          alt="blastoise"
        />
      </div>
      <form onSubmit={handleSubmit} className="info-form">
        <div className="input-wrapper">
          <label htmlFor="userName" className="form-header">
            New UserName:
          </label>
          <input
            type="text"
            id="userName"
            onChange={handleChange}
            value={formState.userName}
            required
            className="input"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="image" className="form-header">
            New Image URL:
          </label>
          <input
            type="text"
            id="image"
            onChange={handleChange}
            value={formState.image}
            required
            className="input"
          />
        </div>
        <button type="submit" className="button">
          {' '}
          Submit{' '}
        </button>
      </form>
    </div>
  )
}

export default EditUserPage
