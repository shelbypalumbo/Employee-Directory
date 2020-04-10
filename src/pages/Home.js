import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import { Link } from "react-router-dom";

// Need in packagejson "homepage": "http://shelbypalumbo.github.io/Employee-Directory/index.html",

export default class Home extends Component {
  state = {
    Employees: [],
    filteredEmployees: [],
    sortDirection: "asc"
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
      nameSort = this.state.Employees.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1) 
    direction = "dsc";
    } else {
      nameSort = this.state.Employees.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1)
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

  // filter = () => {
  //   var gender;)
  //   var filtered = this.state.filteredEmployees.map((filteredEmps, index) => {
  //     if (filteredEmps.gender === "female"){

  //     }
  // }


  render() {
    const wordBreak = {
      wordBreak: "break-all",
    }
    return (
      <div>
        <Container>
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