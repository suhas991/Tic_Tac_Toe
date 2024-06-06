import Board from './Board'
import { useState } from 'react';
import "./Game.css"
export default function Game(){

    const [mark,setMark]=useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    const handlePlay =(nextSquares)=>{
    setHistory([...history,nextSquares])
    setMark(!mark);
    }
    const jumpTo = ()=>{

    }
    const moves = history.map((squares,move)=>{
    let description;
    if(move > 0){
        description = "Go to move #"+move;
    }else{
        description ="Go to game Start";
    }
    return (
        <li>
            <button onClick={()=>jumpTo(move)}>{description}</button>
        </li>
    );
    });

    return <>
    <div className="game">
        <div className="game-board">
           <Board mark={mark} squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className='history'>
            <ol>
                {moves}
            </ol>
        </div>
    </div>
    </>
}