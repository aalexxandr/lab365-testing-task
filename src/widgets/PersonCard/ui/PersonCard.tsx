import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IPerson } from 'shared/types';
import PeopleStore from 'app/stores/people';
import { Loader } from 'shared/ui/Loader';
import { PersonNotFound } from './PersonNotFound';
import { PersonCard as PersonCardEntity } from 'entities/PersonCard';
import { observer } from 'mobx-react-lite';
import { favoriteCondition } from 'shared/helpers';

export const PersonCard = observer(() => {
	const { id } = useParams();
	const { getPerson, person, favoritePeople, onToggleFavorite } = PeopleStore;

	const personRes = person?.value as IPerson | undefined;

	const isPending = person?.state === 'pending';
	const isFulfilled = person?.state === 'fulfilled';

	useEffect(() => {
		getPerson(Number(id));
	}, [getPerson, id]);

	return (
		<>
			{isPending && (
				<div className='flex justify-center mt-10'>
					<Loader className='h-10 w-10' />
				</div>
			)}
			{!personRes && isFulfilled && <PersonNotFound />}

			{!!personRes && isFulfilled && (
				<PersonCardEntity
					person={personRes}
					isFavorite={favoritePeople.some(favoritePerson =>
						favoriteCondition(favoritePerson, personRes)
					)}
					onToggleFavorite={() => onToggleFavorite(personRes)}
				/>
			)}
		</>
	);
});
