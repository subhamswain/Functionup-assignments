import { useState } from "react"
import "./updater.css"

export const Updater = () => {
    let [name, setName] = useState("")

    let [placeValue, setPlaceholder] = useState("***")


   
    function handleChange(event) {

        setName(event.target.value);
       
    }

    function handleClick(event) {
       event.preventDefault()
       setPlaceholder(name)
       setName(" ")

    } 


    return (

        <div className="material">
            <form onSubmit={handleClick}>
            <input
                placeholder={"Add your name here"}
                onChange={handleChange}
                value={name}
            />
            <button type="submit">Submit</button>
            </form>
            <h1>Hii my name is : {placeValue}</h1>
        </div>
    )


}