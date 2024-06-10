import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../App";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const Checkout = () => {
    const {shoppingCart, setShoppingCart} = useContext(ShoppingCartContext);
    console.log("Shopping Cart: ", [...shoppingCart]);
    const copyShoppingCart = [...shoppingCart];

    //State
    const [purchasedOrder, setPurchasedOrder] = useState();

    //Functions
    const handlePurchase = () => {
        //Todo - Function with logic to input purchased order data into database with the following fields: username, order

        setPurchasedOrder(copyShoppingCart);
        setShoppingCart([]);
    };
    console.log( "Submitted order: ", purchasedOrder);

  return (

    <>
    <div className="container">
        <ShoppingCart />
        <button disabled={shoppingCart.length === 0} onClick={handlePurchase}>Place Order</button>

        <h1>Order History</h1>
        <dd>-list item</dd>
        <dd>-list item</dd>
    </div>
    </>

  )
}

export default Checkout;