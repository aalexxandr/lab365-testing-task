interface LoadedProps {
	className: string;
}

export const Loader = ({ className }: LoadedProps) => {
	return (
		<>
			<span
				className={`animate-spin inline-block border-[3px] border-current border-t-transparent text-blue-600 rounded-full ${className}`}
				role='status'
				aria-label='loading'
			>
				<span className='sr-only'>Loading...</span>
			</span>
		</>
	);
};
