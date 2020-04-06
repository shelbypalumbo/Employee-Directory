import React from "react";
import "./style.css";

function Navbar() {
  return (
    
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <h1 className="display-4">Employee Directory <i className="fas fa-database"></i></h1>
        </nav>
        <h4> Welcome! View and sort your list of employees below. </h4>
      </div>
    </div>

  );
}

export default Navbar;