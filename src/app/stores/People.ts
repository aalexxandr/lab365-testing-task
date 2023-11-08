import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getPeople, getPerson, searchPeople } from 'shared/api/people';
import {
	getFavoritePeopleStorage,
	setFavoritePeople,
} from 'shared/api/localStorage';
import { IPerson, IResponse } from 'shared/types';
import { favoriteCondition } from 'shared/helpers';

class PeopleStore {
	people?: IPromiseBasedObservable<IResponse<IPerson[]>>;
	favoritePeople: IPerson[];
	searchedPeople?: IPromiseBasedObservable<IResponse<IPerson[]>>;
	person?: IPromiseBasedObservable<IPerson>;

	constructor() {
		this.favoritePeople = [];
		makeAutoObservable(this);
	}

	getPeople = (page: number) => {
		const peopleRes = fromPromise<IResponse<IPerson[]>>(getPeople(page));
		this.people = peopleRes;
	};

	searchPeople = (name: string) => {
		const peopleRes = fromPromise<IResponse<IPerson[]>>(searchPeople(name));
		this.searchedPeople = peopleRes;
	};

	getFavoritePeople = () => {
		this.favoritePeople = getFavoritePeopleStorage();
	};

	onToggleFavorite = (person: IPerson) => {
		const favoritePeople = getFavoritePeopleStorage();

		const isFavoritePerson = favoritePeople.some(favoritePerson =>
			favoriteCondition(favoritePerson, person)
		);

		if (isFavoritePerson) {
			const favoriteIndex = favoritePeople.findIndex(favoritePerson =>
				favoriteCondition(favoritePerson, person)
			);
			favoritePeople.splice(favoriteIndex, 1);
			this.favoritePeople.splice(favoriteIndex, 1);
			setFavoritePeople(favoritePeople);
		} else {
			this.favoritePeople.push(person);
			setFavoritePeople([...favoritePeople, person]);
		}
	};

	getPerson = (id: number) => {
		this.person = fromPromise<IPerson>(getPerson(id));
	};
}

export default new PeopleStore();
