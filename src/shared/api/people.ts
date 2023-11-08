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

export const searchPeople = (name: string): Promise<IResponse<IPerson>> =>
	axios
		.get(`https://swapi.dev/api/people/?search=${name}`)
		.then(response => response.data)
		.catch(() => {
			toast.error('Что-то пошло не так...');
		});
