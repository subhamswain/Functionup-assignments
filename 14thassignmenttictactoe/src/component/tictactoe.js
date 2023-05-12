import React, { useState } from 'react';
import './tictactoe.css';

export default function Game() {
    const [data, setData] = useState('');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState('');

    function checkForWinner(squares) {
        // Winning combinations
        const combos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Across
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Down
            [0, 4, 8], [2, 4, 6] // Diagonal
        ];

        for (let combo of combos) {
            const [a, b, c] = combo;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setWinner(squares[a]);
                return;
            }
        }

        // Check for draw
        if (squares.every(cell => cell !== '')) {
            setWinner('Draw');
        }
    }

    function handleClick(index) {
        if (winner || cells[index]) {
            return;
        }

        const newCells = [...cells];
        newCells[index] = data === 'X' ? 'O' : 'X';

        setCells(newCells);
        setData(data === 'X' ? 'O' : 'X');
        checkForWinner(newCells);
    }

    function handleReset() {
        setCells(Array(9).fill(''));
        setWinner('');
        setData('X');
    }

    function renderCell(index) {
        return (
            <td key={index} onClick={() => handleClick(index)}>
                {cells[index]}
            </td>
        );
    }

    return (
        <div className='tic-tac-toe'>
            {!data && !winner ? (
                <button onClick={() => setData('X')}>Start Game</button>
            ) : (
                <>
                    <p>Player: {data}</p>
                    <table className='game-display'>
                        <tbody>
                            <tr>
                                {renderCell(0)}
                                {renderCell(1)}
                                {renderCell(2)}
                            </tr>
                            <tr>
                                {renderCell(3)}
                                {renderCell(4)}
                                {renderCell(5)}
                            </tr>
                            <tr>
                                {renderCell(6)}
                                {renderCell(7)}
                                {renderCell(8)}
                            </tr>
                        </tbody>
                    </table>

                    {winner && (
                        <>
                            <p>{winner === 'Draw' ? 'Game Drawn' : `${winner} is the winner`}</p>
                            <button onClick={handleReset}>Play Again</button>
                        </>
                    )}

                    {!winner && cells.every(cell => cell !== '') && (
                        <>
                            <p>Game Drawn</p>
                            <button onClick={handleReset}>Play Again</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
}
