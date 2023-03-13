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

  const divStyle = {
    backgroundImage: 'url(/background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div
      className="flex flex-col min-h-screen justify-center align-middle mx-auto my-auto"
      style={divStyle}
    >
      <div className="flex flex-row justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center align-middle"
        >
          <div className="input-wrapper">
            <label htmlFor="userName" className="text-xl font-bold">
              {' '}
              UserName:{' '}
            </label>
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
            <label htmlFor="password" className="text-xl font-bold pr-3">
              Password:
            </label>
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
            className="m-1 p-1 rounded-lg bg-white mx-auto"
          >
            Login
          </button>
          <h5>userName: admin password:admin</h5>
          <span id="register-container">
            <h3 className="text-lg font-bold">
              {' '}
              Don't have an account? &nbsp;
            </h3>
            <Link to="/register" className="m-1 p-1 rounded-lg bg-white">
              {' '}
              Register Here{' '}
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login
