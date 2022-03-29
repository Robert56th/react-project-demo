import GameInfo from "./GameInfo";
import GameProgress from "./GameProg";
import { useState } from 'react'

const GameCatalog = ({ games, onAdd, onDelete }) => {
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
        alert('Please add game')
        return
    }

    onAdd({ text })

    setText('')
  }

    return (
      <form className="add-form" onSubmit={onSubmit}>
        <div className="gamecatalog">
          <div className="gameinfo">
            <h3>Game Name</h3>
            <input type="text" placeholder='Add game' value={text}
            onChange={(e) => setText(e.target.value)}>
            </input>
            <button type="submit" value='Add game'>Submit</button>
          </div>
          
          <div className="content">
              {games.map((game) => (
              <GameInfo key={games.id} game={game}
              onDelete={onDelete}/>
              ))}

              <GameProgress/>
            </div>
        </div> 
      </form>
    );
}
 
export default GameCatalog;
