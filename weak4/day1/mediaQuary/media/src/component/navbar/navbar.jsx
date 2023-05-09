import styles from './navbar.module.css';
import {useRef} from "react"
//import { IconName } from "react-icons/cg";
export const Navbar = ()=>{
  const menuRef = useRef("")
  const ulRef = useRef("")
  const humRef = useRef("")
    function showMenu(){

        humRef.current.style.display = "none"
        menuRef.current.style.display = "block"
        menuRef.current.style.textAlign = "center"
        ulRef.current.style.display = "flex"
        ulRef.current.style.flexDirection = "column"
        ulRef.current.style.justifyContent = "center"
        // ulRef.current.style.height = "200px"
        //ulRef.current.style.
        

        ulRef.current.style.backgroundColor = "gray"
        //ulRef.current.style.width = "90px"
      




    }

// className={styles.error}
    return(
        <div className={styles.mainDiv}>
       
        <img src="https://static.vecteezy.com/system/resources/thumbnails/017/439/757/small/initial-monogram-letter-sh-logo-design-sh-letter-logo-design-with-modern-trendy-vector.jpg"
        alt="Logo"/>
      
        <div className={styles.items} ref={menuRef}>
            <ul ref={ulRef} >
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Video</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
        </div>
        <div className={styles.menuIcon} onClick={showMenu} ref={humRef}>
         <div></div>
         <div></div>
         <div></div>
        </div>
        
        </div>
    )
}