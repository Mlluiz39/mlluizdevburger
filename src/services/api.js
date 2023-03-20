import axios from 'axios'

const apiDevBurger = axios.create({
	baseURL: 'https://apinodeburger.fly.dev/'
})

apiDevBurger.interceptors.request.use(async (config) => {
	const userData = await localStorage.getItem('mlluizDevBurger:user')
	const token = userData && JSON.parse(userData).token
	config.headers.Authorization = `Bearer ${token}`
	return config
})

export default apiDevBurger
