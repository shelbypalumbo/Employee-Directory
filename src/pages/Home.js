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
    filteredEmployees: [],
    sortDirection: "asc",
    search: "",
    error: ""
  };

  // When component mounts, the list of random employees appear
  componentDidMount() {
    API.getRandomEmployeeList().then(employees => {
      console.log(employees);
      this.setState({
        Employees: employees.data.results,
        filteredEmployees: employees.data.results
      });
    });
  }
  // Sort employees by last name, asc and dsc order
  sortName = () => {
    var nameSort;
    var direction;
    if (this.state.sortDirection === "asc") {
      nameSort = this.state.Employees.sort((a, b) =>
        a.name.last > b.name.last ? 1 : -1
      );
      direction = "dsc";
    } else {
      nameSort = this.state.Employees.sort((a, b) =>
        a.name.last < b.name.last ? 1 : -1
      );
      direction = "asc";
    }
    this.setState({ Employees: nameSort, sortDirection: direction });
  };
  // Sort employees by age, asc and dsc order
  sortAge = () => {
    var ageSort;
    var direction;
    if (this.state.sortDirection === "asc") {
      ageSort = this.state.Employees.sort((a, b) =>
        a.dob.age > b.dob.age ? 1 : -1
      );
      direction = "dsc";
    } else {
      ageSort = this.state.Employees.sort((a, b) =>
        a.dob.age < b.dob.age ? 1 : -1
      );
      direction = "asc";
    }
    this.setState({ Employees: ageSort, sortDirection: direction });
  };

  //Employee search function
  findEmployee = () => {
    var filteredEmp;
    var filteredName = this.state.search;
    filteredEmp = this.state.Employees.filter(function(employee) {
      console.log(employee.name.first);
      console.log(filteredName);
      filteredName = filteredName.toLowerCase();
      filteredName =
        filteredName.charAt(0).toUpperCase() + filteredName.slice(1);
      return filteredName === employee.name.first;
    });
    return this.setState({ filteredEmployees: filteredEmp });
  };

  // nameSearchTimer = event => {
  //   const name = event.target.value;
  //   if (name == "") {
  //     this.setState({ filteredEmployees: this.state.Employees });
  //   } else {
  //     this.findEmployee();
  //   }
  // };

  // handleInputChange = event => {
  //   console.log(this.state.search);
  //   console.log(event.target.value);

  //   this.setState({ search: event.target.value });
  //   setTimeout(this.state.search, 60000);
  //   if (event.target.value == "") {
  //     this.setState({ filteredEmployees: this.state.Employees });
  //   } else {
  //     this.setState({ search: event.target.value }, () => {
  //       this.findEmployee();
  //     });
  //   }
  // };

  //Working portion
  handleInputChange = event => {
    console.log(event.target.value);
    console.log(this.state.search);
    if (event.target.value == "") {
      this.setState({ filteredEmployees: this.state.Employees });
    } else {
      this.setState({ search: event.target.value }, () => {
        this.findEmployee();
      });
    }
  };

  render() {
    const wordBreak = {
      wordBreak: "break-all"
    };
    return (
      <div>
        <Container>
          <Row>
            <Search
              findEmployee={this.findEmployee}
              handleInputChange={this.handleInputChange}
              Employees={this.state.Employees}
            />
          </Row>
          <Row>
            <Col size="md-3">
              <h3>Image</h3>
              <hr></hr>
            </Col>
            <Col size="md-2">
              <h3>
                Name{" "}
                <button onClick={this.sortName}>
                  <i className="fas fa-caret-down"></i>
                </button>
              </h3>
              <hr></hr>
            </Col>
            <Col size="md-2">
              <h3>Phone</h3>
              <hr></hr>
            </Col>
            <Col size="md-3">
              <h3>E-mail</h3>
              <hr></hr>
            </Col>
            <Col size="md-2">
              <h3>
                Age{" "}
                <button onClick={this.sortAge}>
                  <i className="fas fa-caret-down"></i>
                </button>
              </h3>
              <hr></hr>
            </Col>
          </Row>
          {this.state.filteredEmployees.map((randomEmp, index) => {
            return (
              <Row key={index}>
                <Col size="md-3">
                  <img
                    src={randomEmp.picture.medium}
                    alt="employee_image"
                  ></img>
                </Col>
                <Col size="md-2">
                  {randomEmp.name.last}, {randomEmp.name.first}
                </Col>
                <Col size="md-2">{randomEmp.phone}</Col>
                <Col style={wordBreak} size="md-3">
                  <Link to={"/"}>{randomEmp.email}</Link>
                </Col>
                <Col size="md-2">{randomEmp.dob.age}</Col>
              </Row>
            );
          })}
        </Container>
      </div>
    );
  }
}
