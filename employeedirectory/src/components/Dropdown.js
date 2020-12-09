const Dropdown = props => {
    return (
    <ul id={props.dropdown} className="dropdown-content">{props.children}</ul>
    );
};

export default Dropdown;