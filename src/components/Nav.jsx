import { NavLink, Link } from 'react-router-dom'
import React from 'react'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className="flex flex-row align-middle justify-center px-3">
        <NavLink to="/" className="nav-link px-3">
          {' '}
          Home{' '}
        </NavLink>
        <NavLink to={`/profile_page/${user.id}`} className="nav-link px-1">
          {' '}
          Profile Page
        </NavLink>
        <NavLink onClick={handleLogOut} to="/" className="nav-link px-1">
          Sign Out
        </NavLink>
        <NavLink to="/pokemon" className="nav-link px-1">
          Pokemon
        </NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <NavLink to="/login" className="login-link">
        {' '}
        Login{' '}
      </NavLink>
    </nav>
  )

  return (
    <header className="nav-container">
      <div className=" bg-gradient-to-l from-red-500 via-black to-white">
        <div className="marquee-container overflow-hidden relative h-10 w-full">
          <div className=" flex flex-row marquee-content absolute top-0 left-0 whitespace-nowrap animate-marquee">
            <h4 className="my-auto text-[#F6CF57]">
              {' '}
              Having trouble being the very best? PokePro is here for you
            </h4>
            <img
              src="https://thumbs.gfycat.com/GenerousTimelyBrontosaurus-max-1mb.gif"
              className="h-fit w-10"
              alt="not found"
            ></img>
          </div>
        </div>
      </div>

      <div
        id="nav-content"
        className="flex flex-row justify-between bg-gradient-to-r from-red-500 via-black to-white text-[#F6CF57]"
      >
        <Link to={'/'} id="logo-link">
          <img
            src="/pikachucrown.png"
            alt="website logo"
            className="h-10 w-10"
          />
        </Link>
        <div
          id="links-container"
          className="my-auto
        "
        >
          {authenticated && user ? authenticatedOptions : publicOptions}
        </div>
      </div>
    </header>
  )
}

export default Nav
