import { useState } from "react"

const ProduceForm = ({ handleAddProduce, setView }) => {
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
        setView('list');
    };

    return (
        <div className="form-container">
            <h2>Add new item to the Produce list</h2>
            <hr />
            <form className="produce-form" onSubmit={handleSubmit}>
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
                <button className="button" type="submit">Add item to the produce list</button>
            </form>
            <button className="button back-button" onClick={() => setView('list')}>Back to the list</button>
        </div>
    )
};

export default ProduceForm;