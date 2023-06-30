import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setResult(`Result: ${sum}`);
  };

  const handleSubtraction = () => {
    const difference = Number(num1) - Number(num2);
    setResult(`Result: ${difference}`);
  };

  const handleMultiplication = () => {
    const product = Number(num1) * Number(num2);
    setResult(`Result: ${product}`);
  };

  const handleDivision = () => {
    const quotient = Number(num1) / Number(num2);
    setResult(`Result: ${quotient}`);
  };

  return (
    <div>
      <h1>Basic Calculator</h1>
      <input type="number" placeholder="Enter number 1" value={num1} onChange={handleNum1Change} />
      <input type="number" placeholder="Enter number 2" value={num2} onChange={handleNum2Change} />
      <br />
      <button onClick={handleAddition}>Addition</button>
      <button onClick={handleSubtraction}>Subtraction</button>
      <button onClick={handleMultiplication}>Multiplication</button>
      <button onClick={handleDivision}>Division</button>
      <br />
      <h1>{result}</h1>
    </div>
  );
};

export default Calculator;