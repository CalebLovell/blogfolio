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

const metadata = {
	title: `Caleb Lovell's Blog`,
	description: `Posts about tech, travel, languages, books, etc.`,
};

export default function Blog({ blogs }: { blogs: Blog[] }) {
	return (
		<PageWrapper metadata={metadata}>
			<HeroSection title='Blog' subtitle='All my articles on tech, languages, travel, etc' />
			<section className='grid gap-5 mx-3 my-4 md:mx-5 sm:grid-cols-2 lg:grid-cols-3 max-w-none'>
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
