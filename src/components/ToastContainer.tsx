import { ToastContainerProps } from 'react-toast-notifications';

export const ToastContainer: React.FC<ToastContainerProps> = ({ hasToasts, children }) => {
	return (
		<div
			className={`w-full flex justify-center items-center fixed bottom-0 z-50 max-h-full pb-2 overflow-hidden ${
				hasToasts ? `pointer-events-auto` : `pointer-events-none`
			}`}
		>
			<div className='w-full max-w-6xl px-3 md:px-4'>{children}</div>
		</div>
	);
};
