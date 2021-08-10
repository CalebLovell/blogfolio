import * as React from 'react';

// import { AboutDropdown } from './AboutDropdown';
// import { DarkModeButton } from './DarkModeButton';
// import { Link } from './Link';
// import { Logo } from './Logo';
// import { MobileMenuButton } from './MobileMenuButton';

// import { LanguageButton } from './LanguageButton';

export const Header = () => {
	return (
		<>
			<div className='h-1 bg-brand-gradient' />
			<header className='container flex items-center justify-center shadow-md h-14 bg-brand-secondary'>
				<div className='w-full max-w-7xl'>
					<div className='flex items-center justify-between h-full md:hidden'>
						{/* <MobileMenuButton /> */}
						<div className='flex items-center space-x-2'>
							{/* <LanguageButton /> */}
							{/* <DarkModeButton /> */}
							<h2>HI</h2>
						</div>
					</div>
					<nav className='items-center justify-between hidden h-full md:flex'>
						<div className='flex items-center md:space-x-2'>
							{/* <Logo label={common(`navigation.website.home.title`)} /> */}
							{/* <Link href='/create' label='TEST' variant='link' />
							<Link href='/polls' label='TEST' variant='link' />
							<AboutDropdown /> */}
							<h2>HI</h2>
						</div>
						<div className='flex items-center md:space-x-2 xl:space-x-10'>
							<div className='flex items-center space-x-2'>
								{/* <LanguageButton /> */}
								{/* <DarkModeButton /> */}
							</div>
							<div className='flex items-center md:space-x-2'>
								<h2>HI</h2>
								{/* <Link href='/login' label='TEST' variant='link' />
								<Link href='/signup' label='TEST' variant='button' /> */}
							</div>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
};
