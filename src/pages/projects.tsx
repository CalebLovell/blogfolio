import { PageWrapper } from '@components/PageWrapper';

export default function Projects() {
	return (
		<PageWrapper>
			<main className='px-5 min-h-content flex flex-col items-center'>
				<section className='w-full flex flex-col py-8 space-y-8'>
					<h1 className='text-4xl font-extrabold text-gray-200 sm:text-5xl md:text-6xl'>Projects</h1>
					<h2 className='text-base text-gray-200 sm:text-lg md:text-xl '>A list of projects I&apos;ve built</h2>
				</section>
			</main>
		</PageWrapper>
	);
}