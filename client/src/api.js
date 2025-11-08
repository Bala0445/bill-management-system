import axios from 'axios';

const api = axios.create({
  baseURL: 'https://billing-management-system-1.onrender.com/api',
  timeout: 10000,
});

export default api;