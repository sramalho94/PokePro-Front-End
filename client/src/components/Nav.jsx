import { NavLink, Link } from "react-router-dom";
import React from 'react'

const Nav = ({ authenticated, user, handleLogOut}) => {
  let authenticatedOptions
  if (user){
    authenticatedOptions = (
      <div className="burger-menu">
        <input id="menu_toggle" type= "checkbox"/>
        <label>
          <div className="bun-top"></div>
          <div className="burger-center"></div>
          <div className='bun-bottom'></div>
        </label>

        <nav className="menu_box">
          <NavLink to = '/' className="nav-link"> Home </NavLink>
          <NavLink to={`/profile_page/${user.id}`} className="nav-link"> Profile Page</NavLink>
          <NavLink onClick={handleLogOut} to='/' className="nav-link">Sign Out</NavLink>
        </nav>
      </div>
    )
  }

  const publicOptions = (
    <nav>
      <NavLink to = '/login' className="login-link"> Login </NavLink>
    </nav>
  )
  
  return (
    <header className="nav-container"> 
      <span id='nav-banner'>
        <marquee>
          <div className="marquee-content">
          <h4 id='nav-banner-text'> Having trouble being the very best? PokePro is here for you</h4>
          <img src='https://toppng.com/uploads/preview/master-ball-the-best-poke-ball-transparent-background-pokemon-balls-11562943853enmb9crbnb.png'
          className="marquee-image"></img>
          </div>
        </marquee>
      </span>
      <div id='nav-content'>
        <Link to={'/'} id="logo-link">
          <img src="https://www.serebii.net/letsgopikachueevee/pokemon/025-crown.png" alt="website logo" className="logo"/>
        </Link>
        <div id= 'links-container'> 
          {authenticated && user ? authenticatedOptions: publicOptions }
        </div>
      </div>
    </header>
  )
}

export default Nav