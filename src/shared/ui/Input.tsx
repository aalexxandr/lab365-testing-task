import { HTMLProps } from 'react';

interface IInputProps extends HTMLProps<HTMLInputElement> {
	label: string;
}

export const Input = ({
	label,
	name,
	className,
	...otherProps
}: IInputProps) => {
	return (
		<>
			<label htmlFor={name} className='sr-only'>
				{label}
			</label>
			<input
				name={name}
				className={`p-3 border block w-full border-gray-200 text-gray-800 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 ${className}`}
				{...otherProps}
			/>
		</>
	);
};
