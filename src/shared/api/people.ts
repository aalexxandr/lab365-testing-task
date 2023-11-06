import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const usePeople = () => {
	const getPeople = (page: number) => {
		console.log('in request:', page);
		const { isPending, error, data } = useQuery({
			queryKey: ['people', page],
			queryFn: (): Promise<IResponse<IPerson>> =>
				axios
					.get(`https://swapi.dev/api/people?page=${page}`)
					.then(response => response.data),
		});

		useEffect(() => {
			if (error) {
				toast.error('Что-то пошло не так...');
			}
		}, [error]);
		return { isPending, error, data };
	};

	return { getPeople };
};
