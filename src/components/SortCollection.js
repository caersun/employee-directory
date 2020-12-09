const SortCollection = props => {
    return (
        <ul className="collection with-header">
            <li className="collection-header"><h4>Sort by...</h4></li>
            <li className="collection-item" onClick={() => props.sortAsc()}>Last name (A-Z)</li>
            <li className="collection-item" onClick={() => props.sortDesc()}>Last name (Z-A)</li>
        </ul>
    );
};

export default SortCollection;