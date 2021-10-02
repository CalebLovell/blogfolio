import { PageWrapper } from '@components/PageWrapper';

export default function Projects() {
	return (
		<PageWrapper>
			<main className='flex flex-col items-center px-5 min-h-content'>
				<section className='flex flex-col w-full py-4 space-y-4'>
					<h1 className='text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl'>Projects</h1>
					<h2 className='mt-2 text-lg text-gray-400 sm:mt-3'>A list of projects I&apos;ve built</h2>
				</section>
			</main>
		</PageWrapper>
	);
}
