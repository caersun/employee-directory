import { Component } from "react";
import API from "../utils/API";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import UserList from "./UserList";

class Directory extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        API
            .getUsers(100)
            .then(res => { this.setState({ users: res.data.results })})
            .catch(err => console.log(err));
    };

    render() {
        const { users } = this.state;
        return (
            <Container>
                <Row>
                    <Col size="s6">
                        <UserList users={users}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Directory;