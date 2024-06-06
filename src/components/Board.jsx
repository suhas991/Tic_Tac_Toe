import { useState } from 'react'
import Square from './Square'
import './Board.css'
export default function Board({ mark, squares, onPlay }){
    
    //handle event code
    const handleClick = (i)=> {
        if(squares[i] || checkWinner(squares)){
         console.log("Dont cheat");
         return;
        }
 
        const newSqaures=squares.slice();
        console.log(newSqaures);
        
        if(mark){
         newSqaures[i]='X';
        }else{
         newSqaures[i]='O';
        }
        onPlay(newSqaures);
     }
     
    //check winner
    const checkWinner = (squares)=> {
       const lines=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
       ];
    
       for(let i=0;i<lines.length;i++){
          const [a,b,c]=lines[i];
          if(squares[a] && squares[a] === squares[b] && squares[a]===squares[c]){
            return squares[a];
          }
       }
       return null;
    }
    //Display win
    const winner = checkWinner(squares);
    let status;
    if(winner){
        status = "Winner : " + winner;
        //document.querySelector('.status').style.color='Green';
    }else{
        status = "Next Player : " + ( mark ? 'X' : 'O' );
    }
    
    

    return <>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        </div>

        <div className='Play Again'>Play Again</div>
       
    </>
}