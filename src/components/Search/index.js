import React from "react";
import "./style.css";

function Search(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label>Search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="Employees"
          type="text"
          className="form-control"
          placeholder="Type in a name to search..."
          id="index"
        />
      </div>
    </form>
  );
}

export default Search;
