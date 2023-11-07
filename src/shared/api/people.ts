import axios from 'axios';
import { toast } from 'react-toastify';
import { IPerson, IResponse } from 'shared/types';

export const getPeople = (page: number): Promise<IResponse<IPerson>> =>
	axios
		.get(`https://swapi.dev/api/people?page=${page}`)
		.then(response => response.data)
		.catch(() => {
			toast.error('Что-то пошло не так...');
		});
