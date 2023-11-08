import { useSearchParams } from 'react-router-dom';
import { PeopleTable } from 'entities/PeopleTable';
import PeopleStore from 'app/stores/people';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { IPerson, IResponse } from 'shared/types';
import { toJS } from 'mobx';
import { PeopleSearch } from 'features/PeopleSearch';

export const AllPeopleTable = observer(() => {
	const [searchParams, setSearchParam] = useSearchParams('page=1');
	const page = Number(searchParams.get('page'));

	const setPage = (pageNumber: number) => {
		setSearchParam(`page=${pageNumber}`);
	};

	const {
		people,
		getPeople,
		onToggleFavorite,
		getFavoritePeople,
		favoritePeople,
		searchPeople,
		searchedPeople,
	} = PeopleStore;

	const peopleRes = people?.value as IResponse<IPerson[]> | undefined;
	const searchedPeopleRes = searchedPeople?.value as
		| IResponse<IPerson[]>
		| undefined;

	useEffect(() => {
		getPeople(page);
	}, [page, getPeople]);

	useEffect(() => {
		getFavoritePeople();
	}, [getFavoritePeople]);

	return (
		<div className='mt-10'>
			<PeopleSearch
				isPending={searchedPeople?.state === 'pending'}
				searchPeople={searchPeople}
				searchedPeople={searchedPeopleRes?.results}
			/>

			<PeopleTable
				page={page}
				setPage={setPage}
				isPending={people?.state === 'pending'}
				peopleData={peopleRes?.results}
				peopleDataCount={peopleRes?.count}
				favoritePeople={toJS(favoritePeople)}
				onToggleFavorite={onToggleFavorite}
			/>
		</div>
	);
});
