import Navbar from "./Navbar";
import GameInfo from "./GameInfo";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <GameInfo/>
      </div>
    </div>
  );
}

export default App;
