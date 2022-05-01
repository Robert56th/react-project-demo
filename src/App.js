import Navbar from "./Navbar";
import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import GameCatalog from "./GameCat";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  const [games, setGames] = useState([
    {
      id: 1,
      text: "game1",
      progress: "Completed",
    },
    {
      id: 2,
      text: "game2",
      progress: "Unplayed",
    },
  ]);

  const addGame = (game) => {
    const id = games.length + 1;
    const newGame = { id, ...game };
    setGames([...games, newGame]);
    console.log(game);
  };

  const deleteGame = (id) => {
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
