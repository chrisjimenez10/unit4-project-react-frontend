//variables
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/snacks`;

//index
const fetchSnacks = async() => {
    try{
        console.log(BASE_URL);
        const res = await fetch(BASE_URL);
        return res.json();
    } catch(err) {
        console.log(err)
    }
};


//delete
const deleteSnack = async (snackId) => {

        const deletedSnack = await fetch(`http://127.0.0.1:8000/${snackId}`, {
            method: 'DELETE',
        });
        if (!deletedSnack.ok) {
            throw new Error('Failed to delete snack');
        }
        setSnacks(snacks.filter((snack) => snack.id !== snackId));
        return deletedSnack.json();
   
};

//create
const create = async (snack) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(snack)
        });
        return res.json();
    } catch (err) {
        console.log(err);
    };
}

const update = async (snack) => {
    console.log(snack.id)
    
        const res = await fetch(`${BASE_URL}/${snack.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(snack),
        });
        if(!res.ok) {
            throw new Error('Failed to update snack');
        }
        const data = await res.json();
        return data;
        // console.log(res.json());
        // return res.json();
   
};


export { fetchSnacks, create, update, deleteSnack }