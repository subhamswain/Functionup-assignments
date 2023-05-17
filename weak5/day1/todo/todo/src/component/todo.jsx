 
 import { useState } from "react"
export const ToDo = ({onAdding}) => {
 const [value , setValue] = useState("")
 function addSome(){
    onAdding(value)
 }
    return (
        <>
        <input
         type="text"
         value={value}
         onChange={(e) => {
            setValue(e.target.value)
         }}

        />
        <button onClick={addSome}>+</button>
        </>
    )
}