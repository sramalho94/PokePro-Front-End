import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const Register = () => {
  const Navigate = useNavigate()
  const initialState = {
    userName: '',
    image: '',
    password: '',
    confirmPassword: ''
  }
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      userName: formValues.userName,
      image: formValues.image,
      password: formValues.password
    })
    setFormValues(initialState)
    Navigate('/login')
  }

  return (
    <div className="register-container">
      <div className="card-overlay">
        <form className="form-items" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="userName"> UserName: </label>
            <input
              onChange={handleChange}
              name="userName"
              type="text"
              placeholder="UserName"
              value={formValues.userName}
              className="input"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="image"> Image Link:</label>
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
            <label htmlFor="password">Password:</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="** password here **"
              value={formValues.password}
              className="input"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Confirm Password:</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="** password here **"
              value={formValues.confirmPassword}
              className="input"
              required
            />
          </div>
          <div className="submit-button-container">
            <button
              type="submit"
              className="submit-button"
              disabled={
                !formValues.userName ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
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

export default Register
