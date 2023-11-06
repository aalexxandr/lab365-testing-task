import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from 'shared/configs/router';

export const Router: FC = () => {
	return (
		<Routes>
			{Object.values(RouterConfig).map(({ element, path }) => {
				return <Route element={element} path={path} key={path} />;
			})}
		</Routes>
	);
};
