import { Dropdown } from '@components/Dropdown';
import { BookOpenIcon, ChatIcon, FolderOpenIcon, MapIcon, MenuAlt2Icon, MusicNoteIcon } from '@heroicons/react/outline';
import { useStore } from '@utils/store';
import NextLink from 'next/link';
import * as React from 'react';

export const Header = () => {
	const isOpen = useStore(state => state.sidebarIsOpen);
	const setIsOpen = useStore(state => state.setSidebarIsOpen);

	return (
		<header className='flex items-center justify-between p-2 sm:p-0 h-14'>
			<div className='items-center justify-between hidden h-full sm:flex'>
				<NextLink href='/'>
					<a
						href='/'
						className='p-2 font-medium text-center text-gray-200 transition duration-150 ease-in-out rounded-md sm:mx-2 lg:px-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
					>
						Home
					</a>
				</NextLink>
			</div>
			<nav className='flex items-center justify-between h-full'>
				<button
					className='block p-2 font-medium text-center text-gray-200 transition duration-150 ease-in-out rounded-md sm:hidden sm:mx-2 lg:px-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
					onClick={() => setIsOpen(!isOpen)}
				>
					<MenuAlt2Icon className='w-6 h-6' />
				</button>

				<div className='hidden sm:flex'>
					{desktopNavItems.map(x =>
						x.type === `link` ? (
							<NextLink href={x.href} key={x.title}>
								<a
									href={x.href}
									className='p-2 mx-1 font-medium text-center text-gray-200 transition duration-150 ease-in-out rounded-md sm:mx-2 lg:px-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
								>
									{x.title}
								</a>
							</NextLink>
						) : x.type === `dropdown` ? (
							<Dropdown title={x.title} links={x.links} key={x.title} />
						) : null
					)}
				</div>
			</nav>
		</header>
	);
};

type LinkItem = {
	type: `link`;
	title: string;
	href: string;
	icon: React.ReactNode;
};

type DropdownItem = {
	type: `dropdown`;
	title: string;
	links: {
		name: string;
		href: string;
		icon: React.ReactNode;
	}[];
};

type NavItems = Array<LinkItem | DropdownItem>;

export const desktopNavItems: NavItems = [
	{
		type: `link`,
		title: `Blog`,
		href: `/blog`,
		icon: <BookOpenIcon className='w-6 h-6' />,
	},
	{
		type: `link`,
		title: `Projects`,
		href: `/projects`,
		icon: <FolderOpenIcon className='w-6 h-6' />,
	},
	{
		type: `dropdown`,
		title: `Personal`,
		links: [
			{ name: `Travel`, href: `/personal/map`, icon: <MapIcon className='w-6 h-6' /> },
			{ name: `Music`, href: `/personal/music`, icon: <MusicNoteIcon className='w-6 h-6' /> },
		],
	},
	{
		type: `link`,
		title: `Contact`,
		href: `/contact`,
		icon: <ChatIcon className='w-6 h-6' />,
	},
];
