import axios from 'axios'

const apiDevBurger = axios.create({
  baseURL: 'https://apinodeburger.fly.dev/'
})

apiDevBurger.interceptors.request.use(async (config) => {
  try {
    const userData = localStorage.getItem('mlluizDevBurger:user')
    if (!userData) {

      return config
    }
    const { token } = JSON.parse(userData)
    if (!token) {

      return config
    }

    config.headers.Authorization = `Bearer ${token}`
    return config
  } catch (error) {

    console.error(error)

    return config
  }
})

export default apiDevBurger
