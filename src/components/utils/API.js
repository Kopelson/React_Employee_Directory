import axios from "axios";
//Initialize BASEURL variable that stores the URL to get 100 random users
const BASEURL = "https://randomuser.me/api/?results=100";
//This returns an axios get request using the BASEURL variable
function search() {
    return axios.get(BASEURL);
}

export default search;
