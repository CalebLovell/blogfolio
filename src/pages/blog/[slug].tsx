import { getAllPostsMeta, getPostBySlug } from '@utils/mdx';
import { MdxComponents } from '@components/MdxComponents';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { PageWrapper } from '@components/PageWrapper';
import { Blog } from 'pages/blog';

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

export default function PostPage({ meta, code }: { meta: Blog; code: any }) {
	// This is a bit weird, but this is how mdx-bundler recommends it.
	const Component = React.useMemo(() => getMDXComponent(code), [code]);

	const metadata = {
		title: meta.title,
		description: meta.description,
	};

	return (
		<PageWrapper metadata={metadata}>
			<div className='flex justify-center'>
				<article className='flex flex-col items-center max-w-4xl p-4 mx-3 my-2 bg-gray-800 rounded-md'>
					<header className='w-full mb-4 space-y-4'>
						<h1 className='text-3xl font-extrabold tracking-tight text-center text-gray-200 sm:text-4xl'>{meta.title}</h1>
						<h2 className='text-lg text-center text-gray-400'>{meta.description}</h2>
						<div className='flex flex-col w-full'>
							<div className='overflow-hidden rounded-md text-[0px]'>
								<Image
									src={`/${meta.image.url.substring(2)}`}
									width={1920}
									height={960}
									alt={meta.image.alt}
									placeholder='blur'
									blurDataURL={`/${meta.image.url.substring(2)}`}
								/>
							</div>
						</div>
					</header>
					<main className='w-full text-gray-200'>
						<Component components={MdxComponents} />
					</main>
					<footer className='flex flex-row items-center justify-between w-full text-sm'>
						<p className='text-center text-gray-200'>
							By Caleb Lovell
							<time dateTime={meta.publishedAt} title={meta.publishedAt}>
								&nbsp;&middot;&nbsp;{meta.publishedAt}
							</time>
						</p>
						<a
							href={`https://github.com/CalebLovell/website/blob/main/posts/${meta.slug}.mdx`}
							target='_blank'
							rel='noreferrer'
							className='flex text-center justify-center items-center px-4 py-1.5 text-sm font-medium text-gray-200 transition duration-150 ease-in-out bg-red-600 border-2 border-red-600 rounded-md lg:text-base hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-900 focus:ring-red-600'
						>
							View Source Code
						</a>
					</footer>
				</article>
			</div>
		</PageWrapper>
	);
}
