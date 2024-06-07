//Django API URL
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/meats`;

//Functions
const fetchMeats = async () => {
    try{
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data); //Check if Data is retrieved
        return data;
    }catch(error){
        console.error(error.message);
    }
};



//Export
export {fetchMeats};