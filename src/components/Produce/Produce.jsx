import { useState, useEffect } from "react";
import * as produceService from "../../services/produceService.js"
import ProduceList from "./ProduceList/ProduceList.jsx";
import ProduceForm from "./ProduceForm/ProduceForm.jsx";
import ProduceDetails from "./ProduceDetails/ProduceDetails.jsx";
import UpdateProduceForm from "./UpdateProduceForm/UpdateProduceForm.jsx";

const Produce = () => {
  const [selectedProduce, setSelectedProduce] = useState(null);
  const [view, setView] = useState('list')
  const [produceList, setProduceList] = useState([]);


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
  }, []);

  const handleAddProduce = async (formData) => {
    try {
      const newItem = await produceService.create(formData);

      if (newItem.error) {
        throw new Error(newItem.error)
      }
      setProduceList([...produceList, newItem]);
      setView('list');
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduce =  async (formData, produceId) => {
    try {
      const update = await produceService.update(formData, produceId);

      if (update.error) {
        throw new Error(update.error);
      }
      setProduceList(produceList.map(item => item.id === produceId ? update : item));
      setView('list');
    } catch (error) {
      console.log(error);
    }
  }

  const deleteProduce = async (produceId) => {
    try {
      const deleted = await produceService.remove(produceId);

      if (deleted.error) {
        throw new Error(deleted.error)
      }
      setProduceList(produceList.filter(item => item.id !== produceId));
      setView('list');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {view === 'list' && (
        <ProduceList produceList={produceList} setView={setView} setSelectedProduce={setSelectedProduce} />
      )}
      {view === 'new' && (
        <ProduceForm handleAddProduce={handleAddProduce} setView={setView} />
      )}
      {view === 'details' && (
        <ProduceDetails selectedProduce={selectedProduce} setView={setView} updateProduce={updateProduce} deleteProduce={deleteProduce} />
      )}
      {view === 'edit' && (
        <UpdateProduceForm selectedProduce={selectedProduce} updateProduce={updateProduce} setView={setView} />
      )}
    </div>
  )
}

export default Produce;