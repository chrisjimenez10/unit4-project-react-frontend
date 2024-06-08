import { useState, useEffect } from "react";

const ProduceList = ({ produceService, setView, setSelectedProduce }) => {
    const [produceList, setProduceList] = useState([]);

    
    const handleClick = (event, produce) => {
        event.preventDefault();
        setSelectedProduce(produce);
        setView('details');
    }
  
  
    useEffect(() => {
      const fetchProduce = async () => {
        try {
          const produce = await produceService.index();
          if (produce.error) {
            throw new Error(produce.error);
          }
          setProduceList(produce);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProduce();
    },);


    return (
        <div>
            {produceList.map((item) => (
                <ul key={item._id}>
                    <li>{item.name} onClick={(event) => handleClick(event, item)}</li>
                </ul>
            ))}
            <button onClick={setView('new')}>Add New Item to the Produce List</button>
        </div>
    )
}

export default ProduceList;