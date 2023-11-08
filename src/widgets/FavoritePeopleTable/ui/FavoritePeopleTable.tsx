import { PeopleTable } from 'entities/PeopleTable';
import { PeopleStore } from 'app/stores/people';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

export const FavoritePeopleTable = observer(() => {
	const { getFavoritePeople, favoritePeople, onToggleFavorite } = PeopleStore;

	useEffect(() => {
		getFavoritePeople();
	}, [getFavoritePeople]);

	useEffect(() => {
		getFavoritePeople();
	}, [getFavoritePeople]);

	return (
		<div className='flex flex-col mt-10'>
			{favoritePeople.length ? (
				<PeopleTable
					peopleData={toJS(favoritePeople)}
					favoritePeople={toJS(favoritePeople)}
					onToggleFavorite={onToggleFavorite}
				/>
			) : (
				<div className='text-center'>Раздел избранных пуст</div>
			)}
		</div>
	);
});
