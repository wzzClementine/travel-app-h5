
// api.js
import axios from 'axios';

export const fetchDatasetForHomePage = () => {
    return axios.get('/api/dataset'); // 假设 API 路径是 /api/products
};

