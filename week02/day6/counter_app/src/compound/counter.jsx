import { useState } from "react"
import "./counter.css"

export const Counter = ()=>{
    const [count,setCount] = useState(0);

    return (
      <div className="material">
      <h1>Count value is :  {count}</h1>
      <button onClick={() =>{setCount(count+1)}}>increment</button>


      <button onClick={() =>{count>0?setCount(count-1):setCount(0)}}>decriment</button>

      
      </div>

    )
  

}