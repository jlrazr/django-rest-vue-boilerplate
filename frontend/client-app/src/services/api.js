import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: `https://www.boredapi.com/api/`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}
