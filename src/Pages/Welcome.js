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
          <h4 className="header-text"> Please follow Community Guidelines </h4>
          <h3>
            {' '}
            Only Change A Trainer's Roster if it is officially changed in game
          </h3>
          <h3> Don't be toxic</h3>
          <h3>
            {' '}
            We will be adding an Add Pokemon feature, please only add official
            pokemon
          </h3>
          <div id="welcome-button-container">
            <Link to="/">
              <button className="button"> I AGREE </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="welcome-body-container">
        <div className="welcome-body-text-container"></div>
      </div>
    </div>
  )
}

export default Welcome
