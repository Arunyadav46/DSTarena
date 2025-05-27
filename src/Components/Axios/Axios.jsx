import axios from "axios";

const instance = axios.create({
     baseURL:"http://netkhoj.com/dstarena/dashboard/",
});

export default instance;