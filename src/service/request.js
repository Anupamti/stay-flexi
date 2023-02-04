import axios from "axios";
import { toast } from "react-toastify";

const requestInstance = axios.create();

// Configuration can be invoked here before every request we make by axios
// Add a request interceptor
requestInstance.interceptors.request.use(
    (config) => {
        const connection = navigator.onLine;
        if (connection === false) {
            alert("No Internet Connection");
            return false;
        }
        config.baseURL = process.env.REACT_APP_API

        // get Data from cookies and pass it in Authorization
        /* const token = getTokenFromCookies()
           config.headers = { Authorization: `Bearer ${token}` }; */

        return config;
    },
    (error) => {
        alert(error);
        return Promise.reject(error);
    }
);

// Add a response interceptor
requestInstance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (error.message === "Network Error") {
            // alert("network error");
            toast.error(error.message);
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default requestInstance;
