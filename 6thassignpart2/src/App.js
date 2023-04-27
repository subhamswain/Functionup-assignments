import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [heading, setHeading] = useState('Hello');

  const handleSubmit = (event) => {
    event.preventDefault();
    setHeading(`Hello ${name}!`);
    setName('');
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>{heading}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;