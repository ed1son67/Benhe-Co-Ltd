import axios from 'axios';

export const IP = '/api';

const baseAxios = axios.create({
	baseURL: IP
})

export const myAxios = {
    getBanner: () => baseAxios.post('product/querybanner'),
    setBanner: () => baseAxios.post('admin/updatebanner'),
    login: (userName, password) => baseAxios.post('admin/login', {userName: userName, password: password}),


};


