import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


const Navbar = () => {

  return (

    <div className={styles.navContainer}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/produce" className={styles.link}>Produce</Link>
        <Link to="/meats" className={styles.link}>Meat</Link>
        <Link to="/beverages" className={styles.link}>Beverages</Link>
        <Link to="/snacks" className={styles.link}>Snacks</Link>
    </div>

  )
}

export default Navbar;