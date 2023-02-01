import axios from "axios";

axios.defaults.baseURL = "https://simple-native-db.vercel.app/api/v1";
axios.defaults.headers.post["Content-Type"] = "application/json";

export default axios;
