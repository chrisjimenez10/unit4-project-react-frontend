const ProduceDetails = ({ selectedProduce, setView }) => {
    return (
        <>
            <div>
                <h3>{selectedProduce.name}</h3>
                <p>${selectedProduce.price}</p>
                <p>{selectedProduce.type}</p>
            </div>
            <button>Update Produce Item</button>
            <button>Delete Produce Item</button>
            <button onClick={() => setView('list')}>Back to All Items</button>
        </>
    )
}

export default ProduceDetails;