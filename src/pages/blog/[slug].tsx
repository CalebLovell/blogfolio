import { getAllPostsMeta, getPostBySlug } from '@utils/mdx';
import { MdxComponents } from '@components/MdxComponents';
import { getMDXComponent } from 'mdx-bundler/client';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { PageWrapper } from '@components/PageWrapper';

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

export default function PostPage({ meta, code }) {
	// This is a bit weird, but this is how mdx-bundler recommends it.
	const Component = React.useMemo(() => getMDXComponent(code), [code]);

	return (
		<PageWrapper>
			<div className='container max-w-3xl px-4 mx-auto mt-36'>
				<h1 className='text-2xl font-bold md:text-4xl'>{meta.title}</h1>

				<div className='flex items-center mt-4 space-x-2 text-gray-500'>
					<Image src='/avatar.jpg' height={24} width={24} className='rounded-full' />

					<div>Caleb Lovell</div>

					<div className='text-gray-300'>&middot;</div>

					<div>a date goes here</div>
				</div>

				{meta.image ? (
					<div className='mt-10 overflow-hidden rounded-2xl text-[0px]'>
						<Image src={`/${meta.image}`} width={1920} height={960} />
					</div>
				) : null}

				<div className='mt-10 text-gray-900'>
					<Component components={MdxComponents} />
				</div>

				<div className='flex justify-center mt-16 space-x-8'>{meta.source ? <button>View Source Code</button> : null}</div>
			</div>
		</PageWrapper>
	);
}
