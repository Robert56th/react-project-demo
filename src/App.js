import Navbar from "./Navbar";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import GameCatalog from "./GameCat";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const gamesFromServer = await fetchGames()
      setGames(gamesFromServer)
    }

    getGames()
  }, [])

  const fetchGames = async () => {
    const res = await fetch('http://localhost:5000/games')
    const data = await res.json()
  
    console.log(data)
    return data
  }

  const addGame = async (game) => {
    const res = await fetch('http://localhost:5000/games', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(game)
    })
    const data = await res.json()
    setGames([...games, data])
  };

  const deleteGame = async (id) => {
    await fetch(`http://localhost:5000/games/${id}`, {
      method: 'DELETE'
    })
    
    setGames(games.filter((game) => game.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />

          <Route
            exact
            path="/create"
            element={
              <GameCatalog
                games={games}
                onAdd={addGame}
                onDelete={deleteGame}
              />
            }
          />

          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
