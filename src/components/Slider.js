import styles from "./Slider.module.css"

export const Slider = ({elements}) => {


    return(
        <div className={styles.ProfileContainer}>
        
        <img src={elements.avatar} alt=""/>

       <h1>{elements.id}</h1>
        <h2>{elements.email}</h2>
        <h1>{elements.first_name}  {elements.last_name}</h1>
        
       
       
         
        </div>
    )
}