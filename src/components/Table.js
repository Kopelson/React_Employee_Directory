import React from "react";
import Tbody from "./Tbody";
//This creates a table that the random users will be entered into and sets the table head for the different columns 
function Table(props) {
    return (
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Picture</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Location</th>
            </tr>
        </thead>
        <Tbody 
        results={props.results} key={props.results.email}
        />
        </table>
    );
}

export default Table;