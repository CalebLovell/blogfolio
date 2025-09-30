import { ChatIcon, FolderOpenIcon, MapIcon, MusicNoteIcon } from '@heroicons/react/outline';

const sections = [
	{
		title: `My Portfolio`,
		href: `/portfolio`,
		icon: <FolderOpenIcon className='w-6 h-6' />,
	},
	{
		title: `My Travel Map`,
		href: `/personal/map`,
		icon: <MapIcon className='w-6 h-6' />,
	},
	{
		title: `Music Playlists`,
		href: `/personal/music`,
		icon: <MusicNoteIcon className='w-6 h-6' />,
	},
	{
		title: `Say Hi`,
		href: `/contact`,
		icon: <ChatIcon className='w-6 h-6' />,
	},
];

export const MobilePagesSection = () => {
	return (
		<div className='w-full block sm:hidden'>
			<h3 className='mt-4 text-2xl font-semibold tracking-tight text-gray-200'>Personal Stuff</h3>
			<p className='mt-1 text-gray-400 font-semibold text-sm mb-4'>Check out some of my pages below!</p>
			<ul className='grid grid-cols-2 text-red-400 sm:grid-cols-4 gap-x-4 gap-y-4'>
				{sections.map(x => (
					<a
						key={x.title}
						href={x.href}
						className='flex flex-col items-center justify-center w-full h-full px-1 py-4 bg-gray-800 rounded-md transition duration-75 ease-in-out hover:scale-110 hover:bg-gray-700'
					>
						{x.icon}
						<p className='mt-2 font-semibold text-center text-gray-200'>{x.title}</p>
					</a>
				))}
			</ul>
		</div>
	);
};
