import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getPeople } from 'shared/api/people';
import {
	getFavoritePeople,
	setFavoritePeople,
} from 'shared/helpers/localstorage';
import { IPerson, IResponse } from 'shared/types';

class PeopleStore {
	people?: IPromiseBasedObservable<IResponse<IPerson>>;
	favoritePeople: IPerson[];

	constructor() {
		this.favoritePeople = [];
		makeAutoObservable(this);
	}

	getPeople = (page: number) => {
		const peopleRes = fromPromise<IResponse<IPerson>>(getPeople(page));
		this.people = peopleRes;
	};

	onToggleFavorite = (person: IPerson) => {
		const favoriteCondition = (favoritePerson: IPerson) =>
			favoritePerson.name === person.name &&
			favoritePerson.created === person.created;

		const favoritePeople = getFavoritePeople();

		const isFavoritePerson = favoritePeople.some(favoriteCondition);

		if (isFavoritePerson) {
			const favoriteIndex = favoritePeople.findIndex(favoriteCondition);
			favoritePeople.splice(favoriteIndex, 1);
			setFavoritePeople(favoritePeople);
		} else {
			setFavoritePeople([...favoritePeople, person]);
		}
	};
}

export default new PeopleStore();
