import { IPerson } from 'shared/types';
import { SearchedPersonCard } from './SearchedPersonCard';

interface ISearchResults {
	searchedPeople?: IPerson[];
}

export const SearchResults = ({ searchedPeople }: ISearchResults) => {
	console.log(searchedPeople);

	return (
		<div className='mt-1'>
			<div className='absolute bg-white w-full border rounded-lg p-3 shadow max-h-80 overflow-y-auto'>
				{searchedPeople?.map(person => (
					<SearchedPersonCard person={person} key={person.name} />
				))}
			</div>
		</div>
	);
};
