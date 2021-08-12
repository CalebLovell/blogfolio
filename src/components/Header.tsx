import * as React from 'react';
import NextLink from 'next/link';

// import { AboutDropdown } from './AboutDropdown';
// import { DarkModeButton } from './DarkModeButton';
// import { Link } from './Link';
// import { Logo } from './Logo';
// import { MobileMenuButton } from './MobileMenuButton';

// import { LanguageButton } from './LanguageButton';

const nav = [`blog`, `projects`, `contact`];

export const Header = () => {
	return (
		<div className='bg-gray-900'>
			<div className='h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' />
			<header className='max-w-6xl mx-auto h-14 flex items-center justify-between'>
				<div className='flex items-center justify-between h-full'>
					<NextLink href='/home'>
						<a href='/home' className='text-gray-200 p-2 font-medium transition duration-150 ease-in-out rounded-md lg:px-4'>
							home
						</a>
					</NextLink>
				</div>
				<nav className='flex items-center justify-between h-full'>
					{nav.map(x => (
						<NextLink href={`/${x}`} key={x}>
							<a href={`/${x}`} className='text-gray-200 p-2 font-medium transition duration-150 ease-in-out rounded-md lg:px-4'>
								{x}
							</a>
						</NextLink>
					))}
				</nav>
			</header>
		</div>
	);
};
