import { HeroSection } from '@components/HeroSection';
import { MusicList } from '@components/MusicList';
import { PageWrapper } from '@components/PageWrapper';
import { music } from '@utils/music';

const metadata = {
	title: `Music Corner`,
	description: `Top 10 lists for my favorite music genres`,
};

export default function Music() {
	return (
		<PageWrapper metadata={metadata}>
			<HeroSection title='Music Corner' subtitle='A few top ten lists for my favorite music genres' />
			<div className='flex justify-center'>
				<section className='max-w-4xl w-full px-3 my-2 space-y-8 md:my-8 md:px-5 md:space-y-10'>
					{music.map(list => (
						<MusicList key={list.genre} list={list} />
					))}
				</section>
			</div>
		</PageWrapper>
	);
}
