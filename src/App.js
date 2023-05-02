import React, {useState,useEffect,useRef} from 'react';
import './App.css';

function App() {
  const [imageUrl,setImageUrl]=useState('');
  const imageRef=useRef(null);
  const imageUrls=['https://cdn.pixabay.com/photo/2023/04/26/16/40/mountains-7952802_960_720.jpg','https://cdn.pixabay.com/photo/2023/04/27/16/11/bird-7954948_960_720.jpg','https://cdn.pixabay.com/photo/2023/04/25/15/08/church-7950418_960_720.jpg','https://cdn.pixabay.com/photo/2023/04/23/08/46/animals-7945300_960_720.jpg'];
  useEffect(()=>{
    setImageUrl(imageUrls[0]);
  },[]);
  const changeImage =()=>{
    const currentImageUrl=imageRef.current.src;
    const currentIndex=imageUrls.indexOf(currentImageUrl);
    const nextIndex =(currentIndex + 1) % imageUrls.length;
    setImageUrl(imageUrls[nextIndex]);
  }
  return (
    <div>
      
        <img src={imageUrl} alt="example" ref={imageRef} />
        <button onClick={changeImage}>Change Image</button>
    </div>
  );
}

export default App;
