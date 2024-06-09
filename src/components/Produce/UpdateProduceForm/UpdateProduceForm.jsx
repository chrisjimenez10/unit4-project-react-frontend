import { useState, useEffect } from "react"

const UpdateProduceForm = ({ selectedProduce, updateProduce, setView }) => {
    
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        type: '',
    });

    useEffect(() => {
        if (selectedProduce) {
            setFormData({
                name: selectedProduce.name,
                price: selectedProduce.price,
                type: selectedProduce.type,
            })
        }
    }, [selectedProduce]);

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted', formData);
        updateProduce(formData, selectedProduce.id);
        setView('list');
    };
    
    return (
        <>
            <h2>Update item</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name </label>
                <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="price">Price </label>
                <input
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="type">Type </label>
                <input
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Update</button>
            </form>
        </>
    )
}

export default UpdateProduceForm;