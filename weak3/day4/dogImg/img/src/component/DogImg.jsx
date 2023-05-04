import axios from 'axios'
import { useState,useEffect} from 'react'

export function DogImgs(){

 const [img ,setImg] = useState("https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg?auto=compress&cs=tinysrgb&w=600")

  useEffect(()=>{
    axios.get(`https://dog.ceo/api/breeds/image/random`)
    .then((res)=>{
        setImg(res.data.message)
        console.log(res)
    })
  },[])



    return(
        <img
        src={img}
        alt="Dog"
        />
    )

  
}

