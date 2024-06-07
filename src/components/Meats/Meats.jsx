//Import
import { fetchMeats, createMeat, editMeat, deleteMeat } from "../../services/meatService";
import { useState, useEffect } from "react";
import Form from "./Form/Form";

const Meats = () => {

  //State
  const [meats, setMeats] = useState([]);
  const [meatToEdit, setMeatToEdit] = useState(null);
  const [renderForm, setRenderForm] = useState("");

  //Functions
  const fetchMeatsDatabase = async () => {
    try{
      const listOfMeats = await fetchMeats();
      setMeats(listOfMeats);
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

      <button onClick={handleRenderForm}>Form</button>
      {renderForm === "form" && (
        <Form 
        handleCreateMeat={handleCreateMeat}
        meatToEdit={meatToEdit}
        setMeatToEdit={setMeatToEdit}
        handleEditMeat={handleEditMeat}
        />
      )}

      <ol>
        {meats.map((meat)=>{
          return(
            <li key={meat.id}>
              <h3>{meat.name}</h3>
              <h3>{meat.description}</h3>
              <h3>Grown in {meat.origin}</h3>
              <h4>Price: ${meat.price}</h4>
              <button onClick={()=> handleEdit(meat)}>Edit</button>
              <button onClick={()=> handleDeleteMeat(meat.id)}>Delete</button>
            </li>
          )
        })}
      </ol>
    </>

  )
}

export default Meats;