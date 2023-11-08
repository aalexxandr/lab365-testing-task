import { IPerson } from 'shared/types';
import { SearchedPersonCard } from './SearchedPersonCard';

interface ISearchResults {
	searchedPeople?: IPerson[];
}

export const SearchResults = ({ searchedPeople }: ISearchResults) => {
	return (
		<div className='mt-1'>
			<div className='absolute bg-white w-full border rounded-lg p-3 shadow max-h-80 overflow-y-auto'>
				{searchedPeople?.length === 0 ? (
					<div className='flex justify-center'>Ничего не найдено...</div>
				) : (
					searchedPeople?.map(person => {
						return <SearchedPersonCard person={person} key={person.url} />;
					})
				)}
			</div>
		</div>
	);
};
