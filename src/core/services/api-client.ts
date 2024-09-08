import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number,
    next: string | null,
    results: T[]
}


const axiosInstance = axios.create({

    baseURL: "https://api.rawg.io/api",
    params: {
        key: '745fd4f0216743ccb7d4fbff078b07ba'
    }
})

class ApiClient<T> {

    constructor(private endpoint: string) {
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }

    get = (id: number | string) => {
        return axiosInstance.get<T>(this.endpoint + '/' + id)
            .then(res => res.data);
    }
}

export default ApiClient;