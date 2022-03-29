import Navbar from "./Navbar";
import Home from "./Home";
import SignIn from "./SignIn";
import GameCatalog from "./GameCat";
import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [games, setGames] = useState([
    {
        id: 1,
        text: 'game1',
        status: true
    },
    {
        id: 2,
        text: 'game2',
        status: false
    },    
  ])

  const addGame = (game) => {
    const id = () => games.length + 1
    const newGame = {id, ...game}
    setGames([...games, newGame])
  }

  const deleteGame = (id) => {
    setGames(games.filter((game) => game.id !== id))
  }

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>

          <Route exact path="/create" element={games.length > 0 ?
          <GameCatalog games={games} onAdd={addGame} onDelete={deleteGame}/> : 
          ('No games to show')}/>

          <Route exact path="/signin" element={<SignIn/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
