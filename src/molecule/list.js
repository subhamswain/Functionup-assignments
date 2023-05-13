import styles from "./list.module.css"

export const ToDoList = ({ el, deleteEle }) => {

    return (
        <>
            <li className={styles.list}>
                {el}
                <button className={styles.btnDelete} onClick={deleteEle}>Delete</button>
            </li>
        </>
    )

}
