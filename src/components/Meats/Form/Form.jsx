import { useState, useEffect } from "react";
import styles from "./Form.module.css";

const Form = () => {

    //State
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        origin: "",
        price: "",
    });

    //Functions
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        if(name === "price"){
            // Here, we define the regex pattern to restrict client side input to have ONLY 2 decimal places --> NOTE: Once the value input DOES NOT match the regex pattern, it stops any further input from being displayed or entered 
            const regex = /^\d+(\.\d{0,2})?$/;
            if(!regex.test(value) && value !== "")
                return;
        }

        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        
    };

  return (

    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange}></input>

        <label htmlFor="description">Description: </label>
        <input id="description" name="description" type="text" required value={formData.description} onChange={handleInputChange}></input>

        <label htmlFor="origin">Origin: </label>
        <input id="origin" name="origin" type="text" required value={formData.origin} onChange={handleInputChange}></input>

        <label htmlFor="price">Price: </label>
            {/* Here, the attribute step="0.1" only serves to allow increment or decrement of .01 --> However, it does not restrict the input to ONLY 2 decimal places if user inputs it manually */}
        <input id="price" name="price" type="number" step=".01" required value={formData.price} onChange={handleInputChange}></input>

        <button type="submit">Add</button>

    </form>

  )
}

export default Form;