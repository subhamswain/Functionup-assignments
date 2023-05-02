import React,{useRef} from 'react'
import './App.css';

export default function App() {
  const fileRef=useRef(null)
  function handleButton(){
    fileRef.current.click()
  }
  return (
    <div>
    <input type="file" ref={fileRef} id="file"/>
    <button onClick={handleButton}>Pick the file</button>
    </div>
  );
}


