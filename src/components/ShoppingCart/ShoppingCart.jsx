//Import
import { useContext } from "react";
import { ShoppingCartContext } from "../../App";
import { arrayOfPriceService, sumOfPriceService } from "../../services/shoppingcart";


const ShoppingCart = () => {

  //Use globally shared values from Provider (state, functions to set state of Shopping Cart)
    //Since the value we are passing through the Provider in our App Component is an object, we can destructure it to access the properties individually in later logic
  const {shoppingCart, removeFromCart} = useContext(ShoppingCartContext);

  const priceFieldArray = arrayOfPriceService(shoppingCart);
  const sumOfPrices = sumOfPriceService(priceFieldArray);


  return (

    <>
      <h1>Shopping Cart</h1>

      {shoppingCart.length === 0 ? <h3>-- No Items --</h3>
      :
      <>
        <dt>Item(s): {shoppingCart.length} - Total: ${sumOfPrices.toFixed(2)}</dt>
        <ul>
          {shoppingCart.map((item, index)=>{
            return(
              <li key={index}>
                <dd>{item.name} - ${item.price}
                  <button onClick={()=> removeFromCart(index)} style={{marginLeft: "10px"}}>-</button>
                </dd>
                {/* For the removeFromCart() function, we are passing the index of the item that from the array that is appended as items are added to the shoppingCart state variable because if we use the item.id as the key identifier --> It will remove ALL items with that item.id value, but we want to remove only a single element of the shoppingCart array --> This way, we can have multiple idetnical items and when we remove we only remove ONE of those and not ALL of the same name/item.id */}
                
              </li>
            )
          })}
        </ul>
      </>}
    </>

  )
}

export default ShoppingCart;