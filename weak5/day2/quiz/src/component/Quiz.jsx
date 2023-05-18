import React from 'react'
import "./Quiz.css"
import { useState, useRef } from 'react'


export const Quiz = () => {
    let count = useRef(0)
    // let [timer , setTimer] = useState(60)
    const playAgain = useRef(null)
    const nextBtn = useRef(null)
    const scoreBar = useRef(null)

    const Data = [
        {
            Ques: "What is my Name ?",
            Ans: [
                { ans: "Shailja", isCorrect: true },
                { ans: "Harshit", isCorrect: false },
                { ans: "Komal", isCorrect: false },
                { ans: "Deepak", isCorrect: false }
            ]

        },
        {
            Ques: "What is my age?",
            Ans: [
                { ans: "15", isCorrect: false },
                { ans: "22", isCorrect: true },
                { ans: "10", isCorrect: false },
                { ans: "40", isCorrect: false }
            ]

        },
        {
            Ques: "What is my Designation ?",
            Ans: [
                { ans: "Developer", isCorrect: true },
                { ans: "Shofware Engineer", isCorrect: false },
                { ans: "Designer", isCorrect: false },
                { ans: "Broker", isCorrect: false }
            ]

        },
        {
            Ques: "Where do Shailja live?",
            Ans: [
                { ans: "Delhi", isCorrect: false },
                { ans: "Indore", isCorrect: false },
                { ans: "Rewa", isCorrect: false },
                { ans: "Bhopal", isCorrect: true }
            ]

        },
        {
            Ques: "Which is Shailja's favourite Mythological Charector? ",
            Ans: [
                { ans: "Arjun", isCorrect: true },
                { ans: "Shree Krishna", isCorrect: false },
                { ans: "Karna", isCorrect: true },
                { ans: "Bheesm", isCorrect: false }
            ]

        },
        {
            Ques: "15 + 20 + 30 * 0 = ?",
            Ans: [
                { ans: "30", isCorrect: false },
                { ans: "35", isCorrect: true },
                { ans: "0", isCorrect: false },
                { ans: "30", isCorrect: false }
            ]

        }, {
            Ques: "15 + 20 + 30 + 0 - 30= ?",
            Ans: [
                { ans: "30", isCorrect: false },
                { ans: "35", isCorrect: true },
                { ans: "0", isCorrect: false },
                { ans: "30", isCorrect: false }
            ]

        }
        , {
            Ques: "Arjun was son of ? ",
            Ans: [
                { ans: "Indra & Kunti", isCorrect: true },
                { ans: "Surya & Kunti", isCorrect: false },
                { ans: "Aswani & Kunti", isCorrect: false },
                { ans: "Dharmraj & Kunti", isCorrect: false }
            ]

        }
        , {
            Ques: "Bheem's son was known as? ",
            Ans: [
                { ans: "Abhimanyu", isCorrect: false },
                { ans: "Drishyadum", isCorrect: false },
                { ans: "Ghatotksha", isCorrect: true },
                { ans: "Uttar", isCorrect: false }
            ]

        }, {
            Ques: "Which language runs in browser? ",
            Ans: [
                { ans: "Java", isCorrect: false },
                { ans: "Python", isCorrect: false },
                { ans: "JavaScript", isCorrect: true },
                { ans: "Php", isCorrect: false }
            ]

        }
    ]
    const [question, setQuestion] = useState(Data[0].Ques)
    const [option, setOption] = useState(Data[0].Ans)
    const [score, setScore] = useState(0)

    // setInterval(() => {
    //  setTimer(timer-1)
    // },1000)



    function NextQue() {
        if (count.current < Data.length-1) {
            count.current = count.current + 1
            setQuestion(Data[count.current].Ques)
            setOption(Data[count.current].Ans)
            playAgain.current.style.display = "none"
           
        } else if(count.current === Data.length-1){
            
             alert("done")
           
            setQuestion("")
            setOption([])
          
           setScore(0)
            
            nextBtn.current.style.display = "none"
            playAgain.current.style.display = "block"
           
        }
    }


function CheckScore(el) {
    if (el.isCorrect) {
        setScore(score + 2)
    }else{
        alert("wrong ans")
        count.current = count.current + 1
        setQuestion(Data[count.current].Ques)
        setOption(Data[count.current].Ans)
        

    }

}

return (
    <div className='parent'>
        
        <h2 className='score' ref={scoreBar} >Your Score is {score} / {Data.length*2}</h2>
        <div className='que'>{question}</div>
        <div className='options'>
        {  option.map((el, ind) => 
            <div key={ind} onClick={() => CheckScore(el)} style={{margin:"20px", background:"white", padding:"5px" , borderRadius:"10px", cursor:"pointer"}} >{el.ans} </div>
        )}
        </div>
        <button onClick={NextQue}  className='submmit' ref={nextBtn} style={{ padding:"10px",borderRadius:"10px" , width:"80px"}}>Next</button>
        <button onClick={()=> {
             setQuestion(Data[0].Ques)
             setOption(Data[0].Ans)
             setScore(0)
             nextBtn.current.style.display = "block"
             playAgain.current.style.display = "none"
             count.current = 0
             

        }} ref={playAgain} style={{display:"none", padding:"10px",borderRadius:"10px" , width:"80px"}}>Play Again</button>
    </div>

)

}
