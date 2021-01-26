import React from "react";
import Search from "./Search"
//This adds a navbar to the webpage it contains a logo, the title, and a searchbar 
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
        <img src="/images/employeeIcon.PNG" alt="logo"/>
        <a className="navbar-brand" href="/">
        Employee Directory
        </a>
        <Search value={props.value} handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
      </nav>
  );
}

export default Navbar;