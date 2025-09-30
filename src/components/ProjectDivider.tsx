export const ProjectDivider = () => {
	return (
		<div className='relative'>
			<div className='absolute inset-0 flex items-center' aria-hidden='true'>
				<div className='w-full border-t border-gray-400' />
			</div>
			<div className='relative flex justify-center'>
				<span className='px-2 text-sm text-gray-400 bg-gray-900'>Next Project</span>
			</div>
		</div>
	);
};
