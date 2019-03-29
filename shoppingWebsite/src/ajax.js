import axios from 'axios'

export const IP = 'http://www.flyingstars.cn:9874';  

const baseAxios = axios.create({
	baseURL: IP
})

export const myAxios = {
    getBanner() {
        return baseAxios.post( 'product/querybanner');
    },
    getHotpush(data, lan = "") {
        return baseAxios.post(lan + 'product/hotpush',data);
    },
    getAllProducts(name, page, lan = '') {
        return baseAxios.post(lan + 'product/queryall', {offSet: page, numbersPerPage: 20, trademark: name});
    },
    getProductsByKind(name, kind, page, lan = '') {
        return baseAxios.post(lan + 'product/querybykind', {offSet: page, kind: kind, numbersPerPage: 20, trademark: name});
    },
    getNewProducts(name, page, lan = '') {
        return baseAxios.post(lan + 'product/querynew', {offSet: page, numbersPerPage: 20, trademark: name});
    },
    getProductDetail(ID, lan='') {
        return baseAxios.post(lan + 'product/querydetail', {id: ID});
    }
};


