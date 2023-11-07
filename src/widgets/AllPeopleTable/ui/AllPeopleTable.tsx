import { useSearchParams } from 'react-router-dom';
import { PeopleTable } from 'entities/PeopleTable';
import PeopleStore from 'app/stores/People';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { IPerson, IResponse } from 'shared/types';

export const AllPeopleTable = observer(() => {
	const [searchParams, setSearchParam] = useSearchParams('page=1');
	const page = Number(searchParams.get('page'));

	const setPage = (pageNumber: number) => {
		setSearchParam(`page=${pageNumber}`);
	};

	const { people, getPeople, onToggleFavorite } = PeopleStore;
	const peopleRes = people?.value as IResponse<IPerson> | undefined;

	useEffect(() => {
		getPeople(page);
	}, [page, getPeople]);

	return (
		<div className='flex flex-col mt-10'>
			<PeopleTable
				page={page}
				setPage={setPage}
				isPending={people?.state === 'pending'}
				peopleData={peopleRes?.results}
				peopleDataCount={peopleRes?.count}
				onToggleFavorite={onToggleFavorite}
			/>
		</div>
	);
});
