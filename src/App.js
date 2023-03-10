import './index.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Welcome from './Pages/Welcome'
import Register from './Pages/Register'
import TrainerTeam from './Pages/TrainerTeam'
import UserPage from './Pages/UserPage'
import EditUserPage from './Pages/EditUserPage'
import AddToTeamForm from './Pages/AddToTeamForm'
import AddPokemonForm from './Pages/AddPokemonForm'
import PokemonList from './Pages/PokemonList'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <div>
        <header>
          <Nav
            authenticated={authenticated}
            user={user}
            handleLogOut={handleLogOut}
          />
        </header>
        <main>
          <Routes>
            <Route
              index
              element={<Home user={user} authenticated={authenticated} />}
            />
            <Route path="/welcome" element={<Welcome />} />
            <Route
              path="/login"
              element={
                <Login
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              }
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/trainer_team/:id"
              element={<TrainerTeam />}
              user={user}
              authenticated={authenticated}
            />
            <Route
              path="/profile_page/:id"
              element={<UserPage user={user} handleLogOut={handleLogOut} />}
            />
            <Route path="/edit_info/:id" element={<EditUserPage />} />
            <Route path="/add_to_team/:id" element={<AddToTeamForm />} />
            <Route path="/create_pokemon" element={<AddPokemonForm />} />
            <Route path="/pokemon" element={<PokemonList />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
