import Navbar from "./Navbar";
import Home from "./Home";
import SignIn from "./SignIn";
import GameCatalog from "./GameCat";
import { useState } from "react"
import { v4 as uuid } from 'uuid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [games, setGames] = useState([
    {
        id: 1,
        text: 'game1',
        progress: 'Completed'
    },
    {
        id: 2,
        text: 'game2',
        progress: 'Unplayed'
    },    
  ])

  const addGame = (game) => {
    const id = uuid();
    const newGame = {id, ...game}
    setGames([...games, newGame])
  }

  const deleteGame = (id) => {
    setGames(games.filter((game) => game.id !== id))
  }

  console.log(games)

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>

          <Route exact path="/create" element={<GameCatalog 
          games={games} onAdd={addGame} onDelete={deleteGame} />}/>

          <Route exact path="/signin" element={<SignIn/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;