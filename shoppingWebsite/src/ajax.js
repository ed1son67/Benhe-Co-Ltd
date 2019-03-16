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
    getAllProductsByName(name) {
        return baseAxios.post('product/queryall', {offSet: 1, numbersPerPage: 10, trademark: name});
    },
    getProductsByKind(name, kind, offSet) {
        return baseAxios.post('product/querybykind', {offSet: offSet, kind: kind, numbersPerPage: 10, trademark: name});
    },
    getNewProducts(name, offSet) {
        return baseAxios.post('product/querynew', {offSet: offSet, numbersPerPage: 10, trademark: name});
    },
    getProductDetail(ID) {
        return baseAxios.post('product/querydetail', {id: ID});
    }
};


