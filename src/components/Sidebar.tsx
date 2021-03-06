import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useStore } from '@utils/store';
import { navItems } from './Header';
import NextLink from 'next/link';

export const Sidebar = () => {
	const isOpen = useStore(state => state.sidebarIsOpen);
	const setIsOpen = useStore(state => state.setSidebarIsOpen);
	const initialFocusRef = React.useRef(null);

	return (
		<Transition.Root show={isOpen} as={React.Fragment}>
			<Dialog as='div' initialFocus={initialFocusRef} static className='fixed inset-0 overflow-hidden' open={isOpen} onClose={setIsOpen}>
				<div className='absolute inset-0 overflow-hidden'>
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
					<div className='fixed inset-y-0 left-0 flex max-w-full pr-36'>
						<Transition.Child
							as={React.Fragment}
							enter='transform transition ease-in-out duration-500 sm:duration-700'
							enterFrom='-translate-x-full'
							enterTo='translate-x-0'
							leave='transform transition ease-in-out duration-500 sm:duration-700'
							leaveFrom='translate-x-0'
							leaveTo='-translate-x-full'
						>
							<Dialog.Panel
								className='relative flex flex-col items-end w-screen max-w-xs mt-1 text-gray-200 bg-gray-900'
								style={{ overflow: `hidden` }}
							>
								<div className='p-2'>
									<button
										className='block p-2 font-medium text-center transition duration-150 ease-in-out rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
										onClick={() => setIsOpen(false)}
										ref={initialFocusRef}
									>
										<span className='sr-only'>Close sidebar nav</span>
										<XIcon className='w-6 h-6' aria-hidden='true' />
									</button>
								</div>
								<div className='flex flex-col items-end w-full h-full px-3 pt-2 space-y-4 text-right'>
									{[{ title: `Home`, href: `/` }].concat(navItems).map(x => (
										<NextLink href={x.href} key={x.title}>
											<a
												href={x.href}
												className='p-2 font-medium text-center text-gray-200 transition duration-150 ease-in-out rounded-md sm:mx-2 lg:px-4 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
												onClick={() => setIsOpen(false)}
											>
												{x.title}
											</a>
										</NextLink>
									))}
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
};
