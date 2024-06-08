import { useState } from "react";

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
        const filteredListOfMeats = meats.filter((meat)=>{return meat.name.toLowerCase().includes(input.toLowerCase())});
        setFilteredMeats(filteredListOfMeats);
    };

    const handleClear = () => {
        setFilteredMeats(meats);
        setInput("");
    }

  return (

    <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search Meat: </label>
        <input id="search" type="text" value={input} onChange={handleInputChange} />
        <button type="submit">search</button>
        <button onClick={handleClear}>clear</button>
        </form>
    </>

  )
}

export default Searchbar;