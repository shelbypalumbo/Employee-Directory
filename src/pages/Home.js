import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Container>
        <Row>
        <Col size="md-2">
            <h3>Name</h3>
            <p>render pictures
            </p>
          </Col>
          <Col size="md-2">
            <h3>Title</h3>
              <p>render titles
            </p>
            
          </Col>
          <Col size="md-2">
            <h3>Location</h3>
            <p>render locs
            </p>
          </Col>
          <Col size="md-2">
            <h3>Email</h3>
            <p>render emails
            </p>
          </Col>
          <Col size="md-2">
            <h3>Phone</h3>
            <p>render phones
            </p>
          </Col>
          <Col size="md-2">
            <h3>D.O.B</h3>
            <p>render dobs
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;





//======================================================
// sort using map?
// filter one prop by using filter?

// add for loop to each function ???

// import React, { Component } from "react";
// import Employees from "../utils/Employees";
// import Row from "../components/Row";
// import Col from "../components/Col";


// class Home extends Component {
//   state = {
//     name: ""
      // picture: ""
      // title: ""
      // location: ""
      // email: ""
      // phone: ""
      // dob: ""
//   };

//   getEmployeeData() {
//     Employees.getNames()
//       .then(res => this.setState({ name: res.data.name }))
//       .catch(err => console.log(err));

//       Employees.getNames()
//       .then(res => this.setState({ picture: res.data.picture.thumbnail }))
//       .catch(err => console.log(err));

//       Employees.getTitles()
//       .then(res => this.setState({ title: res.data.title }))
//       .catch(err => console.log(err));

//       Employees.getLocations()
//       .then(res => this.setState({ location: res.data.location}))
//       .catch(err => console.log(err));

//       Employees.getEmails()
//       .then(res => this.setState({ email: res.data.email }))
//       .catch(err => console.log(err));

//       Employees.getPhone()
//       .then(res => this.setState({ phone: res.data.phone}))
//       .catch(err => console.log(err));

//       Employees.getDOB()
//       .then(res => this.setState({ dob: res.data.dob}))
//       .catch(err => console.log(err));

//   }