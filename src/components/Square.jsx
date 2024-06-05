import './Square.css'
import { useState } from 'react';

export default function Square({value , onSquareClick}){
    // const [val,setVal]=useState(null);

    return <button 
            className="square" 
            onClick={onSquareClick}
            >
            <span>{value}</span>
            </button>
}