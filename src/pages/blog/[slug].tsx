import { getAllPostsMeta, getPostBySlug } from '@utils/mdx';
import { GetStaticProps } from 'next';
import { PageWrapper } from '@components/PageWrapper';
import { Blog } from 'pages/blog';
import { BlogArticle } from '@components/BlogArticle';

export const getStaticPaths = () => {
	const posts = getAllPostsMeta();
	const paths = posts.map(({ slug }) => ({ params: { slug } }));

	return {
		paths: paths,
		// Return 404 page if path is not returned by getStaticPaths
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async context => {
	const slug = context.params?.slug as string;
	const post = await getPostBySlug(slug);

	return { props: post };
};

export default function BlogPage({ meta, code }: { meta: Blog; code: any }) {
	const metadata = {
		title: meta.title,
		description: meta.description,
		image: `/${meta.image.url.substring(2)}`,
	};

	return (
		<PageWrapper metadata={metadata}>
			<BlogArticle meta={meta} code={code} />
		</PageWrapper>
	);
}
