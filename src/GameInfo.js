import GameProgress from "./gameProg";

const GameInfo = () => {
    return ( 
        <gi className="gameinfo">
            <input type="text"></input>
            <button>Submit</button>
            <GameProgress/>
        </gi>
     );
}
 
export default GameInfo;