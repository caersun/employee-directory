const EmployeeCard = props => {
    return (
        <div className="card">
            <div className="card-image">
                <img 
                src={props.img} 
                alt="user" 
                />
                <span className="card-title">
                    {props.firstName} {props.lastName}
                </span>
            </div>
            <div className="card-content">
                <p>Phone: {props.phone}</p>
                <p>E-mail: {props.email}</p>
            </div>
        </div>
    );
}
export default EmployeeCard;