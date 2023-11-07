import { FAVORITE_PEOPLE_STORAGE } from 'shared/constants';
import { IPerson } from 'shared/types';

export const getFavoritePeopleStorage = (): IPerson[] => {
	const favoritePeople = localStorage.getItem(FAVORITE_PEOPLE_STORAGE);
	return favoritePeople ? JSON.parse(favoritePeople) : [];
};

export const setFavoritePeople = (favoritePeople: IPerson[]) => {
	localStorage.setItem(FAVORITE_PEOPLE_STORAGE, JSON.stringify(favoritePeople));
};
