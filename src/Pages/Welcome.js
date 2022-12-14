import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="welcome-container">
      <header className="welcome-header-container">
        <img
          src="https://www.serebii.net/letsgopikachueevee/pokemon/025-crown.png"
          alt="website logo"
          className="welcome-logo"
          width="10rem"
        />
        <div className="welcome-text">
          <h2>Poke Pro</h2>
          <h4 className="welcome-text"> Please follow Community Guidelines </h4>
        </div>
      </header>
      <div className="welcome-body-container">
        <div className="welcome-body-text-container"></div>
        <div id="welcome-button-container">
          <Link to="/">
            <button id="welcome-button"> I AGREE </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Welcome
