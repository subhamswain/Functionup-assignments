import axios from "axios"
import { useState } from "react"

export function OtpGenerator() {
    const [number, setNumber] = useState("")
    //const [mobile,setMobile] = useState("")

    let url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP"
    function LetsGenerateOtp() {
        axios.post(url, { mobile: Number(number) })
            .then((res) => { console.log(res) })
            .catch((error) => { console.log(error) })
    }
    function readTheInput(e) {
        if (number.length <= 10) {
            setNumber(e.target.value)
            console.log(number)
        }

    }
    function newFunc() {
        if (number.length !== 10) {
            alert("enter valid number")
        } else {
            LetsGenerateOtp()
        }

    }
    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={readTheInput} />
            <button onClick={newFunc}>Get Otp</button>
        </div>
    )

}