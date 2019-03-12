import axios from 'axios'

export const IP = 'http://www.flyingstars.cn:9874';  

export const myAxios = axios.create({
	baseURL: IP
})
