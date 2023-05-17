
import './App.css';
import { ToDo } from './component/todo';
import { useState } from 'react';

function App() {
  let [arr, setArr] = useState(["Shailja", "Deepak", "Komal", "Harshit"])

  function DeleteItem({a}) {
    // const newArr = [...arr]
    // newArr.slice(a,1);
    // setArr(newArr)
    // let i = arr.indexOf(a)
    // const newArr = arr.filter((el,index)=> index !== i);
    // setArr(newArr)
    // setArr([...arr.slice(0,i),...arr.slice(i+1)])
    const nayiArr = arr.filter((el,ind) => 
     a!==ind
    );
    setArr([...nayiArr])
  }
  function AddingElement(data) {
    const newArr = [...arr]
    newArr.push(data);
    setArr([...newArr])
  }

  return (
    <div className="App">
      {arr.map((el, index) => {
        return <div style={{ display: "flex", justifyContent: "space-between", width: "30vw" }} a= {index}>
          <h1>{el}</h1>
          <button onClick={DeleteItem}  >Delete</button>
         </div>
      })}
       <ToDo onAdding={AddingElement} />
      
    </div>
  );
}

export default App;
