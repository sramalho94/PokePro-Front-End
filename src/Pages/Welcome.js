import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  const divStyle = {
    backgroundImage: 'url(/background.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <div
      className="flex flex-col justify-center align-middle min-h-screen"
      style={divStyle}
    >
      <header className="flex flex-col justify-center">
        <div className="flex flex-row justify-center">
          <img
            src="https://archives.bulbagarden.net/media/upload/7/73/Spr_5b_150.png"
            alt="website logo"
            className="h-56 w-56"
          />
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">Poke Pro</h2>
            <h4 className="text-xl font-bold">
              {' '}
              Please follow Community Guidelines{' '}
            </h4>
            <h3 className="text-xl">
              {' '}
              Only Change A Trainer's Roster if it is officially changed in game
            </h3>
            <h3 className="text-xl"> Don't be toxic</h3>
            <h3 className="text-xl">
              {' '}
              We will be adding an Add Pokemon feature, please only add official
              pokemon
            </h3>
            <div className="flex flex-row justify-center">
              <Link to="/">
                <button className="p-1 m-1 mx-auto bg-white rounded-lg">
                  {' '}
                  I AGREE{' '}
                </button>
              </Link>
            </div>
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
