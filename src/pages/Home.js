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

  // sortAlphaAsc() { 
  
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

              <h3>Name</h3><hr></hr>
            </Col>
            <Col size="md-2">
              <h3>Phone</h3><hr></hr>
            </Col>
            <Col size="md-3">
              <h3>E-mail</h3><hr></hr>
            </Col>
            <Col size="md-1">
              <h3>Age</h3><hr></hr>
            </Col>
          </Row>
          {this.state.Employees.map((randomEmp, index) => {
            return (
              <Row key={index}>
                 <Col size="md-3">
                <img src={randomEmp.picture.medium} alt="profile_image"></img><hr></hr>
                </Col>
                <Col size="md-2">
                {randomEmp.name.first} {randomEmp.name.last}<hr></hr>
                </Col>
                <Col size="md-2">
                {randomEmp.phone}<hr></hr>
                </Col>
                <Col style={wordBreak} size="md-3">
                  {randomEmp.email}<hr></hr>
                </Col>
                <Col size="md-1">
                  {randomEmp.dob.age}<hr></hr>
                </Col>
              </Row>
            )
          })}
        </Container>
      </div>
    );
  }
}