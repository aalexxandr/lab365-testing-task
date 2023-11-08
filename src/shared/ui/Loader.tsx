interface LoadedProps {
	w: string;
	h: string;
}

export const Loader = ({ w, h }: LoadedProps) => {
	return (
		<>
			<span
				className={`animate-spin inline-block border-[3px] border-current border-t-transparent text-blue-600 rounded-full w-${w} h-${h}`}
				role='status'
				aria-label='loading'
			>
				<span className='sr-only'>Loading...</span>
			</span>
		</>
	);
};
