export const PersonNotFound = () => {
	return (
		<div className='text-center py-10 px-4 sm:px-6 lg:px-8'>
			<h1 className='block text-7xl font-bold text-gray-800 sm:text-9xl'>
				404
			</h1>
			<h1 className='block text-2xl font-bold text-white'></h1>
			<p className='mt-3 text-gray-600 dark:text-gray-400'>
				Упс, что-то пошло не так...
			</p>
			<p className='text-gray-600 dark:text-gray-400'>
				Извините, такой персонаж не найден
			</p>
		</div>
	);
};
