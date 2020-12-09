import axios from "axios";

const URL = "https://randomuser.me/api/?results=";

const API = {
    getEmployees: (num) => {
        return axios.get(URL + num);
    }
};

export default API;