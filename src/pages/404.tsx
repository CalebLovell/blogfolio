import Link from 'next/link';
import { PageWrapper } from '@components/PageWrapper';

const Custom404 = () => {
	return (
		<PageWrapper>
			<main className='flex flex-col items-center justify-center space-y-3 text-center min-h-content'>
				<p className='text-sm font-semibold tracking-wide text-red-600 uppercase'>404 error</p>
				<h1 className='text-4xl font-extrabold text-gray-200 sm:text-5xl'>Page not found.</h1>
				<p className='text-base text-gray-500'>Sorry, we couldn’t find the page you’re looking for.</p>
				<Link href='/'>
					<a href='/' className='text-base font-medium text-red-600 hover:text-red-500'>
						Go back home<span aria-hidden='true'> &rarr;</span>
					</a>
				</Link>
			</main>
		</PageWrapper>
	);
};

export default Custom404;
