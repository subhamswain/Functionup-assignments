
import React from 'react'
import { useState } from 'react';
// import { listItem } from './items';
import { addItems } from './todoSlice'
import { useDispatch,useSelector } from 'react-redux'
function Todo() {
const [id , setId] = useState(0)
const [Value , setInputValue] = useState("")
const myList = useSelector(state => state.todo.todo)
 const disPatch = useDispatch();
//  const listItem = 

    function AddList (){
        setId(id+1)
    if(Value !== ""){
        const newItems = {
            name : Value,
            id : id,
            status : "pending"
        }
        disPatch(addItems(newItems));
        setInputValue("")
    }

    }
    const HandleChange = (e) => {
      setInputValue(e.target.value)
    }
    const ChangeStatus = () => {

        disPatch(useDispatch())
    }
    

  return (
    <>
    <div>
     <input value={Value} type='text'onChange={HandleChange}/> 
     <button onClick={AddList}> + </button>  
    </div>
    {myList.map((el)=>{
        return(
            <div key={el.id}>
            
            <h1>{el.name}</h1>
            <h3>{el.id}</h3>
            <h3 onClick={()=>ChangeStatus(el.id)}>{el.status}</h3>
            </div>
        )
    })}
   
    </>
    
  )
}

export default Todo