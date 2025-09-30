import Image from 'next/image';

export const ProfileCard = () => {
	return (
		<div className='flex items-center justify-center py-4 my-4 bg-gray-800 rounded-md w-72'>
			<Image className='object-cover rounded-full' height={60} width={60} src='/profile.jpg' alt='profile' />
			<div className='ml-4'>
				<p className='font-medium text-gray-200 text-md'>Caleb Lovell</p>
				<p className='text-sm text-gray-400 truncate'>Frontend Engineer</p>
			</div>
		</div>
	);
};
