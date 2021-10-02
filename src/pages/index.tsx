import { PageWrapper } from '@components/PageWrapper';

export default function Home() {
	return (
		<PageWrapper>
			<main className='flex flex-col items-center px-5 min-h-content'>
				<section className='flex flex-col w-full py-4 space-y-4'>
					<h1 className='text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl'>Hey there! I&apos;m Caleb Lovell</h1>
					<h2 className='mt-2 text-lg text-gray-400 sm:mt-3'>
						I&apos;m a freelance web and mobile engineer that loves building beautiful, accessible applications. When I&apos;m not tinkering on
						projects, you can find me reading, learning languages, traveling or hiking in the mountains.
					</h2>
				</section>
			</main>
		</PageWrapper>
	);
}
