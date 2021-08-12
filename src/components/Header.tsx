import * as React from 'react';
import NextLink from 'next/link';

const nav = [`Blog`, `Projects`, `Contact Me`];

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
					<NextLink href={`/${x}`} key={x}>
						<a
							href={`/${x}`}
							className='text-gray-200 p-2 mx-2 font-medium transition duration-150 ease-in-out lg:px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
						>
							{x}
						</a>
					</NextLink>
				))}
			</nav>
		</header>
	);
};
