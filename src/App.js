import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState('');

  const fetchDogImage = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogImageUrl(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div>
      <img src={dogImageUrl} alt="Dog" />
      <button onClick={fetchDogImage}>New Dog Image</button>
    </div>
  );
}

export default App;
