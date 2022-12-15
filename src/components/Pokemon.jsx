import React from 'react'
import Client from '../services/api'

const Pokemon = ({id, name, image, types, trainer, sprite, getTeams}) => {

  const handleDelete = async() => {
    const response = await Client.delete(`https://pokepro-backend.herokuapp.com/api/teams/trainer/${trainer}/pokemon/${id}`)
    getTeams()
  }
  
  return (
    <div className='pokemon-card'>
      <div className='remove-pokemon-button'>
      <button onClick={handleDelete} className="button"> Remove</button>
      </div>
      <div className='pokemon-name-wrapper'>
      <h2>{name}</h2>
      </div>
      <div className='pokemon-wrapper'>
        <div className='pokemon-image-wrapper'>
        <img src={sprite}/>
        </div>
        <div className='pokemon-types'>
        {types?.map((type)=>(
          <div key={type}>
          <div className='type-text'>{type}</div>
          <div> Weak Against:</div>
          {type === "grass" &&
            <div className='type-counter-text'> Fire type</div>
          }
          {type === "poison" &&
            <div className='type-counter-text'>Ground type </div>
          }
          {type === "normal" &&
            <div className='type-counter-text'>Fighting type </div>
          }
          {type === "fire" &&
            <div className='type-counter-text'>water type </div>
          }
          {type === "water" &&
            <div className='type-counter-text'>Electric type </div>
          }
          {type === "electric" &&
            <div className='type-counter-text'>Ground type </div>
          }
          {type === "ice" &&
            <div className='type-counter-text'>Fire type </div>
          }
          {type === "fighting" &&
            <div className='type-counter-text'>Fairy type </div>
          }
          {type === "ground" &&
            <div className='type-counter-text'>Grass type </div>
          }
          {type === "flying" &&
            <div className='type-counter-text'>Electric type </div>
          }
          {type === "psychic" &&
            <div className='type-counter-text'>Bug type </div>
          }
          {type === "bug" &&
            <div className='type-counter-text'>Fire type </div>
          }
          {type === "rock" &&
            <div className='type-counter-text'>Water type </div>
          }
          {type === "ghost" &&
            <div className='type-counter-text'>Dark type </div>
          }
          {type === "dragon" &&
            <div className='type-counter-text'>Ice type </div>
          }
          {type === "dark" &&
            <div className='type-counter-text'>Bug type </div>
          }
          {type === "steel" &&
            <div className='type-counter-text'>Ice type </div>
          }
          {type === "fairy" &&
            <div className='type-counter-text'>Poison type </div>
          }
          </div>
        ))}
        </div>
      </div>
      
    </div>
  )
}

export default Pokemon