const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/produce`;

//Index route
const index = async () => {
    try {
    const res = await fetch(BASE_URL); // Makes a GET request to the backend
    return res.json(); // Returns the JSON response
    } catch (error) {
        console.log(error);
    }
};

// Create route
const create = async (FormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST', // Specifies the request method as POST
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(FormData) // Converts the form data to a JSON string
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

//Update route
// const update = async (FormData, movieId) => {
//     try {
//         const res = await fetch(`${BASE_URL}/${movieId}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(FormData)
//         });
//         return res.json();
//     } catch (error) {
//         console.log(error);
//     }
// };

//Delete route
// const remove = async (movieId) => {
//     try {
//         const res = await fetch(`${BASE_URL}/${movieId}`, {
//             method: 'DELETE',
//         });
//         return res.json();
//     } catch (error) {
//         console.log(error);
//     }
// };

export { index, create };