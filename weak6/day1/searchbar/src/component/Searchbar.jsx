
import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import "./Searchbar.css"

function Searchbar({ searchedResult }) {
    const [data, setdata] = useState("")



    function InputValue(value) {

        fetch("http://cdn-api.co-vin.in/api/v2/admin/location/states")
            .then((res) => res.json())
            .then(data => {

                // this promish is returning us an object having two value pairs stattes and ott something and i was required only states which was a array of objects thats why i use this method to grave that object so that I can simple filter that out and render that

                // console.log(Object.values(data.states))

                const MyArr = Object.values(data.states)
                // to check weather the user we are typing exits or not 
                const result = MyArr.filter((state) => {
                    return state && state.state_name && state.state_name.toLowerCase().includes(value) && value
                })
                console.log(result)
                searchedResult(result)

            })


    }
    function handleChange(typo) {
        setdata(typo);
       
        // here we are we are setting the input value to the final value we are proving to input since in onchange this function is getting call 
        InputValue(typo)
        // InputValue fuction will basically check for the api vlues which will get matched with the input provide by user

    }


    return (
        <div className='container'>
            <AiOutlineSearch  className='icon'/>
            <input placeholder='enter to search' value={data} onChange={(e) => {
                handleChange(e.target.value)
                // we are basically calling handleChange function by giving it argument whatever we are typing in the input field
            }} className='input' />
        </div>
    )
}

export default Searchbar