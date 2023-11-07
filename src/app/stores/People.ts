import { makeAutoObservable } from 'mobx';
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils';
import { getPeople } from 'shared/api/people';

class PeopleStore {
	people?: IPromiseBasedObservable<IResponse<IPerson>>;

	constructor() {
		makeAutoObservable(this);
	}

	getPeople = (page: number) => {
		this.people = fromPromise<IResponse<IPerson>>(getPeople(page));
	};
}

export default new PeopleStore();
