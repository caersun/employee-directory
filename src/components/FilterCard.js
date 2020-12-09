const FilterCollection = props => {
    return (
        <ul className="collection with-header">
            <li className="collection-header"><h4>Show only...</h4></li>
            <li className="collection-item" onClick={() => props.filterByGender("male")}>Men</li>
            <li className="collection-item" onClick={() => props.filterByGender("female")}>Women</li>
        </ul>
    );
};

export default FilterCollection;