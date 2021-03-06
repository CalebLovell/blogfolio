import * as React from 'react';
import NextLink from 'next/link';
import { MenuAlt2Icon } from '@heroicons/react/solid';
import { Sidebar } from './Sidebar';
import { useStore } from '@utils/store';

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
				<Sidebar />
				<div className='hidden sm:block'>
					{navItems.map(x => (
						<NextLink href={x.href} key={x.title}>
							<a
								href={x.href}
								className='p-2 mx-1 font-medium text-center text-gray-200 transition duration-150 ease-in-out rounded-md sm:mx-2 lg:px-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
							>
								{x.title}
							</a>
						</NextLink>
					))}
				</div>
			</nav>
		</header>
	);
};

export const navItems = [
	{
		title: `Blog`,
		href: `/blog`,
	},
	{
		title: `Projects`,
		href: `/projects`,
	},
	{
		title: `Travel`,
		href: `/personal/map`,
	},
	{
		title: `Contact`,
		href: `/contact`,
	},
];
