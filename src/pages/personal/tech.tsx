import { HeroSection } from '@components/HeroSection';
import { PageWrapper } from '@components/PageWrapper';
import { TechList } from '@components/TechList';

const metadata = {
	title: `Caleb Lovell's Tech Stack`,
	description: `My favorite technologies, frameworks, and tools.`,
};

export default function Tech() {
	return (
		<PageWrapper metadata={metadata}>
			<HeroSection title='Tech Stack' subtitle='Check out some of the technologies I use.' />
			<TechList />
		</PageWrapper>
	);
}
