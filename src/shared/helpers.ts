import { IPerson } from './types';

export const favoriteCondition = (favoritePerson: IPerson, person: IPerson) =>
	favoritePerson.name === person.name &&
	favoritePerson.created === person.created;
