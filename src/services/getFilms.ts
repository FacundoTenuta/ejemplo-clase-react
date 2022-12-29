import axiosInstance from './axios';

export const getFilms = async () => {
	const result = await axiosInstance.get(
		'/movie/popular?api_key=17ad847e1b98691f4937195ec27bbd87'
	);
	return result.data;
};
