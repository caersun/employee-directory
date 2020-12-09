import { Component } from "react"; // useImperativeHandle, useReducer
import API from "../utils/API";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
// import UserList from "./UserList";
import UserCard from "./UserCard";

class Directory extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        API
            .getUsers(25)
            .then(res => { 
                // console.log("res, res.data", res, res.data);
                this.setState({ users: res.data.results });
            })
            .catch(err => console.log(err));
    };

    // sort table by a category (name, alphabetical asc and desc)
    // filter the users by a property (gender and nat)

    render() {
        const { users } = this.state;
        console.log("users from render() in Directory", users);
        return (
            <Container>
                <Row>
                        {this.state.users.map((user) => (
                            <Col size="s6" key={user.login.uuid}>
                                <UserCard 
                                title={user.name.title}
                                firstName={user.name.first}
                                lastName={user.name.last}
                                img={user.picture.large}
                                phone={user.phone}
                                email={user.email}
                                nat={user.nat}
                                gender={user.gender}
                                />
                            </Col>
                        ))}
                </Row>
            </Container>
        )
    }
}

export default Directory;