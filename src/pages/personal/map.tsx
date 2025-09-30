import { HeroSection } from '@components/HeroSection';
import { PageWrapper } from '@components/PageWrapper';

const metadata = {
	title: `Travel Map`,
	description: `View some of the places I have lived and visited around the world.`,
};

export default function Map() {
	return (
		<PageWrapper metadata={metadata}>
			<div className='px-3 md:px-5' style={{ height: `100%` }}>
				<HeroSection title='Travel Map' subtitle='Map of the places I have lived and visited around the world' />
			</div>
			<iframe
				title='Caleb Travel Map'
				className='flex-[1] h-full w-full px-5'
				src='https://www.google.com/maps/d/u/0/embed?mid=167-Kh7ny79B95iTaVltaQkWJMGA9K0zd&ehbc=2E312F'
			></iframe>
		</PageWrapper>
	);
}
