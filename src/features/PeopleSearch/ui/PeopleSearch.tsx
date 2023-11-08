import { Input } from 'shared/ui/Input';
import { ReactComponent as SearchIcon } from 'shared/assets/icons/Search.svg';
import { FormEvent, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { SearchResults } from './SearchResults';
import { IPerson } from 'shared/types';
import { Loader } from 'shared/ui/Loader';
import { useDebounce } from 'shared/hooks/useDebounce';

interface PeopleSearchProps {
	searchPeople: (searchValue: string) => void;
	searchedPeople?: IPerson[];
	isPending: boolean;
}

export const PeopleSearch = observer(
	({ searchPeople, searchedPeople, isPending }: PeopleSearchProps) => {
		const [searchValue, setSearchValue] = useState('');
		const { debouncedValue: debouncedSearchValue, isDebouncing } = useDebounce(
			searchValue,
			2000
		);

		const handleChange = (e: FormEvent<HTMLInputElement>) => {
			const value = e.currentTarget.value;
			setSearchValue(value);
		};

		const isShowResult =
			!!searchValue &&
			Number.isInteger(searchedPeople?.length) &&
			!isDebouncing;

		useEffect(() => {
			if (debouncedSearchValue) {
				searchPeople(debouncedSearchValue);
			}
		}, [debouncedSearchValue, searchPeople]);

		return (
			<div className='py-3'>
				<div className='relative max-w-xs'>
					<Input
						onChange={handleChange}
						value={searchValue}
						type='text'
						name='hs-table-search'
						label='Search'
						placeholder='Введите имя...'
						className='pl-10'
					/>
					<div className='absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4'>
						{isPending ? (
							<Loader w='3' h='3' />
						) : (
							<SearchIcon height='15' width='15' className='text-gray-800' />
						)}
					</div>
					{isShowResult && <SearchResults searchedPeople={searchedPeople} />}
				</div>
			</div>
		);
	}
);
