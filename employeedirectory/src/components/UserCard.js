const UserCard = props => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.user.picture.medium} alt="user" />
                <span className="card-title">
                    {props.user.name.title}. {props.user.name.first} {props.user.name.last}
                </span>
            </div>
            <div className="card-content">
                <p>Phone: {props.user.phone}</p>
                <p>E-mail: {props.user.email}</p>
            </div>
        </div>
    );
}
export default UserCard;