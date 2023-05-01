import {useRef} from "react"
import "./useref.css"

export const SecondProblem = () =>{
let MainIndex = useRef(0)

let img = [

    "https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/127027/pexels-photo-127027.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
   " https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/12715260/pexels-photo-12715260.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1207875/pexels-photo-1207875.jpeg?auto=compress&cs=tinysrgb&w=400",

"https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400"

]

const myRef = useRef(null);




 function changeImg(){
    //setIndex((index+1) % img.length)
    if(MainIndex.current<(img.length-1)){
        MainIndex.current = MainIndex.current+1 
        myRef.current.src = img[MainIndex.current];
     
    
    }
   
   
 }



    return (
        <div className="main-content">

            <img ref={myRef}
            src = {img[MainIndex.current]}
            alt = "I am an img"
            
            />
            <button onClick = {changeImg}>Change Image</button>
        </div>
    )
}