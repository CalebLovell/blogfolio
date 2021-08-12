import { PageWrapper } from '@components/PageWrapper';

export default function Home() {
	return (
		<PageWrapper>
			<main className='px-5 min-h-content flex flex-col items-center'>
				<section className='w-full flex flex-col py-8 space-y-8'>
					<h1 className='text-4xl font-extrabold text-gray-200 sm:text-5xl md:text-6xl'>Hey there! i&apos;m caleb lovell</h1>
					<p className='text-base text-gray-200 sm:text-lg md:text-xl '>
						I&apos;m a freelance web and mobile engineer that loves building beautiful, accessible applications. When I&apos;m not tinkering on
						projects, you can find me reading, learning languages, traveling or hiking in the mountains.
					</p>
				</section>
			</main>
		</PageWrapper>
	);
}
