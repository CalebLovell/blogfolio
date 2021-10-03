import { BlogsPreview } from '@components/BlogsPreview';
import { HeroSection } from '@components/HeroSection';
import { PageWrapper } from '@components/PageWrapper';
import { ProfileCard } from '@components/ProfileCard';
import { getAllPostsMeta } from '@utils/mdx';

export default function Home({ blogs }) {
	return (
		<PageWrapper>
			<HeroSection
				title="Hey there! I'm Caleb Lovell"
				subtitle="I'm a freelance web and mobile engineer that loves building beautiful, accessible applications. When I'm not tinkering on
					projects, you can find me reading, learning languages, traveling or hiking in the mountains."
			/>
			<section className='flex flex-col items-center'>
				<ProfileCard />
				<div className='w-full'>
					<h3 className='my-4 text-2xl font-semibold tracking-tight text-gray-200'>Latest Posts</h3>
					<BlogsPreview blogs={blogs} />
				</div>
			</section>
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
