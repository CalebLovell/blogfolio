import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import * as React from 'react';

type Props = {
	title: string;
	links: {
		name: string;
		href: string;
	}[];
};

export const Dropdown = ({ title, links }: Props) => {
	return (
		<Popover className='relative'>
			{({ open }) => (
				<>
					<Popover.Button className='inline-flex items-center p-2 ml-2 text-base font-medium rounded-md text-gray-200 group hover:bg-red-600'>
						<span>{title}</span>
						<ChevronDownIcon className='w-5 h-5 ml-2 text-gray-200' aria-hidden='true' />
					</Popover.Button>
					<Transition
						show={open}
						as={React.Fragment}
						enter='transition ease-out duration-200'
						enterFrom='opacity-0 translate-y-1'
						enterTo='opacity-100 translate-y-0'
						leave='transition ease-in duration-150'
						leaveFrom='opacity-100 translate-y-0'
						leaveTo='opacity-0 translate-y-1'
					>
						<Popover.Panel static className='absolute z-10 px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0'>
							<div className='flex flex-col p-4 space-y-4 overflow-hidden rounded-lg shadow-lg bg-gray-800'>
								{links.map(item => (
									<Link href={item.href} key={item.name}>
										<a
											href={item.href}
											className='px-10 py-2 font-medium text-gray-200 transition duration-150 ease-in-out rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
										>
											<p className='text-base font-medium text-gray-200'>{item.name}</p>
										</a>
									</Link>
								))}
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
};
