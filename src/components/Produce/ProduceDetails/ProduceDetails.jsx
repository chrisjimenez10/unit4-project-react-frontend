const ProduceDetails = ({ selectedProduce, setView, deleteProduce }) => {
    
    return (
        <>
            <div>
                <h3>{selectedProduce.name}</h3>
                <p>${selectedProduce.price}</p>
                <p>{selectedProduce.type}</p>
            </div>
            <button onClick={() => setView('edit')}>Update Produce Item</button>
            <button onClick={() => deleteProduce(selectedProduce.id)}>Delete Produce Item</button>
            <button onClick={() => setView('list')}>Back to All Items</button>
        </>
    )
}

export default ProduceDetails;