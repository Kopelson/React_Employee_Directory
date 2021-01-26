import React from "react";
import Table from "./Table";
import search from "../components/utils/API";
import Navbar from "./Navbar";

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            results: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
    this.setState({value: event.target.value});
    }

    handleSubmit(event) {
    event.preventDefault();
    }

    // When this component mounts
    componentDidMount() {
        this.queryRandomUserAPI();
    }

    queryRandomUserAPI = () => {
        search()
        .then(res => this.setState({ results: res.data.results }))
          .catch(err => console.log(err));
      };
    
    render(){
        //This sets filters the results array based checking first name, last name, email, location (city, state, country) and phone number
        let searchBarFilter = this.state.results.filter(employee => 
            employee.name.first.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
            || 
            employee.name.last.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
            ||
            employee.email.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
            ||
            employee.location.city.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
            ||
            employee.location.state.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
            ||
            employee.location.country.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
            ||
            employee.phone.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1)
        //Initialize tableResults variable    
        let tableResults;
        //Check if we are using the filter or not
        if(this.state.value === ""){
            tableResults = this.state.results;
        } else {
            tableResults = searchBarFilter;
        }
        //Return this instance of Employee.js
        return (
            <div>
            <Navbar value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <div className="container-fluid">
                <Table results={tableResults} />
            </div>
            </div>
        );
    }
}

export default Employee;