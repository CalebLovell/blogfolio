import { PageWrapper } from "@components/PageWrapper";

export default function Home() {
	return (
		<PageWrapper>
			<main className='bg-gray-900 min-h-content flex flex-col items-center w-full text-center bg-brand-primary'>
				<section className='flex flex-col justify-center pt-2 space-y-8'>
					<h1 className='text-4xl font-extrabold text-brand-primary sm:text-5xl md:text-6xl'>
						Caleb Lovell
					</h1>
					<p className='max-w-md mx-auto text-base text-brand-secondary sm:text-lg md:text-xl md:max-w-3xl'>Stuff</p>
				</section>
			</main>
		</PageWrapper>
	);
}
