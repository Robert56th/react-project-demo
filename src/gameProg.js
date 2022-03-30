const GameProgress = () => {
    return ( 
        <gp className="gameprogress">
            <div className="progress">
                <h3>Progress</h3>
                <div>
                    <input type="checkbox"></input>
                    <label>Unfinished</label>

                    <input type="checkbox"></input>
                    <label>Beaten</label>
                    
                    <input type="checkbox"></input>
                    <label>Completed</label>
                    
                    <input type="checkbox"></input>
                    <label>Unplayed</label>
                </div>
            </div>
        </gp>
     );
}
 
export default GameProgress;