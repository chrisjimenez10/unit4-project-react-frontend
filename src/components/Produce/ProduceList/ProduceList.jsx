const ProduceList = ({ produceList, setView, setSelectedProduce }) => {

    const handleClick = (event, produce) => {
        event.preventDefault();
        setSelectedProduce(produce);
        setView('details');
    }

    return (
        <div>
            <ul>
                {produceList.map((item) => (
                    <li key={item.id} onClick={(event) => handleClick(event, item)}><a href="" >{item.name}</a></li>
                ))}
            </ul>
            <button onClick={() => setView('new')}>Add New Item to the Produce List</button>
        </div>
    )
}

export default ProduceList;