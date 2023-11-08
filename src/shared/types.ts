export interface IPerson {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	created: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	url: string;
}

export interface IResponse<T> {
	count: number;
	next?: string;
	previous?: string;
	results: T;
}
