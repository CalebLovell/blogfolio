import { BlogPreview } from '@components/BlogPreview';
import { HeroSection } from '@components/HeroSection';
import { PageWrapper } from '@components/PageWrapper';
import { getAllPostsMeta } from '@utils/mdx';

export interface Blog {
	title: string;
	description: string;
	slug: string;
	tags: string[];
	image: { url: string; alt: string };
	publishedAt: string;
	updatedAt: string;
	readingTime: string;
}

export default function Blog({ blogs }: { blogs: Blog[] }) {
	return (
		<PageWrapper>
			<HeroSection title='Blog' subtitle='All my articles on tech, languages, travel, etc' />
			<section className='grid max-w-lg gap-5 mx-auto my-4 lg:grid-cols-3 lg:max-w-none'>
				{blogs?.map(post => (
					<BlogPreview key={post.title} post={post} />
				))}
			</section>
		</PageWrapper>
	);
}

export const getStaticProps = () => {
	const blogs = getAllPostsMeta();
	return {
		props: {
			blogs,
		},
	};
};
