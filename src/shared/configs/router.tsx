import { RouteProps } from 'react-router-dom';
import { Main } from 'pages/Main';
import { Favorites } from 'pages/Favorites';
import { Peoples } from 'pages/Peoples';
import { Person } from 'pages/Person';

enum Routes {
	MAIN = 'main',
	FAVORITES = 'favorites',
	PEOPLES = 'peoples',
	PERSON = 'person',
}

const RouterPaths: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.FAVORITES]: '/favorites',
	[Routes.PEOPLES]: '/peoples',
	[Routes.PERSON]: '/peoples/:id',
};

export const RouterConfig: Record<Routes, RouteProps> = {
	[Routes.MAIN]: {
		element: <Main />,
		path: RouterPaths.main,
	},
	[Routes.FAVORITES]: {
		element: <Favorites />,
		path: RouterPaths.favorites,
	},
	[Routes.PEOPLES]: {
		element: <Peoples />,
		path: RouterPaths.peoples,
	},
	[Routes.PERSON]: {
		element: <Person />,
		path: RouterPaths.person,
	},
};
