import { ReactComponent as ArrowIcon } from 'shared/assets/icons/Arrow.svg';
import { Link } from 'react-router-dom';
import { getPersonId } from 'shared/helpers';
import { IPerson } from 'shared/types';

interface ISearchedPersonCardProps {
	person: IPerson;
}

export const SearchedPersonCard = ({ person }: ISearchedPersonCardProps) => {
	return (
		<Link
			className='group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition mt-2'
			to={`/people/${getPersonId(person.url)}`}
		>
			<div className='p-3'>
				<div className='flex justify-between items-center'>
					<div>
						<h3 className='group-hover:text-blue-600 font-semibold text-gray-800 '>
							{person.name}
						</h3>
						<p className='text-sm text-gray-500'>
							Волосы: {person.hair_color}, Рост: {person.height}, Вес:{' '}
							{person.mass}
						</p>
					</div>
					<div className='ps-3'>
						<ArrowIcon />
					</div>
				</div>
			</div>
		</Link>
	);
};
