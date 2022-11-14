import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.30.11:8000/Apirest/",
}); 

// module.exports = {
//      API_URL : "http://192.168.100.11:8000/Apirest/" ,
// }
// export const API_URL = "http://192.168.100.11:8000/Apirest/";