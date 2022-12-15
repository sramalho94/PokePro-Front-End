import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { SignInUser } from '../services/Auth'

const Login = ({ toggleAuthenticated, setUser }) => {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({ userName: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ userName: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/welcome')
  }

  return (
    <div className="login-container">
      <div className="card-overlay">
        <form onSubmit={handleSubmit} className="login-form">
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
          <button
            disabled={!formValues.userName || !formValues.password}
            className="button"
          >
            Login
          </button>
          <span id="register-container">
            <h3> Don't have an account? &nbsp;</h3>
            <Link to="/register"> Register Here </Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login
