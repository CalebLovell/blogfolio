import { navItems } from '@components/Header';
import { Dialog, Transition } from '@headlessui/react';
import { HomeIcon, XIcon } from '@heroicons/react/outline';
import { useStore } from '@utils/store';
import NextLink from 'next/link';
import * as React from 'react';

export const Sidebar = () => {
	const isOpen = useStore(state => state.sidebarIsOpen);
	const setIsOpen = useStore(state => state.setSidebarIsOpen);
	const initialFocusRef = React.useRef(null);

	return (
		<Transition.Root show={isOpen} as={React.Fragment}>
			<Dialog as='div' initialFocus={initialFocusRef} static className='fixed inset-0 overflow-hidden' open={isOpen} onClose={setIsOpen}>
				<Transition.Child
					as={React.Fragment}
					enter='ease-in-out duration-500'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in-out duration-500'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='absolute inset-0 mt-1 transition-opacity bg-gray-700 bg-opacity-75' aria-hidden='true' />
				</Transition.Child>
				<div className='h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' />
				<div className='fixed inset-y-0 left-0 flex'>
					<Transition.Child
						as={React.Fragment}
						enter='transform transition ease-in-out duration-500'
						enterFrom='-translate-x-full'
						enterTo='translate-x-0'
						leave='transform transition ease-in-out duration-500'
						leaveFrom='translate-x-0'
						leaveTo='-translate-x-full'
					>
						<Dialog.Panel className='relative flex flex-col items-end mt-1 text-gray-200 bg-gray-900 w-80' style={{ overflow: `hidden` }}>
							<div className='flex flex-col items-end w-full h-full px-3 pt-2 space-y-4'>
								<div className='flex items-center justify-end w-full mt-2 mb-4 font-medium text-center text-gray-200'>
									<button
										onClick={() => setIsOpen(false)}
										ref={initialFocusRef}
										className='p-2 transition duration-150 ease-in-out rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
									>
										<span className='sr-only'>Close sidebar nav</span>
										<XIcon className='w-6 h-6' aria-hidden='true' />
									</button>
								</div>
								{[{ title: `Home`, href: `/`, icon: <HomeIcon className='w-6 h-6' /> }].concat(navItems).map(x => (
									<NextLink href={x.href} key={x.title}>
										<a
											href={x.href}
											className='flex items-center justify-between w-full p-2 font-medium bg-gray-800 text-center text-gray-200 transition duration-150 ease-in-out rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
											onClick={() => setIsOpen(false)}
										>
											{x.title}
											{x.icon}
										</a>
									</NextLink>
								))}
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
};
