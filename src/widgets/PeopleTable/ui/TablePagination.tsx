import { SetURLSearchParams } from 'react-router-dom';

interface TablePaginationProps {
	peopleData: IResponse<IPerson>;
	page: number;
	setSearchParam: SetURLSearchParams;
}

export const TablePagination = ({
	peopleData,
	page,
	setSearchParam,
}: TablePaginationProps) => {
	const totalPages =
		Math.ceil(peopleData.count / 9) - Math.ceil((peopleData.count % 9) / 9);

	const setPage = (pageNumber: number) => {
		setSearchParam(`page=${pageNumber}`);
	};
	return (
		<div className='py-1 px-4 relative'>
			<nav className='flex items-center space-x-2'>
				<a
					className='text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md'
					href='#'
				>
					<span aria-hidden='true'>«</span>
					<span className='sr-only'>Предыдущая</span>
				</a>

				{Array.from({ length: totalPages }, (_, index) => (
					<button
						key={index}
						onClick={() => setPage(index + 1)}
						className={`w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full ${
							page === index + 1
								? 'bg-blue-500 text-white hover:text-white'
								: ''
						}`}
					>
						{index + 1}
					</button>
				))}
				<a
					className='text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md'
					href='#'
				>
					<span className='sr-only'>Следующая</span>
					<span aria-hidden='true'>»</span>
				</a>
			</nav>
		</div>
	);
};
