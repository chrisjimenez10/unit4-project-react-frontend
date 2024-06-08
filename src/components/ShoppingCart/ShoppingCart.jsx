//Import
import { useContext } from "react";
import { ShoppingCartContext } from "../../App";


const ShoppingCart = () => {

  //Use globally shared values from Provider (state, functions to set state of Shopping Cart)
    //Since the value we are passing through the Provider in our App Component is an object, we can destructure it to access the properties individually in later logic
  const {shoppingCart, removeFromCart} = useContext(ShoppingCartContext);


  //Total Price Logic
  const priceFieldArray = shoppingCart.map((item)=>{
    return parseFloat(item.price);
  });
  // console.log(priceFieldArray);

  const sumOfPrices = priceFieldArray.reduce((accumulator, currentValue)=>{
    return (accumulator + currentValue);
  }, 0);
  // console.log(sumOfPrices);



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
                <dd>{item.name} - ${item.price}</dd>
                {/* For the removeFromCart() function, we are passing the index of the item that from the array that is appended as items are added to the shoppingCart state variable because if we use the item.id as the key identifier --> It will remove ALL items with that item.id value, but we want to remove only a single element of the shoppingCart array --> This way, we can have multiple idetnical items and when we remove we only remove ONE of those and not ALL of the same name/item.id */}
                <button onClick={()=> removeFromCart(index)}>remove</button>
              </li>
            )
          })}
        </ul>
      </>}
    </>

  )
}

export default ShoppingCart;