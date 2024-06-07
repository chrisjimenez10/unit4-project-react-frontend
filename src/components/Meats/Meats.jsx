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
      <h1>Meats</h1>
      <ol>
        {meats.map((meat)=>{
          return(
            <li key={meat.id}>
              <h3>{meat.name}</h3>
              <h3>{meat.description}</h3>
              <h3>Grown in {meat.origin}</h3>
              <h4>Packaged in {meat.packaged}</h4>
              <h4>Price: ${meat.price}</h4>
            </li>
          )
        })}
      </ol>
    </>

  )
}

export default Meats;