//Import
import { fetchMeats, createMeat, editMeat, deleteMeat } from "../../services/meatService";
import { useState, useEffect } from "react";
import Form from "./Form/Form";
import Searchbar from "./Searchbar/Searchbar";


const Meats = () => {

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

      <dt onClick={handleRenderForm}>Form</dt>
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
            <li key={meat.id}>
              <dt>{meat.name}</dt>
              <dd>{meat.description}</dd>
              <dd>Grown in {meat.origin}</dd>
              <dd>Price: ${meat.price}</dd>
              <button onClick={()=> handleEdit(meat)}>edit</button>
              <button onClick={()=> handleDeleteMeat(meat.id)}>delete</button>
            </li>
          )
        })}
      </ol>

      

    </>

  )
}

export default Meats;