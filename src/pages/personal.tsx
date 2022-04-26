import { HeroSection } from '@components/HeroSection';
import { PageWrapper } from '@components/PageWrapper';

export default function Personal({}) {
	return (
		<PageWrapper>
			<div className='px-3 md:px-5' style={{ height: `100%` }}>
				<HeroSection title='Personal' subtitle='Learn a little bit more about me' />
				<section className='w-full'>
					<h3 className='my-4 text-xl font-bold text-gray-200'>Travel Map</h3>
				</section>
			</div>
			<iframe
				title='Caleb Travel Map'
				className='flex-[1] h-full w-full px-5'
				src='https://www.google.com/maps/d/u/0/embed?mid=167-Kh7ny79B95iTaVltaQkWJMGA9K0zd&ehbc=2E312F'
			></iframe>
		</PageWrapper>
	);
}
