import { usePeople } from 'shared/api/people';
import { Loader } from 'shared/ui/Loader';
import { TablePagination } from './TablePagination';
import { useSearchParams } from 'react-router-dom';

export const PeopleTable = () => {
	const [searchParams, setSearchParam] = useSearchParams('page=1');
	const page = Number(searchParams.get('page'));

	const { getPeople } = usePeople();
	const { data, isPending } = getPeople(Number(searchParams.get('page')));

	return (
		<div className='flex flex-col mt-10'>
			<div className='-m-1.5 overflow-x-auto'>
				<div className='p-1.5 min-w-full inline-block align-middle'>
					<div className='border rounded-lg overflow-hidden'>
						<table className='min-w-full divide-y divide-gray-200'>
							<thead>
								<tr>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
									>
										Имя
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
									>
										Рост
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
									>
										Вес
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'
									>
										Цвет волос
									</th>
								</tr>
							</thead>
							<tbody className='divide-y divide-gray-200'>
								{data?.results && (
									<>
										{data.results.map((person, index) => {
											return (
												<tr key={index}>
													<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800'>
														{person.name}
													</td>
													<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
														{person.height}
													</td>
													<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
														{person.mass}
													</td>
													<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800'>
														{person.hair_color}
													</td>
													<td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
														<a
															className='text-blue-500 hover:text-blue-700'
															href='#'
														>
															Delete
														</a>
													</td>
												</tr>
											);
										})}
									</>
								)}
							</tbody>
						</table>
						{data?.results && (
							<TablePagination
								peopleData={data}
								page={page}
								setSearchParam={setSearchParam}
							/>
						)}
						{isPending && (
							<div className='flex justify-center mb-4 mt-4'>
								<Loader />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
