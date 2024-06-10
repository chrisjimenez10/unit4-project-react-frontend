import { useState, useEffect, useContext } from 'react';
import { ShoppingCartContext } from '../../App';
import * as SnackService from '../../services/snacks';
import '../../components/Snacks/snacks.css';

const Snacks = () => {
  const {addToCart} = useContext(ShoppingCartContext);
  const addItemToCart = (item) => {
    addToCart(item);
  };

  const [snackList, setSnackList] = useState([]);
  const [newSnack, setNewSnack] = useState({
    name: '',
    description: '',
    type: '',
    price: '',
  });
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [updatedSnack, setUpdatedSnack] = useState({
    id: '',
    name: '',
    description: '',
    type: '',
    price: '',
  });
  const [show, setShow] = useState(false);
  const [viewState, setViewState] = useState(false);

  useEffect(() => {
    const getSnacks = async () => {
      try {
        const snacks = await SnackService.fetchSnacks();
        setSnackList(snacks);
      } catch (err) {
        console.log(err);
      }
    };
    getSnacks();
  }, [viewState]);

  const addSnack = async (snack) => {
    try {
      const newSnack = await SnackService.create(snack);
      setSnackList([...snackList, newSnack]);
      setNewSnack({ name: '', description: '', type: '', price: '' });
      setViewState(!viewState);
    } catch (err) {
      console.log(err);
    }
  };

  const updateSnack = async (snack, id) => {
    try {
      const updatedSnack = await SnackService.update(snack, id);
      const updatedSnackList = snackList.map((s) =>
        s.id !== updatedSnack.id ? s : updatedSnack
      );
      setSnackList(updatedSnackList);
      setIsUpdateOpen(false);
      setViewState(!viewState);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateForm = async (event) => {
    event.preventDefault();
    await updateSnack(updatedSnack, updatedSnack.id);
  };

  const handleUpdateView = (snack) => {
    setUpdatedSnack(snack);
    setIsUpdateOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSnack({
      ...newSnack,
      [name]: value,
    });
  };

  const handleUpdateInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedSnack({
      ...updatedSnack,
      [name]: value,
    });
  };

  const handleDelete = async (id) => {
    try {
      await SnackService.deleteSnack(id);
      setSnackList(snackList.filter((snack) => snack.id !== id));
      setViewState(!viewState);
    } catch (err) {
      console.log(err);
    }
  };

  const handleShow = () => {
    setShow(!show);
  }

  return (
    <>
      <div className='container'>
        <h1 className='title'>Snacks</h1>
      <div className='form-container'>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            addSnack(newSnack);
          }}
        >
          <label>Name: </label>
          <input
            type="text"
            name="name"
            
            value={newSnack.name}
            onChange={handleInputChange}
          />

          <br />

          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={newSnack.description}
            onChange={handleInputChange}
          />

          <br />

          <label>Type: </label>
          <input
            type="text"
            name="type"
            value={newSnack.type}
            onChange={handleInputChange}
          />

          <br />

          <label>Price: </label>
          <input
            type="text"
            name="price"
            value={newSnack.price}
            onChange={handleInputChange}
          />

          <br />

          <button className='button add-button' type="submit">Add Snack</button>
        </form>
        <div className='snack-list-container'>
        <ul className='snack-list'>
          {snackList.map((snack) => (
            <li key={snack.id} className='snack-item'>
              <h3>{snack.name}</h3>
              <p>${snack.price}</p>
              <div className='button-group'>
              <button onClick={() => handleUpdateView(snack)}>Update</button>
              <button onClick={() => handleDelete(snack.id)}>Delete</button>
              <button onClick={handleShow}>Show</button>
              <button onClick={()=> addItemToCart(snack)}>+</button>
              </div>
              {show ? 
              <div className='description'>
                <h4>Description:</h4>
                {snack.description}
                <h4>Type: </h4>
                {snack.type}
              </div> : null}
              {isUpdateOpen && updatedSnack.id === snack.id && (
                <form onSubmit={handleUpdateForm}>
                  <label>Name: </label>
                  <input
                    type="text"
                    name="name"
                    value={updatedSnack.name}
                    onChange={handleUpdateInputChange}
                  />

                  <br />

                  <label>Description: </label>
                  <input
                    type="text"
                    name="description"
                    value={updatedSnack.description}
                    onChange={handleUpdateInputChange}
                  />

                  <br />

                  <label>Type: </label>
                  <input
                    type="text"
                    name="type"
                    value={updatedSnack.type}
                    onChange={handleUpdateInputChange}
                  />

                  <br />

                  <label>Price: </label>
                  <input
                    type="text"
                    name="price"
                    value={updatedSnack.price}
                    onChange={handleUpdateInputChange}
                  />

                  <br />

                  <button type="submit">Update Snack</button>
                </form>
              )}
            </li>
          ))}
        </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Snacks;


// import { useState, useEffect } from 'react';
// import * as SnackService from '../../services/snacks';

// const Snacks = () => {
//   const [snack, setSnack] = useState([]);
//   const [snackList, setSnackList] = useState([]);
//   const [newSnack, setNewSnack] = useState({
//     name: '',
//     description: '',
//     type: '',
//     price: '',
//   });
//   const [isUpdateOpen, setIsUpdateOpen] = useState(false);
//   const [updatedSnack, setUpdatedSnack] = useState({
//     name: '',
//     description: '',
//     type: '',
//     price: '',
//   });
  

//   //index functions
//   useEffect(() => {
//     const getSnacks = async () => {
//       try{
//         const snacks = await SnackService.fetchSnacks();
//         setSnackList(snacks);
//       } catch(err) {
//         console.log(err);
//       }
//     }; 
//     getSnacks();
//   }, []);

//   //add snacks
//   const addSnack = async (snack) => {
//     try {
//       const newSnack = await SnackService.create(snack);
//       setSnackList([...snackList, newSnack]);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   //update snacks to backend
//   const updateSnack = async (snack, id) => {

//     try {
//       const updatedSnack = await SnackService.update(snack, id);

//       if(updatedSnack.error){
//         throw new Error(updatedSnack.error);
//       }
//       const updatedSnackList = snackList.map((snack) => 
//         snack.id !== updatedSnack.id ? snack : updatedSnack
//       );
//       setUpdatedSnack(updatedSnack);
//       setNewSnack(snack)
//       setSnackList(updatedSnackList);
//       setIsUpdateOpen(false);

//     } catch (err) {
//       console.log(err);
//     }

//     // try {
//     //   await SnackService.update(snack, snack.id);

//     // } catch (error) {
//     //   console.log(error);
//     // }  
//   };

//   //calling update function
//   const handleUpdateForm = async (event) => {
//     event.preventDefault();
//     try {
//       const updatedSnack = await updateSnack({
//         ...updatedSnack,
//         name: snack.name,
//         description: snack.description,
//         type: snack.type,
//         price: snack.price,
//       })
//       // setSnackList((snackList) => snackList.map((snack) => snack.id !== updatedSnack.id ? snack : updatedSnack;
//     } catch (error) {
//       console.log(error);
//     }
//     console.log(updatedSnack);
//     // console.log(snack);
//     updateSnack(updatedSnack, snack.id);
//   };

  
//   //viewing update form
//   const handleUpdateView = () => {
//     setUpdatedSnack(snack)
//     setIsUpdateOpen(!isUpdateOpen);
//   }

//   const handleInputChange = (e) => {
//     // const {name, value} = e.target;

//     // if(name === "price"){
//     //     // Here, we define the regex pattern to restrict client side input to have ONLY 2 decimal places --> NOTE: Once the value input DOES NOT match the regex pattern, it stops any further input from being displayed or entered 
//     //     const regex = /^\d+(\.\d{0,2})?$/;
//     //     if(!regex.test(value) && value !== "")
//     //         return;
//     // }

//     // setSnackList({
//     //   ...snackList,
//     //   newSnack
//     // });

//     setSnack({
//       ...snack, [e.target.name]: e.target.value
//     });
//   };

//   // const handleUpdateChange = (event) => {
//   //   setUpdatedSnack({ ...updatedSnack, [event.target.name]: event.target.value });
//   // }

//   const handleDelete = async (id) => {
//     try {
//       const deletedSnack = await SnackService.deleteSnack(id);
//       if (deletedSnack.error) {
//         throw new Error(deletedSnack.error);
//       }
//       setSnackList(snackList.filter((snack) => snack.id !== deletedSnack.id));
      
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return (
//     <>
//       <div>Snacks</div>
//       <main>
//         <form onClick={ () => addSnack(snack)}>
//           <label>Name: </label>
//           <input
//             id = "name"
//             type="text"
//             name="name"
//             value={snack.name}
//             onChange = {handleInputChange}
//           />

//           <br></br>

//           <label>Description: </label>
//           <input
//             id = "description"
//             type = 'textfield'
//             name = 'description'
//             value = {snack.description}
//             onChange = {handleInputChange}
//           />

//           <br></br>

//           <label>Type: </label>
//           <input
//             id = "type"
//             type = 'textfield'
//             name = 'type'
//             value = {snack.type}
//             onChange = {handleInputChange}
//           />

//           <br></br>

//           <label>Price: </label>
//           <input
//             id = "price"
//             type = 'decimal'
//             name = 'price'
//             value = {snack.price}
//             onChange = {handleInputChange}
//           />
          
//           <br></br>

//           <button type="submit" >Add Snack</button>
//         </form>
//         <ul>
//           {snackList.map((snack) => (
//             <li key={snack.id}>
//               <h3>{snack.name}</h3>
//               <p>${snack.price}</p>
//               <button onClick={() => {
//                 console.log(snack.id)
//                 handleUpdateView(snack)

//               }}>Update</button> 
//               <button onClick={() => handleDelete(snack.id)}>Delete</button>

//               {isUpdateOpen ? (
//                 <form onSubmit={ () => {updateSnack(snack.id)}}>
//                   <label htmlFor='name'>Name: </label>
//                   <input
//                     id="name"
//                     type="text"
//                     name="name"
//                     value={updatedSnack.name}
//                     //defaultValue={snack.name}
//                     onChange = {handleInputChange}
//                   />

//                   <br></br>

//                   <label htmlFor='description'>Description: </label>
//                   <input
//                     id="decription"
//                     type = 'textfield'
//                     name = 'description'
//                     value={updatedSnack.description}
//                     //defaultValue = {snack.description}
//                     onChange = {handleInputChange}
//                   />

//                   <br></br>

//                   <label htmlFor='type'>Type: </label>
//                   <input
//                     id="type"
//                     type = 'textfield'
//                     name = 'type'
//                     value={updatedSnack.type}
//                     //defaultValue = {snack.type}
//                     onChange = {handleInputChange}
//                   />

//                   <br></br>

//                   <label htmlFor='price'>Price: </label>
//                   <input
//                     id="price"
//                     key={snack.id}
//                     type = 'decimal'
//                     name = 'price'
//                     value={updatedSnack.price}
//                     //defaultValue = {snack.price}
//                     onChange = {handleInputChange}
//                   />
                  
//                   <br></br>

//                   <button type="submit" onClick={handleUpdateForm}>Update Snack</button>
//                 </form>
//               ) : null} 
//             </li>
//           ))}
//         </ul>
//       </main>
//     </>
//   )
// }

// export default Snacks;