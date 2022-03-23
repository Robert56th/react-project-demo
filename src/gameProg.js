const GameProgress = () => {
    return ( 
        <gp className="gameprogress">
            <h3>Progress</h3>
            <div className="checkboxContainer">
                <input type="checkbox"></input>
                <label>Unfinished</label>

                <input type="checkbox"></input>
                <label>Beaten</label>
                
                <input type="checkbox"></input>
                <label>Completed</label>
                
                <input type="checkbox"></input>
                <label>Unplayed</label>
            </div>
        </gp>
     );
}
 
export default GameProgress;