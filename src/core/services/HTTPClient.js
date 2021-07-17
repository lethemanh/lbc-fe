import axios from 'axios';
import { useHistory } from "react-router-dom";

const instance = axios.create();
instance.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.token = token
    }
    return config;
  },
  error => {
    return Promise.reject(error)
  }
);

instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      const history = useHistory();
      history.push('/login');
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  },
);

export default instance;
