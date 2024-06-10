import { useContext } from "react";
import { ShoppingCartContext } from "../../../App";

const ProduceDetails = ({ selectedProduce, setView, deleteProduce }) => {

    const {addToCart} = useContext(ShoppingCartContext);
    const addItemToCart = (item) => {
        addToCart(item);
      };
    
    return (
        <>
            <div className="description">
                <h3 className="produce-name">{selectedProduce.name}</h3>
                <p className="produce-price">${selectedProduce.price}</p>
                <p className="produce-details">{selectedProduce.type}</p>
            </div>
            <div className="button-group">
                <button className="button update-button" onClick={() => setView('edit')}>Update Produce Item</button>
                <button className="button delete-button" onClick={() => deleteProduce(selectedProduce.id)}>Delete Produce Item</button>
                <button className="back-button" onClick={() => setView('list')}>Back to All Items</button>
                <button onClick={()=> addItemToCart(selectedProduce)}>+</button>
            </div>
        </>
    )
}

export default ProduceDetails;