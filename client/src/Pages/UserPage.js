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
      <div className="user-page-image">
        <img src={userDetails?.image} />
        <Link to={`/edit_info/${id}`}>
          <button>Edit Info</button>
        </Link>
        <button onClick={handleDelete}> Delete User </button>
      </div>
    </div>
  )
}

export default UserPage
