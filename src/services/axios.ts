import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) { 
    const { 'nextauth.token': token } = parseCookies

    const api = axios.create({
        baseURL: 'http://localhost:8000'
    })


    api.interceptors.request.use(config => {
        return config
    })

    if (token) {
        api.defaults.headers['Authorization'] = `Baerer ${token}`
    }

    return api
}