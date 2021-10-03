import * as React from 'react';
import NextLink from 'next/link';

const nav = [
	{
		title: `Blog`,
		href: `/blog`,
	},
	{
		title: `Projects`,
		href: `/projects`,
	},
	{
		title: `Contact Me`,
		href: `/contact`,
	},
];

export const Header = () => {
	return (
		<header className='flex items-center justify-between p-2 sm:p-0 h-14'>
			<div className='flex items-center justify-between h-full'>
				<NextLink href='/'>
					<a
						href='/'
						className='mx-2 font-medium text-center text-gray-200 transition duration-150 ease-in-out rounded-md sm:p-2 lg:px-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
					>
						Home
					</a>
				</NextLink>
			</div>
			<nav className='flex items-center justify-between h-full'>
				{nav.map(x => (
					<NextLink href={x.href} key={x.title}>
						<a
							href={x.href}
							className='mx-2 font-medium text-center text-gray-200 transition duration-150 ease-in-out rounded-md sm:p-2 lg:px-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
						>
							{x.title}
						</a>
					</NextLink>
				))}
			</nav>
		</header>
	);
};
