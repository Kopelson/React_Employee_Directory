import React from "react";
import Table from "./Table";
import search from "../components/utils/API";

class Employee extends React.Component {
    state = {
        results: []
      };
    
    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
    this.queryRandomUserAPI();
    }

    queryRandomUserAPI = () => {
        search()
        .then(res => this.setState({ results: res.data.results }))
          .catch(err => console.log(err));
      };
    render(){
        // console.log("Results from Random Employee API: " + this.state.results)
        return (
            <div className="container-fluid">
                <Table results={this.state.results} />
            </div>
        );   
    }   
}

export default Employee;