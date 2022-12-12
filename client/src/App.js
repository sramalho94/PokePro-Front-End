import './index.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Home from './Pages/Home'
import Test from './components/TestComponent'
import Login from './Pages/Login'

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
  })
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
            <Route index element={<Home authenticated={authenticated} />} />
            <Route
              path="/login"
              element={
                <Login
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
