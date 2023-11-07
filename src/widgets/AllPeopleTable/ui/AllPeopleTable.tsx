import { usePeople } from 'shared/api/people';
import { useSearchParams } from 'react-router-dom';
import { PeopleTable } from 'entities/PeopleTable';

export const AllPeopleTable = () => {
	const [searchParams, setSearchParam] = useSearchParams('page=1');
	const page = Number(searchParams.get('page'));

	const setPage = (pageNumber: number) => {
		setSearchParam(`page=${pageNumber}`);
	};

	const { getPeople } = usePeople();
	const { data, isPending } = getPeople(Number(searchParams.get('page')));

	return (
		<div className='flex flex-col mt-10'>
			<PeopleTable
				page={page}
				setPage={setPage}
				isPending={isPending}
				peopleData={data?.results}
				peopleDataCount={data?.count}
			/>
		</div>
	);
};
