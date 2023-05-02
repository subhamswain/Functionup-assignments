import "./rendomDogs.css"
import { useEffect, useState } from "react"

export function RendomDogs() {

    const [img,setImg] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random").then((responce) => responce.json()).then((data) => {
            setImg(data.message)
        })

    })
     return (
        <div className="rendom">
            <h1>Hello I am rendom dog from the fetched API</h1>
            <img
               
                src={img}
                alt="Dog"

            />

        </div>)
}