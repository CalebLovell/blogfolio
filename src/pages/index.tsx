import { LatestBlogs } from '@components/LatestBlogs';
import { HeroSection } from '@components/HeroSection';
import { PageWrapper } from '@components/PageWrapper';
import { ProfileCard } from '@components/ProfileCard';
import { getAllPostsMeta } from '@utils/mdx';
import { TechList } from '@components/TechList';

export default function Home({ blogs }) {
	return (
		<PageWrapper>
			<div className='px-3 md:px-5'>
				<div className='flex justify-center'>
					<ProfileCard />
				</div>
				<HeroSection
					title="Hey there! I'm Caleb Lovell"
					subtitle='As a dev, I love building beautiful, accessible applications. But in my free you can find me reading, learning languages, traveling or hiking in the mountains!'
				/>
				<section className='flex flex-col items-center'>
					<div className='w-full'>
						<LatestBlogs blogs={blogs} />
					</div>
					<div className='w-full'>
						<TechList />
					</div>
				</section>
			</div>
		</PageWrapper>
	);
}

export const getStaticProps = () => {
	const allBlogs = getAllPostsMeta();
	return {
		props: {
			blogs: allBlogs?.slice(0, 2),
		},
	};
};
