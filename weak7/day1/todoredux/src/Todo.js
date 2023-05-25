
import React from 'react'
import { useState } from 'react';
// import { listItem } from './items';
import { addItems ,  updateStatus} from './todoSlice'
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
    const ChangeStatus = (id) => {
      const cItem = myList.find((el)=> el.id === id);
      const nS = cItem.status === "pending" ? "completed" : "pending"
   disPatch( updateStatus({id,status:nS}))
  
       
    }
  const addStyle = {
    color : "green",
    background : "pink",
    borderRadius :"10px",
    padding : "5px",

  }
    

  return (
    <>
    <div style={{textAlign:"center",padding:"10px"}} className='arr'>
     <input value={Value} type='text'onChange={HandleChange} style={
        {
            background : "gray",
            color :"balck",
            padding : "10px",
            borderRadius : "10px"


        }
     }/> 
     <button onClick={AddList} style={
         {
            background : "gray",
            color :"balck",
            padding : "12px",
            borderRadius : "10px",
            border : "none",
            marginLeft : "5px"


        }
     }> + </button>  
    </div>
    {myList.map((el)=>{
        return(
            <div key={el.id} style={{display:"flex",justifyContent:"space-evenly"}}>
            
            <h1>{el.name}</h1>
            <h3>{el.id}</h3>
            <h3 onClick={()=>ChangeStatus(el.id) } style={addStyle}
                >{el.status} </h3>
            </div>
        )
    })}
   
    </>
    
  )
}

export default Todo