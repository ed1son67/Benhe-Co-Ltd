import axios from 'axios';

export const IP = '/api';

const baseAxios = axios.create({
	baseURL: IP
})

export const myAxios = {
    /**
     * 获得当前的banner图片
     */
    getBanner: () => baseAxios.post('product/querybanner'),
    /**
     * 设置当前的banner图片
     */
    setBanner: () => baseAxios.post('admin/updatebanner'),
    /**
     * 登陆模块
     */
    login: (userName, password) => baseAxios.post('admin/login', {userName: userName, password: password}),
    /**
     * 获得产品详细参数
     */
    getProductDetail: (id, lan = "") => baseAxios.post(lan + 'product/querydetail', {id: id}),
    /**
     * 获取所有的产品
     */
    getAllProducts: (page, barnd, lan = '') => baseAxios.post(lan + 'product/queryall', {numbersPerPage: 12, offSet: page, trademark: barnd}),
    /**
     * 删除某个产品
     */
    deleteProduct: (id, lan = "") => baseAxios.post(lan + 'admin/deleteproduct', {id: id}),
    /**
     * 修改产品参数
     */
    modifyProduct: (data, lan="") => baseAxios.post(lan + 'admin/modifyproduct', data, { headers: {'Content-Type': 'multipart/form-data'}}),
    /**
     * 上传一个产品
     */
    uploadProduct: (data, lan="") => baseAxios.post(lan + 'admin/addproduct', data, { headers: {'Content-Type': 'multipart/form-data'}}),
};


