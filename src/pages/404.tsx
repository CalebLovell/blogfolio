import { PageWrapper } from '@components/PageWrapper';

const Custom404 = () => {
	return (
		<PageWrapper>
			<main className='bg-gray-900 flex items-center justify-center min-h-content'>
				<div className='flex flex-col items-center justify-center w-full h-full sm:flex-row'>
					<h1 className='pb-4 mb-4 text-4xl border-b-2 sm:mb-0 sm:pb-0 sm:pr-4 sm:border-b-0 sm:border-r-2 text-gray-200'>Error 404</h1>
					<h2 className='text-xl sm:ml-4 text-gray-200'>Page Not Found</h2>
				</div>
			</main>
		</PageWrapper>
	);
};

export default Custom404;
