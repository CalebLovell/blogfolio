export const ProfileCard = () => {
	return (
		<div className='flex items-center justify-center py-4 my-4 bg-gray-800 rounded-md w-72'>
			<img className='object-cover rounded-full w-14 h-14' src='./profile.jpg' alt='profile' />
			<div className='ml-4'>
				<p className='font-medium text-gray-200 text-md'>Caleb Lovell</p>
				<p className='text-sm text-gray-400 truncate'>Web & Mobile Developer</p>
			</div>
		</div>
	);
};
