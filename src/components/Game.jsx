import Board from './Board'
import { useState } from 'react';
import "./Game.css"
export default function Game(){

 
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currMove,setCurrmove] = useState(0);
    const currentSquares = history[currMove];
    const mark = currMove % 2 === 0;
    

    const handlePlay =(nextSquares)=>{
    const nextHistory = [...history.slice(0, currMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrmove(nextHistory.length - 1);
    }
    const jumpTo = (nextMove)=>{
    setCurrmove(nextMove);
    }
    
    const moves = history.map((squares,move)=>{
    let description;
    if(move > 0){
        description = "Go to move #"+move;
    }else{
        description ="Go to game Start";
    }
    return (
        <li key={move}>
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