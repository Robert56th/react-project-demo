import GameInfo from "./GameInfo";
import GameProgress from "./gameProg";
import ListofGames from "./ListofGames";


const GameCatalog = () => {
    return ( 
    <div className="gamecatalog">
      
      <div className="rightcontent">
        <GameInfo/>
        <GameProgress/>
      </div>
      <div className="leftcontent">
        <h1>List of Games</h1>
        <ListofGames/>
      </div>

    </div> );
}
 
export default GameCatalog;