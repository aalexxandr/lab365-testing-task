import { IPerson } from 'shared/types';
import { Loader } from 'shared/ui/Loader';
import { PersonNotFound } from './PersonNotFound';

interface IPersonCardProps {
	person?: IPerson;
	isPending: boolean;
	isFulfilled: boolean;
}

export const PersonCard = ({
	person,
	isPending,
	isFulfilled,
}: IPersonCardProps) => {
	return (
		<>
			{isPending && (
				<div className='flex justify-center mt-10'>
					<Loader className='h-10 w-10' />
				</div>
			)}
			{!person && isFulfilled && <PersonNotFound />}

			{!!person && isFulfilled && (
				<ul className='list-disc list-outside space-y-5 ps-5 text-lg text-gray-800'>
					<li className='ps-2'>Имя: {person.name}</li>
					<li className='ps-2'>День рождения: {person.birth_year}</li>
					<li className='ps-2'>Цвет глаз: {person.eye_color}</li>
					<li className='ps-2'>Гендер: {person.gender}</li>
					<li className='ps-2'>Цвет волос: {person.hair_color}</li>
					<li className='ps-2'>Рост: {person.height}</li>
					<li className='ps-2'>Вес: {person.mass}</li>
					<li className='ps-2'>Цвет кожи: {person.skin_color}</li>
				</ul>
			)}
		</>
	);
};
