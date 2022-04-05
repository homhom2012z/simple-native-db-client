import axios from "axios";

axios.defaults.baseURL = "https://simple-native-db.herokuapp.com/api/v1";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default axios;
