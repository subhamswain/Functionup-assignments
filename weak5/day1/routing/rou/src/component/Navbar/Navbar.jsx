import styles from './Navbar.module.css';
import { useRef } from "react"
import {Link} from "react-router-dom"
//import { IconName } from "react-icons/cg";
export const Navbar = () => {
    const menuRef = useRef("")
    const ulRef = useRef("")
    const humRef = useRef("")
   
    function showMenu() {
    menuRef.current.style.display = "block"
    humRef.current.style.display = "none"
       

    }

    // className={styles.error}
    return (
        <div className={styles.mainDiv}>

            <img src="https://static.vecteezy.com/system/resources/thumbnails/017/439/757/small/initial-monogram-letter-sh-logo-design-sh-letter-logo-design-with-modern-trendy-vector.jpg"
                alt="Logo" />

            <div className={styles.items} ref={menuRef}>
                <ul ref={ulRef} >
                    <Link to="/"> home</Link>
                    <Link to="about"> About</Link>
                    <Link to="/videos"> Videos</Link>
                    <Link to="/register">Registration</Link>
                    <Link to="/login"> Login</Link>
                   
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

