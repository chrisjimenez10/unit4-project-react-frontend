//Import
import { fetchMeats, createMeat, editMeat, deleteMeat } from "../../services/meatService";
import { useState, useEffect, useContext } from "react";
import { ShoppingCartContext } from "../../App";
import Form from "./Form/Form";
import Searchbar from "./Searchbar/Searchbar";
import styles from "./Meats.module.css";

const Meats = () => {

  //Using the useContext() Hook to access the state (or any value that is passed like a function, state, etc.) that is Provided from the Parent Component --> We can create a variable that we can use to access the properties of the Provider (values being passed to it) by setting it equal to the useContext() Hook and the argument set to the variable holding the createContext() that was exported from the Parent Component (App) --> NOTE: If we are passing multiple values to through the Provider, we MUST pass them as an object - THEREFORE, the "useContext(ShoppingCartContext)" IS the object itself, all of it --> so we only need to use dot notation after the parenthesis to access the value we want
  const {addToCart} = useContext(ShoppingCartContext);

  //Shopping Cart Function
  const addItemToCart = (item) => {
    addToCart(item);
  };

  //State
  const [meats, setMeats] = useState([]);
  const [filteredMeats, setFilteredMeats] = useState([]);
  const [meatToEdit, setMeatToEdit] = useState(null);
  const [renderForm, setRenderForm] = useState("");

  //Functions
  const fetchMeatsDatabase = async () => {
    try{
      const listOfMeats = await fetchMeats();
      setMeats(listOfMeats);
      setFilteredMeats(listOfMeats);
    }catch(error){
      console.error(`Error fetching players: ${error.message}`)
    }
  };

  //Populate/Re-Populate from Database
  useEffect(()=>{
    fetchMeatsDatabase();
  }, []);

  //Handlers
  const handleRenderForm = () => {
      if(renderForm === ""){
        setRenderForm("form");
      }
      if(renderForm === "form"){
        setRenderForm("");
        setMeatToEdit(null);
      }
  };

  const handleCreateMeat = async (meatData) => {
    try{
      await createMeat(meatData);
      fetchMeatsDatabase();
    }catch(error){
      console.error(error.message)
    }
  };

  const handleEditMeat = async (id, meatData) => {
    try{
      await editMeat(id, meatData);
      fetchMeatsDatabase();
    }catch(error){
      console.error(error.message)
    }
  };

  const handleEdit = (meatData) => {
    setMeatToEdit(meatData);
    setRenderForm("form");
  }

  const handleDeleteMeat = async (id) => {
    try{
      await deleteMeat(id);
      fetchMeatsDatabase();
    }catch(error){
      console.error(error.message)
    }
  };


  return (

    <>
      <h1>Meats</h1>

      <Searchbar meats={meats} setFilteredMeats={setFilteredMeats}/>

      <dt onClick={handleRenderForm} style={{textDecoration: "underline", cursor: "pointer"}}>Form</dt>
      {renderForm === "form" && (
        <Form 
        handleCreateMeat={handleCreateMeat}
        meatToEdit={meatToEdit}
        setMeatToEdit={setMeatToEdit}
        handleEditMeat={handleEditMeat}
        />
      )}

      <ol>
        {filteredMeats.map((meat)=>{
          return(
            <li key={meat.id} className={styles.listItems}>
              <dt className={styles.meatName}>{meat.name}</dt>
              <dd>Source: {meat.description}</dd>
              <dd className={styles.origin}>Grown in {meat.origin}</dd>
              <dd>Price: ${meat.price}</dd>
              <div className={styles.buttonGroup}>
                <button onClick={()=> handleEdit(meat)} className={styles.updateButton}>edit</button>
                <button onClick={()=> handleDeleteMeat(meat.id)} className={styles.deleteButton}>delete</button>
                <button onClick={()=> addItemToCart(meat)} className={styles.shoppingListButton}>+</button>
              </div>
            </li>
          )
        })}
      </ol>

    </>

  )
}

export default Meats;