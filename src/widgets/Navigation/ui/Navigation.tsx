import { Link } from 'react-router-dom';
import { RoutesRU } from 'shared/configs/router';

export const Navigation = () => {
	return (
		<div className='flex justify-center'>
			<ul className='text-sm text-gray-600'>
				{Object.keys(RoutesRU).map(route => {
					return (
						<li
							className='inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full text-gray-400 hover:text-gray-500'
							key={route}
						>
							<Link to={route}>{RoutesRU[route]}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
