import React from "react";
import Search from "./Search"
import logo from './images/employeeIcon.PNG'
//This adds a navbar to the webpage it contains a logo, the title, and a searchbar 
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
        <img src={logo} alt="logo"/>
        <a className="navbar-brand" href="/React_Employee_Directory/">
        Employee Directory
        </a>
        <Search value={props.value} handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
      </nav>
  );
}

export default Navbar;