
import './App.css';
import { useState } from 'react';
import { ToDoList } from './molicule/list';
import { InputContainer } from './atom/Input';
function App() {
  const [listEle, setListEle] = useState([])

  let addElement = (inputText)=>{
    if(inputText!==""){
      setListEle([...listEle,inputText])
    }
  }
  const deleteEle = (key)=>{
    let newArr = [...listEle];
    newArr.splice(key,1)
    setListEle([...newArr])

  }
 

  return (
    <div className="App">
    <div className='material'>

      <InputContainer ele = {addElement}/>
      <h1>My To Do list</h1>

      <br/>
      {listEle.map((el,i)=>{
        return <ToDoList el = {el} key={i} deleteEle={deleteEle} index = {i}/>
      })}
    </div>
    </div>
  );
}

export default App;
