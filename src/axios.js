import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://property-module-default-rtdb.firebaseio.com/'
});

export default instance;