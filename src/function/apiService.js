import axios from "axios";

const ApiService = {
    baseUrl: "http://localhost:3001",
    getAll: function () {
        return axios.get(this.baseUrl + "/cashflows");
    },
    getTypes: function (type) {
        return axios.get(this.baseUrl + `/cashflows?type=${type}`);
    },
};

export default ApiService;
