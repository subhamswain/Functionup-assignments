
import {useState } from 'react';
import './App.css';
import { NewObjcets } from './component/array';

function App() {
let api = "https://reqres.in/api/users/"

let [array,setArr] = useState([])
async function handlegetUser(){
  
    // fetch(api).then((responce) => {
    //   responce.json().then((data)=>{
       
    //     console.log(data)
    //     myRef.current = data.data
    //   })
    // })

    const response = await fetch(api).then((res)=>res);
    const arr = await response.json();
    setArr(arr.data)
  
}




  return (
    <div className="App">
  {array.map((el,index) => {
    return <NewObjcets
    indexs={el}
    key={array.id}
    />
  })}
  <button onClick={handlegetUser}>get user</button>
     
    </div>
  );
}

export default App;
