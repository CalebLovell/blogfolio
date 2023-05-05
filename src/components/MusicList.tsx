import { Youtube } from '@icons-pack/react-simple-icons';
import { MusicListType } from '@utils/music';

type Props = {
	list: MusicListType[0];
};

export const MusicList = ({ list }: Props) => {
	return (
		<section key={list.genre} className='flex flex-col w-full bg-gray-800 rounded-md'>
			<a
				href={list.youtubePlaylistUrl}
				target='_blank'
				rel='noreferrer'
				className='flex items-center justify-between p-4 transition duration-75 ease-in-out group focus-within:ring-2 focus:outline-none focus-within:ring-inset focus-within:ring-red-600 hover:bg-gray-700 hover:rounded-t-md'
			>
				<h3 className='text-2xl font-semibold tracking-tight text-gray-200'>{list.genre}</h3>
				<div className='flex justify-center items-center p-2 rounded-md group-hover:bg-gray-900 bg-gray-700'>
					<Youtube size={26} className='text-red-400 group-hover:text-red-600' />
				</div>
			</a>
			<ul className='text-sm text-gray-400 divide-y border-t border-gray-700 divide-gray-700'>
				{list.songs.map(song => (
					<li key={song.title}>
						<a
							href={song.links.youtube}
							target='_blank'
							rel='noreferrer'
							className='flex justify-between px-4 py-3 transition duration-75 ease-in-out group hover:bg-gray-700 focus-within:ring-2 focus:outline-none focus-within:ring-inset focus-within:ring-red-600'
						>
							<div className='flex'>
								<div className='pr-4'>
									<img
										className='h-12 w-12 flex-none rounded-full bg-gray-800'
										src={song.artist.url}
										alt={`${song.artist.name} profile pic`}
									/>
								</div>
								<div className='min-w-0 flex-auto'>
									<p className='text-sm font-semibold leading-6 text-white'>{song.title}</p>
									<p className='mt-1 truncate text-xs leading-5 text-gray-400'>{song.artist.name}</p>
								</div>
							</div>
							<div className='flex space-x-4'>
								<div className='hidden sm:flex sm:flex-col sm:items-end'>
									<p className='text-sm leading-6 text-white'>{song.album}</p>
									<p className='mt-1 text-xs leading-5 text-gray-400'>{song.time}</p>
								</div>
								<div className='flex justify-center items-center p-2 rounded-md group-hover:bg-gray-900 bg-gray-700'>
									<Youtube size={26} className='text-red-400 group-hover:text-red-600' />
								</div>
							</div>
						</a>
					</li>
				))}
			</ul>
		</section>
	);
};
