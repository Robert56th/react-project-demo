import Navbar from "./Navbar";
import GameInfo from "./GameInfo";
import GameProgress from "./gameProg";

const GameCatalog = () => {
    return ( 
    <div className="gamecatalog">
    <Navbar/>
    <div className="content">
      <GameInfo/>
      <GameProgress/>
    </div>
  </div> );
}
 
export default GameCatalog;