import React from "react";
import Tbody from "./Tbody";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
//This creates a table that the random users will be entered into and sets the table head for the different columns 
function Table(props) {
    const element = <FontAwesomeIcon icon={faSort} />
    //initialize sortedResults variable
    const sortedResults = props.results;
    //This returns the property of an object
    const simplePropertyRetriever = function(obj) {
        return obj.name.first;
    };
    //This function takes in a function that will grab a specific property from an object and array that will be sorted in ascending order
    const sortTrue = function (propertyRetriever, arr) {
        arr.sort(function (a, b) {
            const valueA = propertyRetriever(a);
            const valueB = propertyRetriever(b);
            if (valueA < valueB) {
                return -1;
            } else if (valueA > valueB) {
                return 1;
            } else {
                return 0;
            }
        });
    };
    //This function takes in a function that will grab a specific property from an object and array that will be sorted in descending order
    const sortFalse = function (propertyRetriever, arr) {
        arr.sort(function (a, b) {
            const valueA = propertyRetriever(a);
            const valueB = propertyRetriever(b);
            if (valueB < valueA) {
                return -1;
            } else if (valueB > valueA) {
                return 1;
            } else {
                return 0;
            }
        });
    };
    //This checks if the sort value is true or false and then sorts it ascending or descending order
    if(props.sort === true){
        sortTrue(simplePropertyRetriever, sortedResults);
    } else {
        sortFalse(simplePropertyRetriever, sortedResults);
    }
    //This returns a Table component
    return (
        <table className="table">
        <thead>
            <tr>
            <th scope="col">Name <button className="btn btn-light" onClick={props.handleSort}>{element}</button></th>
            <th scope="col">Picture</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Location</th>
            </tr>
        </thead>
        <Tbody 
        results={sortedResults} key={sortedResults.email}
        />
        </table>
    );
}

export default Table;