import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Search from "../components/Search";

export default class Home extends Component {
  state = {
    Employees: [],
    sortDirection: "asc",
    filteredEmployees: []
  }

  componentDidMount() {
    API.getRandomEmployeeList().then(employees => {
      console.log(employees)
      this.setState({ Employees: employees.data.results, filteredEmployees: employees.data.results })
    })
  }

  sortName = () => {
    var nameSort;
    var direction;
    if (this.state.sortDirection === "asc") {
      nameSort = this.state.Employees.sort((a, b) => (a.name.last > b.name.last) ? 1 : -1)
      direction = "dsc";
    } else {
      nameSort = this.state.Employees.sort((a, b) => (a.name.last < b.name.last) ? 1 : -1)
      direction = "asc";
    }
    this.setState({ Employees: nameSort, sortDirection: direction })
  }

  sortAge = () => {
    var ageSort;
    var direction;
    if (this.state.sortDirection === "asc") {
      ageSort = this.state.Employees.sort((a, b) => (a.dob.age > b.dob.age) ? 1 : -1)
      direction = "dsc";
    } else {
      ageSort = this.state.Employees.sort((a, b) => (a.dob.age < b.dob.age) ? 1 : -1)
      direction = "asc";
    }
    this.setState({ Employees: ageSort, sortDirection: direction })
  }

  findEmployee = () => {
    var filteredEmp;
    filteredEmp = this.state.Employees.filter(employee => employee.name.first.value)
    this.setState({ Employees: filteredEmp })
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getRandomEmployeeList(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };


  render() {
    const wordBreak = {
      wordBreak: "break-all",
    }
    return (
      <div>
        <Container>
          <Row>
            <Search/>
          </Row>
          <Row>
            <Col size="md-3">
              <h3>Image</h3><hr></hr>
            </Col>
            <Col size="md-2">
              <h3>Name <button onClick={this.sortName}><i className="fas fa-caret-down"></i></button></h3><hr></hr>
            </Col>
            <Col size="md-2">
              <h3>Phone</h3><hr></hr>
            </Col>
            <Col size="md-3">
              <h3>E-mail</h3><hr></hr>
            </Col>
            <Col size="md-2">
              <h3>Age <button onClick={this.sortAge}><i className="fas fa-caret-down"></i></button></h3><hr></hr>
            </Col>
          </Row>
          {this.state.Employees.map((randomEmp, index) => {
            return (
              <Row key={index}>
                <Col size="md-3">
                  <img src={randomEmp.picture.medium} alt="employee_image"></img>
                </Col>
                <Col size="md-2">
                  {randomEmp.name.first} {randomEmp.name.last}
                </Col>
                <Col size="md-2">
                  {randomEmp.phone}
                </Col>
                <Col style={wordBreak} size="md-3">
                  <Link to={"/"}>{randomEmp.email}</Link>
                </Col>
                <Col size="md-2">
                  {randomEmp.dob.age}
                </Col>
              </Row>
            )
          })}
        </Container>
      </div>
    );
  }
}