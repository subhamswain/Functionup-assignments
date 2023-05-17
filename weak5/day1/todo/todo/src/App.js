
import './App.css';
import { ToDo } from './component/todo';
import { useState } from 'react';

function App() {
  let [arr, setArr] = useState(["Shailja", "Deepak", "Komal", "Harshit"])

  function DeleteItem(index) {
 
  let newArr = arr.filter((el,id)=> {
    return id!==index
  })
  setArr(newArr)
  }
  function AddingElement(data) {
    if(data!==""){
    const newArr = [...arr]
    newArr.push(data);
    setArr([...newArr])
    }
  }

  return (
    <div className="App">
      {arr.map((el, index) => {
        return <div  a= {index}>
          <h1>{el}</h1>
          <button onClick={()=>{DeleteItem(index)}}  >Delete</button>
         </div>
      })}
       <ToDo onAdding={AddingElement} />
      
    </div>
  );
}

export default App;
