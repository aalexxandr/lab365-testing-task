import { RouteProps } from 'react-router-dom';
import { Main } from 'pages/Main';
import { Favorites } from 'pages/Favorites';
import { People } from 'pages/People';
import { Person } from 'pages/Person';

enum Routes {
	MAIN = 'main',
	PEOPLE = 'people',
	PERSON = 'person',
	FAVORITES = 'favorites',
}

const RouterPaths: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.PEOPLE]: '/people',
	[Routes.PERSON]: '/people/:id',
	[Routes.FAVORITES]: '/favorites',
};

export const RoutesRU: Record<string, string> = {
	[RouterPaths.main]: 'Главная',
	[RouterPaths.people]: 'Люди',
	[RouterPaths.favorites]: 'Избранные',
};

export const RouterConfig: Record<Routes, RouteProps> = {
	[Routes.MAIN]: {
		element: <Main />,
		path: RouterPaths.main,
	},
	[Routes.PEOPLE]: {
		element: <People />,
		path: RouterPaths.people,
	},
	[Routes.PERSON]: {
		element: <Person />,
		path: RouterPaths.person,
	},
	[Routes.FAVORITES]: {
		element: <Favorites />,
		path: RouterPaths.favorites,
	},
};
