import { Component } from "react"; // useImperativeHandle, useReducer
import API from "../utils/API";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
// import Navbar from "./Navbar";
// import NavbarLink from "./NavbarLink";
// import Dropdown from "./Dropdown";
// import FilterCard from "./FilterCard";
import SortCollection from "./SortCollection";
import EmployeeCard from "./EmployeeCard";
import FilterCollection from "./FilterCard";

class Directory extends Component {
    state = {
        employees: [],
        filteredEmployees: []
    };

    componentDidMount() {
        API
            .getEmployees(25)
            .then(res => { 
                // console.log("res, res.data", res, res.data);
                this.setState({
                    employees: res.data.results,
                    filteredEmployees: res.data.results
                });
            })
            .catch(err => console.log(err));
    };

    // sort table by a category (name, alphabetical asc and desc)
    // filter the users by a property (gender and nat)

    

    // filterByNat = nat => {
    //     const filteredEmployees = this.state.employees.filter(employee => {
    //         if (employee.nat === nat) { 
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     });
    //     this.setState({ employees: filteredEmployees });
    // }

    filterByGender = gender => {
        const filteredEmployees = this.state.employees.filter(employee => {
            if (employee.gender === gender) {
                return true;
            } else {
                return false;
            }
        });

        this.setState({ filteredEmployees })
    }

    sortAsc = () => {
        const ascEmployees = this.state.employees.sort((a, b) => {
            if (a.name.last < b.name.last) {
                return -1;
            }
            if (a.name.last > b.name.last) {
                return 1;
            }
            return 0;
        });

        this.setState({ filteredEmployees: ascEmployees });
    };

    sortDesc = () => {
        const descEmployees = this.state.employees.sort((a, b) => {
            if (a.name.last > b.name.last) {
                return -1;
            }
            if (a.name.last < b.name.last) {
                return 1;
            }
            return 0;
        });

        this.setState({ filteredEmployees: descEmployees });
    };

    render() {
        const employees = this.state.filteredEmployees;
        // console.log("employees from render() in Directory", employees);
        return (
            
                <Container>
                    <Row>
                        <Col size="s12 m4">
                            <SortCollection 
                                sortAsc={this.sortAsc}
                                sortDesc={this.sortDesc}
                            />
                        </Col>
                        <Col size="s12 m4 l3">
                            <FilterCollection 
                                filterByGender={this.filterByGender}
                            />
                        </Col>
                    </Row>
                    
                    <Row>
                        {employees.map((employee) => (
                            <Col size="s12 m4" key={employee.login.uuid}>
                                <EmployeeCard 
                                title={employee.name.title}
                                firstName={employee.name.first}
                                lastName={employee.name.last}
                                img={employee.picture.large}
                                phone={employee.phone}
                                email={employee.email}
                                nat={employee.nat}
                                gender={employee.gender}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            
        )
    }
}

export default Directory;