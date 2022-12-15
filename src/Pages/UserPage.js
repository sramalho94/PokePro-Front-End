import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
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
  }, [])

  const handleDelete = async () => {
    const response = await Client.delete(
      `https://pokepro-backend.herokuapp.com/api/users/${id}`
    )
    handleLogOut()
    navigate('/')
  }

  return (
    <div className="user-page-container">
      <div className="user-page-header">
        {' '}
        {`Welcome ${userDetails?.userName}`}{' '}
      </div>
      <div className="user-page-image-wrapper">
        <img src={userDetails?.image} className="user-page-image" />
        <Link to={`/edit_info/${id}`}>
          <button className="button">Edit Info</button>
          <button onClick={handleDelete} className="button">
            Delete User
          </button>
        </Link>
      </div>
    </div>
  )
}

export default UserPage
