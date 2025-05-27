import axios from "axios";

const instance = axios.create({
     baseURL:"https://netkhoj.com/dstarena/dashboard/",
});

export default instance;