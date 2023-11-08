import { useParams } from 'react-router-dom';
import { PersonCard } from 'widgets/PersonCard';
import PeopleStore from 'app/stores/people';
import { useEffect } from 'react';
import { IPerson } from 'shared/types';
import { observer } from 'mobx-react-lite';

export const Person = observer(() => {
	const { id } = useParams();
	const { getPerson, person } = PeopleStore;

	const personRes = person?.value as IPerson | undefined;

	useEffect(() => {
		getPerson(Number(id));
	}, [getPerson, id]);

	return (
		<PersonCard
			person={personRes}
			isPending={person?.state === 'pending'}
			isFulfilled={person?.state === 'fulfilled'}
		/>
	);
});
