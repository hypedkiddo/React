import { useState } from 'react'

function Square({value,onSquareClick}){
  return <button className="square" onClick={onSquareClick}>{value}</button>;
}
function Winner(square){
  //All possible winning combinations
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  for(let line of lines){
    const[a,b,c]=line; //Creating a temporary array
    if(square[a] && square[a] == square[b] && square[b]== square[c] ){
      return square[a]
    }
  }
  return null;
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));//Array to maintain the state of the board
  const [isXNext,setIsXNext]= useState(true); //We need a varaiable to keep a track of the player

  function handleClick(index){
    if(squares[index] || Winner(squares)){
      return;
    }
    const nextSquares=squares.slice();
    nextSquares[index]=isXNext? 'X':'0';
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  }

  const winner =Winner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="main">
    <h1 className="status">{status} </h1>
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
    </div>
  )
}

export default Board
