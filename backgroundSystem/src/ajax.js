import axios from 'axios';

export const IP = '/api';

export const myAxios = axios.create({
    baseURL: IP
});