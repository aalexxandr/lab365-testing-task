import { IPerson } from './types';

export const favoriteCondition = (favoritePerson: IPerson, person: IPerson) =>
	favoritePerson.name === person.name &&
	favoritePerson.created === person.created;

export const getPersonId = (personUrl: string) => {
	const personUrlArr = personUrl.split('/');
	const personId = personUrlArr[personUrlArr.length - 2];

	return personId;
};
