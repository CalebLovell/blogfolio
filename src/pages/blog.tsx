import { BlogPreview } from '@components/BlogPreview';
import { PageWrapper } from '@components/PageWrapper';
import { getAllPostsMeta } from '@utils/mdx';

export interface Blog {
	title: string;
	description: string;
	slug: string;
	category: string;
	imageUrl: string;
	publishedAt: string;
	updatedAt: string;
	readingTime: string;
}

export default function Blog({ posts }: { posts: Blog[] }) {
	return (
		<PageWrapper>
			<section className='flex flex-col items-center w-full space-y-4'>
				<h1 className='text-3xl font-extrabold tracking-tight text-gray-200 sm:text-4xl'>Blog</h1>
				<h2 className='mt-2 text-lg text-gray-400 sm:mt-3'>All my articles on tech, languages, travel, etc</h2>
			</section>
			<main className='flex flex-col px-4 py-4 my-4 space-y-4 lg:px-6 min-h-content '>
				<div className='grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none'>
					{posts.map(post => (
						<BlogPreview key={post.title} post={post} />
					))}
				</div>
			</main>
		</PageWrapper>
	);
}

export const getStaticProps = () => {
	const posts = getAllPostsMeta();
	return {
		props: {
			posts: posts,
		},
	};
};
