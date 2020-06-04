import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://appgaztaroa.firebaseio.com/'
});

export default instance;
