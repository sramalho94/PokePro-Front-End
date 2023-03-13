import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import Client from '../services/api'
import { useNavigate } from 'react-router-dom'

const UserPage = ({ user, handleLogOut }) => {
  const [userDetails, SetUserDetails] = useState(null)
  let { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getUserDetails = async () => {
      const response = await Client.get(
        `https://pokepro-backend.herokuapp.com/api/users/${id}`
      )
      SetUserDetails(response.data)
    }
    getUserDetails()
  }, [id])

  const handleDelete = async () => {
    const response = await Client.delete(
      `https://pokepro-backend.herokuapp.com/api/users/${id}`
    )
    handleLogOut()
    navigate('/')
  }

  const divStyle = {
    backgroundImage: 'url(/background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div className="min-h-screen flex flex-col justify-center" style={divStyle}>
      <div className="text-3xl font-bold text-center align-middle">
        {' '}
        {`Welcome ${userDetails?.userName}`}{' '}
      </div>
      <div className="flex flex-col mx-auto">
        <img
          src={userDetails?.image}
          className="h-48 w-58 rounded-3xl"
          alt={userDetails?.userName}
        />
        <div className="flex flex-row justify-center m-3">
          <Link to={`/edit_info/${id}`}>
            <button className="p-1 m-1 bg-white rounded-2xl">Edit Info</button>
            <button
              onClick={handleDelete}
              className="m-1 p-1 bg-white rounded-2xl"
            >
              Delete User
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserPage
