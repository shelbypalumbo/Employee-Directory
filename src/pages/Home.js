import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";


export default class Home extends Component {
  state = {
    Employees: []

  }

  componentDidMount() {
    API.getRandomEmployeeList().then(employees => {
      console.log(employees)
      this.setState({ Employees: employees.data.results })
    })
  }

  sortAlpha() { 
  
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-2">
              <h3>Name</h3><hr></hr>
            </Col>
            <Col size="md-2">

              <h3>Location</h3><hr></hr>
            </Col>
            <Col size="md-3">
              <h3>Email</h3><hr></hr>
            </Col>
            <Col size="md-2">
              <h3>Phone</h3><hr></hr>
            </Col>
            <Col size="md-1">
              <h3>D.O.B</h3><hr></hr>
            </Col>
            <Col size="md-1">
              <h3>Gender</h3><hr></hr>
            </Col>
          </Row>
          {this.state.Employees.map((randomEmp, index) => {
            return (
              <Row key={index}>
                <Col size="md-2">
                {randomEmp.name.first} {randomEmp.name.last}<hr></hr>
                </Col>
                <Col size="md-2">
                {randomEmp.location.state}<hr></hr>
                </Col>
                <Col size="md-3">
                  {randomEmp.email}<hr></hr>
                </Col>
                <Col size="md-2">
                  {randomEmp.phone}<hr></hr>
                </Col>
                <Col size="md-1">
                  {randomEmp.dob.age}<hr></hr>
                </Col>
                <Col size="md-1">
                  {randomEmp.gender}<hr></hr>
                </Col>
              </Row>
            )
          })}
        </Container>
      </div>
    );
  }
}