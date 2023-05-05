import axios from "axios"
import { useState } from "react"

export function OtpGenerator(){
 const [number ,setNumber] = useState("")
 //const [mobile,setMobile] = useState("")
 
let url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP"
    function LetsGenerateOtp(){
        axios({
            method: 'post',
            url: url,
            data: {
                mobile: number
            }
        }) 
       
        .then((res)=>res
           )
           
    }
    function readTheInput(e){
        if(number.length<10){
            setNumber(e.target.value)
            console.log(number)
        }else{
            alert("enter a valid number")
        }
     
    }
  return(
       <div>
       <input
     type="number"
     
     value={number}
      onChange={readTheInput} 
       />
       <button onClick={LetsGenerateOtp}>Get Otp</button>

       </div> 
    )

}