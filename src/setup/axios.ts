import Axios from 'axios';

export const restAxios = Axios.create({
    baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
});

restAxios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        throw new Error(error.response.data.message || '');
    },
);
