import { CheckCircleIcon, ExclamationIcon, InformationCircleIcon, XCircleIcon, XIcon } from '@heroicons/react/solid';

import { ToastProps } from 'react-toast-notifications';
import { Transition } from '@headlessui/react';

export const Toast: React.FC<ToastProps> = ({ appearance, onDismiss, children }) => {
	return (
		<Transition
			show={true}
			enter='transform ease-out duration-300 transition'
			enterFrom='translate-y-2 opacity-0'
			enterTo='translate-y-0 opacity-100'
			leave='transition ease-in duration-100'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
		>
			<div
				role='status'
				className={`flex justify-between items-center my-2 rounded-lg border-l-4 ${getBorderColor400(appearance)} ${getBgColor100(appearance)}`}
			>
				<div className='flex items-center py-2 pl-4'>
					<div>{renderIcon(appearance)}</div>
					<p className={`mx-4 font-medium ${getTextColor400(appearance)}`}>{children}</p>
				</div>
				<div className='py-2 pr-4'>
					<button
						onClick={() => onDismiss()}
						className={`p-1 ${getBgColor100(appearance)} rounded-md ${getTextColor500(appearance)} ${getHoverBgColor100(
							appearance
						)} focus:outline-none focus:ring-2 focus:ring-offset-2 ${getFocusRingColor100(appearance)} ${getFocusRingColor600(appearance)}`}
					>
						<span className='sr-only'>Dismiss</span>
						<XIcon className='w-6 h-6' />
					</button>
				</div>
			</div>
		</Transition>
	);
};

const getBgColor100 = appearance => {
	switch (appearance) {
		case `info`:
			return `bg-blue-100`;
		case `success`:
			return `bg-green-100`;
		case `warning`:
			return `bg-yellow-100`;
		case `error`:
			return `bg-red-100`;
	}
};

const getHoverBgColor100 = appearance => {
	switch (appearance) {
		case `info`:
			return `hover:bg-blue-100`;
		case `success`:
			return `hover:bg-green-100`;
		case `warning`:
			return `hover:bg-yellow-100`;
		case `error`:
			return `hover:bg-red-100`;
	}
};

const getFocusRingColor100 = appearance => {
	switch (appearance) {
		case `info`:
			return `focus:ring-offset-bg-blue-100`;
		case `success`:
			return `focus:ring-offset-bg-green-100`;
		case `warning`:
			return `focus:ring-offset-bg-yellow-100`;
		case `error`:
			return `focus:ring-offset-bg-red-100`;
	}
};

const getFocusRingColor600 = appearance => {
	switch (appearance) {
		case `info`:
			return `focus:ring-offset-bg-blue-600`;
		case `success`:
			return `focus:ring-offset-bg-green-600`;
		case `warning`:
			return `focus:ring-offset-bg-yellow-600`;
		case `error`:
			return `focus:ring-offset-bg-red-600`;
	}
};

const getBorderColor400 = appearance => {
	switch (appearance) {
		case `info`:
			return `border-blue-400`;
		case `success`:
			return `border-green-400`;
		case `warning`:
			return `border-yellow-400`;
		case `error`:
			return `border-red-400`;
	}
};

const getTextColor400 = appearance => {
	switch (appearance) {
		case `info`:
			return `text-blue-400`;
		case `success`:
			return `text-green-400`;
		case `warning`:
			return `text-yellow-400`;
		case `error`:
			return `text-red-400`;
	}
};

const getTextColor500 = appearance => {
	switch (appearance) {
		case `info`:
			return `text-blue-500`;
		case `success`:
			return `text-green-500`;
		case `warning`:
			return `text-yellow-500`;
		case `error`:
			return `text-red-500`;
	}
};

const renderIcon = appearance => {
	switch (appearance) {
		case `info`:
			return <InformationCircleIcon className={`w-6 h-6 ${getTextColor400(appearance)}`} />;
		case `success`:
			return <CheckCircleIcon className={`w-6 h-6 ${getTextColor400(appearance)}`} />;
		case `warning`:
			return <ExclamationIcon className={`w-6 h-6 pt-0.5 ${getTextColor400(appearance)}`} />;
		case `error`:
			return <XCircleIcon className={`w-6 h-6 ${getTextColor400(appearance)}`} />;
	}
};
