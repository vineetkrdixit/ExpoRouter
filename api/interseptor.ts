import axios from 'axios';

const header = {};
console.log(process.env.BASE_URL);

const AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: header,
});

AxiosInstance.interceptors.request.use(
    (config) => {
        console.log(config, 'config request from axios interceptor');
        return config;
    },
    (err) => {
        console.log(err, 'err request from axios interceptors');
        return err;
    },
);

AxiosInstance.interceptors.response.use(
    (data) => {
        console.log(data, 'data response from axios interceptor');
        return data;
    },
    (err) => {
        console.log(err, 'err response from axios interceptor');
        return err;
    },
);
export default AxiosInstance;
