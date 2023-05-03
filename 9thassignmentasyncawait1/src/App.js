import React, { useState, useEffect } from 'react';

function DogImage() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    async function fetchDogImage() {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setImageUrl(data.message);
    }

    fetchDogImage();
  }, []);

  return (
    <img src={imageUrl} alt="Random dog" />
  );
}

export default DogImage;
