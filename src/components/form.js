import React, { useState } from 'react';

function LuckyNumberGame() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 10) + 1); // generate a random number between 1 and 100
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('');

  const handleGuess = (event) => {
    event.preventDefault();
    const num = parseInt(guess);
    if (num < luckyNumber) {
        alert(`You guessed ${num}.You guess a smaller number.`);
    } else if (num > luckyNumber) {
         alert(`You guessed ${num}.You guess a bigger number`);
    } else {
        alert(`Congratulations! You guessed the right number (${luckyNumber}) in ${attempts + 1} attempts.`);
      setLuckyNumber(Math.floor(Math.random() * 10) + 1); // generate a new lucky number
      setAttempts(0);
    }
    setGuess('');
    setAttempts((prevAttempts) => prevAttempts + 1);
  };

  return (
    <div>
      <h1>Lucky Number Game</h1>
      <p>Guess a number between 1 and 10.</p>
      <form onSubmit={handleGuess}>
        <label>
          Guess:
          <input type="number" value={guess} onChange={(event) => setGuess(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default LuckyNumberGame;
