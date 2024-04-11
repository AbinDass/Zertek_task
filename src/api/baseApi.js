import Axios from "axios";

const baseApi = Axios.create({
    baseURL: "https://run.mocky.io/v3/f47694b8-4d45-4c30-aed0-dd82bb4025fb",
    
});
export {baseApi}