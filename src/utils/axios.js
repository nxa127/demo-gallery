import axios from 'axios';

const unsplashURI = import.meta.env.VITE_UNSPLASH_URL;

const instance = axios.create({
  baseURL: unsplashURI,
  timeout: 10000,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Axios error:', error);
    return Promise.reject(error);
  }
);

export default instance;
