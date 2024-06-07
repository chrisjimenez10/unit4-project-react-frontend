//Import
import { fetchMeats } from "../../services/meatService";
import { useState, useEffect } from "react";

const Meats = () => {

  //State
  const [meats, setMeats] = useState([]);

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
  }, [])

  return (

    <>
      
    </>

  )
}

export default Meats;