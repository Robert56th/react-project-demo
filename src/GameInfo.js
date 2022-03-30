import { FaTimes} from 'react-icons/fa'

const GameInfo = ({ game, onDelete }) => {
    return ( 
        <div className='games'>
            <h3>{game.text} <FaTimes style={{color: 
            'red', cursor: 'pointer'}}
            onClick={() => onDelete(game.id)} ></FaTimes>
            </h3>
        </div>

     );
}
 
export default GameInfo;