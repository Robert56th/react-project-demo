import GameInfo from "./GameInfo";
import GameProgress from "./GameProg";
import ListofGames from "./ListofGames";
import { useState } from 'react'

const GameCatalog = ({ games, onAdd, onDelete }) => {
  const [text, setText] = useState('')
  const [progress, setProgress] = useState()

  const toggleProgress = e => {
    const target = e.target;
    if(target.checked) {
      setProgress(target.value);
    }
 };

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Please add game')
      return
    }
    else if(!progress) {
      alert('Please choose an option')
      return
    }

    onAdd({ text, progress })

    setText('')
    setProgress('')
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
            <GameProgress progress={progress} toggleProgress={toggleProgress}/>
          </div>

          <div className="leftcontent">
            <h1>List of Games</h1>
            <br></br>
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