import { useEffect, useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState(value);
	const [isDebouncing, setIsDebouncing] = useState(false);

	useEffect(() => {
		setIsDebouncing(true);
		const timerId = setTimeout(() => {
			setDebouncedValue(value);
			setIsDebouncing(false);
		}, delay);

		return () => {
			setIsDebouncing(false);
			clearTimeout(timerId);
		};
	}, [value, delay]);

	return { debouncedValue, isDebouncing };
};
