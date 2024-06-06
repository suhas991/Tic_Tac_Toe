import Board from './Board'
import { useState } from 'react';
export default function Game(){

    const [mark,setMark]=useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    const handlePlay =(nextSquares)=>{
    setHistory([...history,nextSquares])
    setMark(!mark);
    }

    return <>
    <div className="game">
        <div className="game-board">
           <Board mark={mark} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div>
            TODO
        </div>
    </div>
    </>
}