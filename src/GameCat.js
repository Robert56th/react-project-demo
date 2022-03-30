import GameInfo from "./GameInfo";
import GameProgress from "./GameProg";
import ListofGames from "./ListofGames";
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
          
          <div className="rightcontent">
            <GameProgress />
          </div>

          <div className="leftcontent">
            <h1>List of Games</h1>
            <ListofGames />
            
            {games.map((game) => (
            <GameInfo key={games.id} game={game}
            onDelete={onDelete}/>
            ))}
          </div>
        </div> 
      </form>
    );
}
 
export default GameCatalog;