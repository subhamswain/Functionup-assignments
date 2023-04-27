import React from "react";
import {useState} from "react";

export default function App() {
  const [data,setData]=useState(10)
  function increase(){
    setData(data+1)
  }
  function decrease(){
    setData(data-1)
    if(data===0){
      setData(0)
    }
  }

return(
  <div>
    <p>count{data}</p>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
);
}

