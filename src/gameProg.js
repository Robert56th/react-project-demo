const GameProgress = () => {
    return ( 
        <gp className="gameprogress">
            <h2>Progress</h2>
            <input type="checkbox"></input>
            <div>Unfinished</div>
            <input type="checkbox"></input>
            <div>Beaten</div>
            <input type="checkbox"></input>
            <div>Completed</div>
            <input type="checkbox"></input>
            <div>Unplayed</div>
        </gp>
     );
}
 
export default GameProgress;