const GameProg = ({ progress, toggleProgress }) => {
    return ( 
        <gp className='gameprogress'>
            <div className="progress">
                <h3>Progress</h3>
                <div>
                    <label>
                        <input type="radio" value="Unfinished" checked={progress === 'Unfinished'} onChange={toggleProgress} />
                        <span>Unfinished</span>
                    </label>
                    <label>
                        <input type="radio" value="Beaten" checked={progress === 'Beaten'} onChange={toggleProgress} />
                        <span>Beaten</span>
                    </label>
                    <label>
                        <input type="radio" value="Completed" checked={progress === 'Completed'} onChange={toggleProgress} />
                        <span>Completed</span>
                    </label>
                    <label>
                        <input type="radio" value="Unplayed" checked={progress === 'Unplayed'} onChange={toggleProgress} />
                        <span>Unplayed</span>
                    </label>
                </div>
            </div>
        </gp>
     );
}
 
export default GameProg;