import axios from 'axios';
// ----------------------------------------------------------------------

const axiosInstance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	timeout: 30 * 1000, // 30 sec
});

export default axiosInstance;
