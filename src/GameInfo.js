import { FaTimes} from 'react-icons/fa'

const GameInfo = ({ game, onDelete }) => {
    return ( 
        // <div contenteditable="true" onKeyDown={(e) => e.key === 'Enter'? 
        // e.preventDefault() : e} className='games'>
        //     <h3>{game.text} <FaTimes style={{ color: 
        //     'red', cursor: 'pointer'}}
        //     onClick={() => onDelete(game.id)} 
        //     onInput={e => onEdit(game.id, e.currentTarget.textContent)}></FaTimes>
        //     </h3>
        // </div>

        <div className='games'>
            <h3>{game.text} <FaTimes style={{color: 
            'red', cursor: 'pointer'}}
            onClick={() => onDelete(game.id)} ></FaTimes>
            </h3>
            {/* <input type="text"/> */}
        </div>

     );
}
 
export default GameInfo;
