import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create();
instance.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

instance.interceptors.request.use(
  config => {
    const token = Cookies.get('token');
    if (token) {
      config.headers.Authorization = token
    }
    return config;
  },
  error => {
    return Promise.reject(error)
  }
);

instance.interceptors.response.use(
  response => response.data,
  error => {
    if (error?.response?.status === 401) {
      Cookies.remove('token');
      window.location.href = '/login';
    }
    return Promise.reject(error?.response?.data || {});
  },
);

export default instance;
