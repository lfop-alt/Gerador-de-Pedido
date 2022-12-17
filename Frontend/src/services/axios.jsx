import axios from 'axios';
import { getToken } from './auth';

const token = getToken();

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

api.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
};

export default api;
