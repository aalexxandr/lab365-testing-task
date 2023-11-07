export interface IPerson {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	created: string;
}

export interface IResponse<T> {
	count: number;
	next?: string;
	previous?: string;
	results: T[];
}
