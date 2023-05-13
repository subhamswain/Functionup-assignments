import { useState } from "react"
import styles from "./Input.module.css"

export function InputContainer(props) {

    const [inputText, setInputText] = useState("")

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            props.addElement(inputText)
            setInputText("")
        }
    }

    const handleDeleteList = () => {
        props.deleteList()
    }

    return (
        <div className={styles.inputContainer}>

            <input
                type="text"
                className={styles.inputToDo}
                value={inputText}
                placeholder="Enter your todo element"
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleEnter}
            />
            <button
                className={styles.btnAdd}
                onClick={() => {
                    props.addElement(inputText)
                    setInputText("")
                }}
            >
                +
            </button>
            <button
                className={styles.btnDeleteList}
                onClick={handleDeleteList}
            >
                Delete All
            </button>

        </div>
    )
}
