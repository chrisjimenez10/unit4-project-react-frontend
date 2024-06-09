import { useState, useEffect } from 'react';
import { fetchBeverages } from '../../services/beverage';
import './Beverages.css';

const Beverages = () => {
  const [beverages, setBeverages] = useState([]); // creating a state variable for the beverages
  const [newBeverageName, setNewBeverageName] = useState(''); // creating a state variable for the new beverage name
  const [newBeveragePrice, setNewBeveragePrice] = useState(''); // creating a state variable for the new beverage price
  const [newBeverageType, setNewBeverageType] = useState(''); // creating a state variable for the new beverage type
  const [newBeverageDescription, setNewBeverageDescription] = useState(''); // creating a state variable for the new beverage description
  const [updateBeverage, setUpdateBeverage] = useState(null); // creating a state variable for the update beverage
  const [displayedDescriptionId, setDisplayedDescriptionId] = useState(null); // creating a state variable for the displayed description

  // functions to fetch the beverages and create a new beverage
  const createBeverage = async (beverage) => {
    const response = await fetch('http://localhost:8000/api/beverages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(beverage),
    });
    if (!response.ok) {
      throw new Error('Failed to create beverage');
    }
    const data = await response.json();
    return data;
  };

  const fetchBeveragesData = async () => {
    try {
      const beveragesData = await fetchBeverages();
      setBeverages(beveragesData);
    } catch (error) {
      console.error(error);
    }
  };

  // PUT - UPDATE an existing beverage
  const updateBeverageData = async (beverage) => {
    const response = await fetch(`http://localhost:8000/api/beverages/${beverage.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(beverage),
    });
    if (!response.ok) {
      throw new Error('Failed to update beverage');
    }
    const data = await response.json();
    return data;
  };

  // DELETE - DELETE an existing beverage
  const deleteBeverage = async (beverageId) => {
    const response = await fetch(`http://localhost:8000/api/beverages/${beverageId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete beverage');
    }
    setBeverages(beverages.filter((beverage) => beverage.id !== beverageId));
  };

  const handleNewBeverageSubmit = async (event) => {
    event.preventDefault();
    try {
      const newBeverage = {
        name: newBeverageName,
        price: newBeveragePrice,
        type: newBeverageType,
        description: newBeverageDescription,
        createdAt: new Date().toLocaleString()
      };
      const createdBeverage = await createBeverage(newBeverage);
      setBeverages((prevBeverages) => [...prevBeverages, createdBeverage]);
      setNewBeverageName('');
      setNewBeveragePrice('');
      setNewBeverageType('');
      setNewBeverageDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateClick = (beverage) => {
    setUpdateBeverage(beverage);
    setNewBeverageName(beverage.name);
    setNewBeveragePrice(beverage.price);
    setNewBeverageType(beverage.type);
    setNewBeverageDescription(beverage.description);
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedBeverage = await updateBeverageData({
        ...updateBeverage,
        name: newBeverageName,
        price: newBeveragePrice,
        type: newBeverageType,
        description: newBeverageDescription,
      });
      setBeverages((prevBeverages) =>
        prevBeverages.map((b) => (b.id === updatedBeverage.id ? updatedBeverage : b))
      );
      setUpdateBeverage(null);
      setNewBeverageName('');
      setNewBeveragePrice('');
      setNewBeverageType('');
      setNewBeverageDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBeveragesData();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="title">Beverages</h1>
        <div className="beverage-list-container">
          <ul className="beverage-list">
            {beverages.map((beverage) => (
              <li key={beverage.id} className="beverage-item">
                <div className="beverage-info">
                  <div className="beverage-details">
                    <div className="beverage-name">{beverage.name}</div>
                    <div className="beverage-price">${beverage.price}</div>
                    <div className="beverage-date">Added at: {beverage.createdAt}</div>
                  </div>
                  <div className="button-group">
                    <button className="button update-button" onClick={() => handleUpdateClick(beverage)}>Update</button>
                    <button className="button delete-button" onClick={() => deleteBeverage(beverage.id)}>Delete</button>
                    <button
                      onClick={() =>
                        setDisplayedDescriptionId(
                          displayedDescriptionId === beverage.id ? null : beverage.id
                        )
                      }
                    >                      
                      Toggle Description
                    </button>
                  </div>
                </div>
                <>
                {displayedDescriptionId === beverage.id && (
  <>
    
    <div className="description"><h4>Description:</h4>{beverage.description}</div>
  </>
)}
</>
                {updateBeverage && updateBeverage.id === beverage.id && (
                  <form className="beverage-form" onSubmit={handleUpdateSubmit}>
                    <h3>Update Beverage</h3>
                    <input
                      type="text"
                      placeholder="Name"
                      value={newBeverageName}
                      onChange={(event) => setNewBeverageName(event.target.value)}
                      required
                    />
                    <input
                      type="number"
                      placeholder="Price"
                      value={newBeveragePrice}
                      onChange={(event) => {
                        const value = parseFloat(event.target.value);
                        if (Number.isFinite(value)) {
                          setNewBeveragePrice(parseFloat(value.toFixed(2)));
                        }
                      }}
                      required
                    />
                     <select
      value={newBeverageType}
      onChange={(event) => setNewBeverageType(event.target.value)}
      required
    >
      <option value="">Select type</option>
      <option value="produce">Produce</option>
      <option value="meat">Meat</option>
      <option value="beverage">Beverage</option>
      <option value="snack">Snack</option>
    </select>
                    
                    <textarea
                      placeholder="Description"
                      value={newBeverageDescription}
                      onChange={(event) => setNewBeverageDescription(event.target.value)}
                      required
                    /> 
                    <button className="button update-button" type="submit">Update</button>
                  </form>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="form-container">
          <h2> Add New Beverage</h2>
          <form className="beverage-form" onSubmit={handleNewBeverageSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={newBeverageName}
              onChange={(event) => setNewBeverageName(event.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Price"
              value={newBeveragePrice}
              onChange={(event) => {
                const value = parseFloat(event.target.value);
                if (Number.isFinite(value)) {
                  setNewBeveragePrice(parseFloat(value.toFixed(2)));
                }
              }}
              required
            />
             <select
      value={newBeverageType}
      onChange={(event) => setNewBeverageType(event.target.value)}
      required
    >
      <option value="">Select type</option>
      <option value="produce">Produce</option>
      <option value="meat">Meat</option>
      <option value="beverage">Beverage</option>
      <option value="snack">Snack</option>
    </select>
            <textarea
              placeholder="Description"
              value={newBeverageDescription}
              onChange={(event) => setNewBeverageDescription(event.target.value)}
              required
            />
            <button className="button add-button" type="submit">Add Beverage</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Beverages;
