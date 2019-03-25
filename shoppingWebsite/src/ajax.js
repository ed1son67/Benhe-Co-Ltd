import axios from 'axios'

export const IP = 'http://www.flyingstars.cn:9874';  

const baseAxios = axios.create({
	baseURL: IP
})

export const myAxios = {
    getBanner() {
        return baseAxios.post( 'product/querybanner');
    },
    getHotpush(data) {
        return baseAxios.post( 'product/hotpush',data);
    },
    getAllProducts(name, lan = '') {
        return baseAxios.post( lan + 'product/queryall', {offSet: 1, numbersPerPage: 20, trademark: name});
    },
    getProductsByKind(name, kind, page, lan = '') {
        return baseAxios.post(lan + 'product/querybykind', {offSet: page, kind: kind, numbersPerPage: 20, trademark: name});
    },
    getNewProducts(name, page) {
        return baseAxios.post('product/querynew', {offSet: page, numbersPerPage: 20, trademark: name});
    },
    getProductDetail(ID) {
        return baseAxios.post('product/querydetail', {id: ID});
    }
};


