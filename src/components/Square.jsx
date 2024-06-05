import './Square.css'
import { useState } from 'react';

export default function Square(){
    const [val,setVal]=useState(null);

    function handleClick(){
        setVal('X');
    }
    return <button 
            className="square" 
            onClick={handleClick}
            >
            <span>{val}</span>
            </button>
}