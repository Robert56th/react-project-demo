import GameCatalog from "./GameCat";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/create" element={<GameCatalog/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
