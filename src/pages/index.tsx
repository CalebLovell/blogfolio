import { HeroSection } from '@components/HeroSection';
import { LatestBlogs } from '@components/LatestBlogs';
import { PageWrapper } from '@components/PageWrapper';
import { ProfileCard } from '@components/ProfileCard';
import { TechList } from '@components/TechList';
import { getAllPostsMeta } from '@utils/mdx';

export default function Home({ blogs }) {
	return (
		<PageWrapper>
			<div className='px-3 md:px-5'>
				<div className='flex justify-center'>
					<ProfileCard />
				</div>
				<HeroSection
					title="Hey there! I'm Caleb Lovell"
					subtitle='As a developer, I love building beautiful, accessible apps. In my freetime, you can find me reading, learning languages, traveling or hiking in the mountains!'
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
	const blogs = getAllPostsMeta();
	const sortedBlogs = blogs.sort((a, b) => b.index - a.index);
	return {
		props: {
			blogs: sortedBlogs.slice(0, 3),
		},
	};
};
