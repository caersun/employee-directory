import UserCard from "./UserCard";

const UserList = props => {
    return (
        <div>
            {props.users.map(user => (
                <UserCard key={user.id.value} user={user} />
            ))}
        </div>
    );
}

export default UserList;