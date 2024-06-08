import { useState } from "react";
import * as produceService from "../../services/produceService.js"
import ProduceList from "./ProduceList/ProduceList.jsx";
import ProduceForm from "./ProduceForm/ProduceForm.jsx";
import ProduceDetails from "./ProduceDetails/ProduceDetials.jsx";

const Produce = () => {
  const [selectedProduce, setSelectedProduce] = useState(null);
  const [view, setView] = useState('list')

  const handleAddProduce = async (FormData) => {
    try {
      const newItem = await produceService.create(FormData);

      if (newItem.error) {
        throw new Error(newItem.error)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {view === 'list' && (
        <ProduceList produceService={produceService} setView={setView} setSelectedProduce={setSelectedProduce} />
      )}
      {view === 'new' && (
        <ProduceForm handleAddProduce={handleAddProduce} />
      )}
      {view === 'details' && (
        <ProduceDetails selectedProduce={selectedProduce} setView={setView} />
      )}
    </div>
  )
}

export default Produce;