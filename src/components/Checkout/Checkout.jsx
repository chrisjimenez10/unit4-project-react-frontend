import { useContext } from "react";
import { ShoppingCartContext } from "../../App";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Checkout = () => {
    const {shoppingCart} = useContext(ShoppingCartContext);
    console.log([...shoppingCart]);

  return (

    <>
        <ShoppingCart />
        <button>Place Order</button>
    </>

  )
}

export default Checkout;