import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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

  const divStyle = {
    backgroundImage: 'url(/background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div
      className="flex flex-col justify-center align-middle min-h-screen"
      style={divStyle}
    >
      <div className="flex flex-row justify-center">
        <img
          src="https://archives.bulbagarden.net/media/upload/6/6d/Spr_5b_093.png"
          alt="haunter"
          className="h-56 w-56"
        />
      </div>
      <div className="flex flex-row justify-center mx-auto">
        <form
          className="flex flex-col justify-center align-middle"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between text-lg font-bold">
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
          <div className="flex justify-between text-lg font-bold">
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
          <div className="flex justify-between text-lg font-bold">
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
          <div className="flex justify-between text-lg font-bold">
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
          <div className="flex flex-row justify-center">
            <button
              type="submit"
              className="p-1 m-1 rounded-lg bg-white"
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
