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
		<header className='h-14 flex items-center justify-between'>
			<div className='flex items-center justify-between h-full'>
				<NextLink href='/'>
					<a
						href='/'
						className='text-gray-200 p-2 mx-2 font-medium transition duration-150 ease-in-out lg:px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
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
							className='text-gray-200 p-2 mx-2 font-medium transition duration-150 ease-in-out lg:px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
						>
							{x.title}
						</a>
					</NextLink>
				))}
			</nav>
		</header>
	);
};
