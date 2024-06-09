import { useContext } from "react";
import { ShoppingCartContext } from "../../../App";

const ProduceDetails = ({ selectedProduce, setView, deleteProduce }) => {

    const {addToCart} = useContext(ShoppingCartContext);
    const addItemToCart = (item) => {
        addToCart(item);
      };
    
    return (
        <>
            <div>
                <h3>{selectedProduce.name}</h3>
                <p>${selectedProduce.price}</p>
                <p>{selectedProduce.type}</p>
            </div>
            <button onClick={() => setView('edit')}>Update Produce Item</button>
            <button onClick={() => deleteProduce(selectedProduce.id)}>Delete Produce Item</button>
            <button onClick={() => setView('list')}>Back to All Items</button>
            <button onClick={()=> addItemToCart(selectedProduce)}>+</button>
        </>
    )
}

export default ProduceDetails;