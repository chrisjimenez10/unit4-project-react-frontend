import { useState } from "react"

const ProduceForm = ({ handleAddProduce }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        type: '',
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted', formData);
        handleAddProduce(formData);
    };

    return (
        <div>
            <h2>Add new items to the Produce list</h2>
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
                <button type="submit">Add item to the produce list</button>
            </form>
        </div>
    )
};

export default ProduceForm;