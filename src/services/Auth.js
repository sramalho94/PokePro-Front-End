import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('/users/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/users/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddPokemon = async (data) => {
  try {
    const res = await Client.post('/pokemon/new_pokemon', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddToTeam = async (data) => {
  try {
    const res = await Client.post(`/teams/new_team/${data.id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateUser = async (data) => {
  try {
    const res = await Client.put(`/users/${data.id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get('/users/session')
    return res.data
  } catch (error) {
    throw error
  }
}
