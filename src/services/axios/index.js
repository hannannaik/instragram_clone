import axios from 'axios';
import {Store} from '../../../store';

const apiClient = axios.create({
  baseURL: `https://v2dev.crypto4winners.com/api`,
  // timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' }
});

axios.interceptors.request.use(request => {
  const accessToken = Store.get('accessToken');
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
    // request.headers.AccessToken = accessToken;
  }
  return request;
});

apiClient.interceptors.response.use(
  next => {
    return Promise.resolve(next);
  },
  error => {
    // You can handle error here and trigger warning message without get in the code inside
    if (error) {
      const ErrorMessage = error.response.data.message;
      if (ErrorMessage === 'details not found') {
        console.log(ErrorMessage);
      } else {
        console.log('====================================');
        console.log('ErrorMessage', ErrorMessage);
        console.log('====================================');
      }
    }
    return Promise.reject(error.response);
  },
);

export default apiClient;
