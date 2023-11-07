import axios from 'axios';
import { toast } from 'react-toastify';

export const getPeople = (page: number) =>
	axios
		.get(`https://swapi.dev/api/people?page=${page}`)
		.then(response => response.data)
		.catch(() => {
			toast.error('Что-то пошло не так...');
		});
