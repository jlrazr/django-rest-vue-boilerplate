import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_APP_API_BASE}`,
    // headers: {
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // }
})

axiosInstance.interceptors.response.use(function (response) {
    return response;
})

axiosInstance.interceptors.response.use(undefined, function (error) {
    if (error.response.status === 401) {
        console.log(error.response.status)
    }
    return error;
})

export default axiosInstance;