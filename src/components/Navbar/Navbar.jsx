import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../App";


const Navbar = () => {
  const {shoppingCart} = useContext(ShoppingCartContext)

  return (

    <div className={styles.navContainer}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/produce" className={styles.link}>Produce</Link>
        <Link to="/meats" className={styles.link}>Meat</Link>
        <Link to="/beverages" className={styles.link}>Beverages</Link>
        <Link to="/snacks" className={styles.link}>Snacks</Link>
        <Link to="/checkout" className={styles.link}>Checkout({shoppingCart.length})</Link>
    </div>

  )
}

export default Navbar;