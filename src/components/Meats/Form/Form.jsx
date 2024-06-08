import { useState, useEffect } from "react";
import styles from "./Form.module.css";

const Form = ({handleCreateMeat, meatToEdit, setMeatToEdit, handleEditMeat}) => {

    //State
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        description: "",
        origin: "",
        price: "",
    });

    //Edit Feature - Display Data of Meat that is going to be updated
    useEffect(()=>{
        if(meatToEdit){
            setFormData({
                name: meatToEdit.name,
                type: meatToEdit.type,
                description: meatToEdit.description,
                origin: meatToEdit.origin,
                price: meatToEdit.price,
            });
        }
    }, [meatToEdit]);

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
        e.preventDefault();

        if(meatToEdit){
            handleEditMeat(meatToEdit.id, formData);
        }else{
            handleCreateMeat(formData)
        }
        setFormData({
            name: "",
            description: "",
            origin: "",
            price: "",
        });
        setMeatToEdit(null);
    };

  return (

    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} className={styles.input}></input>

        {/* <label htmlFor="type">Type: </label>
        <input id="type" name="type" type="text" required value={formData.type} onChange={handleInputChange} className={styles.input}></input> */}

        <label htmlFor="description">Description: </label>
        <input id="description" name="description" type="text" required value={formData.description} onChange={handleInputChange} className={styles.input}></input>

        <label htmlFor="origin">Origin: </label>
        <input id="origin" name="origin" type="text" required value={formData.origin} onChange={handleInputChange} className={styles.input}></input>

        <label htmlFor="price">Price: </label>
            {/* Here, the attribute step="0.1" only serves to allow increment or decrement of .01 --> However, it does not restrict the input to ONLY 2 decimal places if user inputs it manually */}
        <input id="price" name="price" type="number" step=".01" required value={formData.price} onChange={handleInputChange} className={styles.input}></input>

        <button type="submit" disabled={formData.name === "" || formData.description === "" || formData.origin === "" || formData.price === ""}>{meatToEdit ? "Edit" : "Add"}</button>

    </form>

  )
}

export default Form;