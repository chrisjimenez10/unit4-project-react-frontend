const ProduceList = ({ produceList, setView, setSelectedProduce }) => {

    const handleClick = (event, produce) => {
        event.preventDefault();
        setSelectedProduce(produce);
        setView('details');
    }

    return (
        <div className="container">
            <h1 className="title">Produce</h1>
                <div className="produce-list-container">
                    <ul className="produce-list">
                        {produceList.map((item) => (
                            <li className="produce-item" key={item.id} onClick={(event) => handleClick(event, item)}><a href="" >{item.name}</a></li>
                        ))}
                    </ul>
                </div>
                <button onClick={() => setView('new')}>Add New Item to the Produce List</button>
        </div>
    )
}

export default ProduceList;