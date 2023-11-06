interface IPerson {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
}

interface IResponse<T> {
	count: number;
	next?: string;
	previous?: string;
	results: T[];
}
