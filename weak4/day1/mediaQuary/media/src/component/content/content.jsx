
import styles from "./content.module.css"

export const Content = ()=>{


    return (
        <div className={styles.content}>
          
          <div className={styles.text}>
            <h1>Be Developer</h1>
            <p>Lorem ipsum dolor sit amet consectetur <pre/> adipisicing elit. Iure quia distinctio ea non amet eos ut vel et dolore sapiente, <pre/> ipsam assumenda quae officiis sint? Qui deserunt consequuntur et perferendis.</p>
            <button>See how</button>
          </div>
          <div className={styles.images}>
         
         <img src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />


          </div>
        </div>
    )
}