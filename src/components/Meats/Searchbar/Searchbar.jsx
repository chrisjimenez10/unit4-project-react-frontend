import { useState } from "react";
import styles from "./Searchbar.module.css";

const Searchbar = ({meats, setFilteredMeats}) => {

    //State
    const [input, setInput] = useState("");

    //Functions
    const handleInputChange = (e) => {
        const {value} = e.target;
        setInput(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredListOfMeats = meats.filter((meat)=>{return meat.description.toLowerCase().includes(input.toLowerCase())});
        setFilteredMeats(filteredListOfMeats);
    };

    const handleClear = () => {
        setFilteredMeats(meats);
        setInput("");
    }

  return (

    <>
        <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="search">Search Meat by Source: </label>
        <input id="search" type="text" value={input} onChange={handleInputChange} placeholder='animal'/>
        <button type="submit" className={styles.searchButton}>search</button>
        <button onClick={handleClear} className={styles.clearButton}>clear</button>
        </form>
    </>

  )
}

export default Searchbar;