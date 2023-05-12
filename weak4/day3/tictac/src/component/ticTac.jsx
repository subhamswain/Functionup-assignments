
import "./ticTac.css"
import { Box } from "./box"

import { useState } from "react"

export const Game = () => {
    const [arr, setArr] = useState(Array(9).fill(null));
    const [isXturn, setTurn] = useState(true)


    function handleClick(position) {
        const newState = [...arr]
        newState[position] = isXturn ? "X" : "O"
        setArr(newState)
        setTurn(!isXturn)

    }
    function checkForTheWinner() {
        const winner = [
            // row
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // column
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // digonal
            [0, 4, 8],
            [2, 4, 6]
        ]

        //    for of loop we are running here
        for (let index of winner) {
            const [a, b, c] = index
            if (arr[a] !== null && arr[a] === arr[b] && arr[a] === arr[c]) {
                return arr[a]
            }
        }
       
       
        


    }
    const isSomeoneWon = checkForTheWinner()

  function playagain(){
    setArr(Array(9).fill(null))
  }




return (
    <div className="container">
       {isSomeoneWon ? (<><h1>{isSomeoneWon} won the game</h1> 
        <button onClick={playagain} className="btn">Play again</button>
       </>):(
        <>
        <div className="row">
            <Box value={arr[0]} onClick={() => handleClick(0)} />
            <Box value={arr[1]} onClick={() => handleClick(1)} />
            <Box value={arr[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
            <Box value={arr[3]} onClick={() => handleClick(3)} />
            <Box value={arr[4]} onClick={() => handleClick(4)} />

            <Box value={arr[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
            <Box value={arr[6]} onClick={() => handleClick(6)} />
            <Box value={arr[7]} onClick={() => handleClick(7)} />
            <Box value={arr[8]} onClick={() => handleClick(8)} />
        </div>
        </>
        )}
    </div>

)
}
