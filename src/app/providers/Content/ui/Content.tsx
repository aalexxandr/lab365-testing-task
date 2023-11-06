import { PropsWithChildren } from 'react';

export const Content = ({ children }: PropsWithChildren) => {
	return (
		<div className='max-w-[85rem] ml-auto mx-auto px-4 py-10'>{children}</div>
	);
};
