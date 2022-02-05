import axios from 'axios';

export const key = "548677f4d2b3d880b16aec8052d372e7e441a7b5";

const Api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }

})

export default Api;
