import {Routes, Route} from "react-router-dom";
import { createContext, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Beverages from "./components/Beverages/Beverages";
import Meats from "./components/Meats/Meats";
import Produce from "./components/Produce/Produce";
import Snacks from "./components/Snacks/Snacks";
import Checkout from "./components/Checkout/Checkout";

//createContext Hook and set value to "null" --> NOTE: The value is the default value if useContext is used outside of the provider, but we plan on using it within components that are INSIDE the provider so they can access the state we are passing to the provider itself, so it is common to set value to "null" because we are passing actual data in the form of state
export const ShoppingCartContext = createContext(null); //Exporting the variable that holds the createContext, so it can be imported and used ANY or ALL components that are inside the Provider


const App = () => {

  //State --> This is the state we want to access from ALL of our components, so we will have to pass it as the value to the Provider
  const [shoppingCart, setShoppingCart] = useState([]);

  //Functions - Shopping Cart 
    //NOTE: Keep the stateSetter() functions in the App component (or wherever we are creating the context and Provider) and create a function that will invoke the stateSetter() function, but will be the one to be passed as a value through the Provider --> This avoids conflicts/bugs with updating state when we simply pass the stateSetter() function itself
  const addToCart = (item) => {
    setShoppingCart([...shoppingCart, item]);
  };

  const removeFromCart = (itemId) => {
    //Using the index value of the element as filtering logic to KEEP any other duplicate items (if we pass the item.id from the ShoppingCart component, then this logic will filer out ALL items with the same item.id)
    setShoppingCart(shoppingCart.filter((item, index)=>{return index !== itemId}));
  };

  return (

    
    <main>
      {/* If we want to pass mulitple values to the Provider, we need to do it as an object --> NOTE: This is why there are two sets of curly braces, the first is JSX syntax and the other is the object we are creating to hold all the values we are passing (similar to how we export multiple functions in a js file) */}
      <ShoppingCartContext.Provider value={{shoppingCart, addToCart, removeFromCart, setShoppingCart}}>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/produce" element={<Produce />}>Produce</Route>
          <Route path="/meats" element={<Meats />}>Meats</Route>
          <Route path="/beverages" element={<Beverages />}>Beverages</Route>
          <Route path="/snacks" element={<Snacks />}>Snacks</Route>         
          <Route path="/checkout" element={<Checkout />}>Checkout</Route>         
      </Routes>
      </ShoppingCartContext.Provider>
    </main>

  )
}

export default App;
