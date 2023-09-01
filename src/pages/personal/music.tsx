import { HeroSection } from '@components/HeroSection';
import { MusicList } from '@components/MusicList';
import { PageWrapper } from '@components/PageWrapper';
import { music } from '@utils/music';
import Lottie from 'lottie-react';

import beat from '../../../public/lottie/beat.json';

const metadata = {
	title: `Music Corner`,
	description: `Top 10 lists for my favorite music genres`,
};

export default function Music() {
	return (
		<PageWrapper metadata={metadata}>
			<HeroSection title='Music Corner' subtitle='A few top ten lists for my favorite music genres' />
			<div className='flex justify-center'>
				<section className='max-w-4xl w-full px-3 my-2 space-y-2 md:my-2 md:px-5 md:space-y-4'>
					{music.map((list, i) => (
						<>
							<MusicList key={list.genre} list={list} />
							{i !== music.length - 1 ? <Lottie animationData={beat} loop={true} className='h-10' /> : null}
						</>
					))}
				</section>
			</div>
		</PageWrapper>
	);
}
