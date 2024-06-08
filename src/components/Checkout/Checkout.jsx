import { useContext } from "react";
import { ShoppingCartContext } from "../../App";

const Checkout = () => {
    const {shoppingCart} = useContext(ShoppingCartContext);
    console.log(shoppingCart);

  return (

    <>
        <h1>My Shopping Cart</h1>
        <ul>
            {shoppingCart.map((item, index)=>{
                return(
                    <li key={index}>
                        <dd>{item.name}</dd>
                    </li>
                )
            })}
        </ul>
    
    </>

  )
}

export default Checkout;