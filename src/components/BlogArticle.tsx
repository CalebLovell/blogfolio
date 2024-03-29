import { MdxComponents } from '@components/MdxComponents';
import { getMDXComponent } from 'mdx-bundler/client';
import NextImage from 'next/image';
import { Blog } from 'pages/blog';
import * as React from 'react';

export const BlogArticle = ({ meta, code }: { meta: Blog; code: any }) => {
	// This is a bit weird, but this is how mdx-bundler recommends it.
	const Component = React.useMemo(() => getMDXComponent(code), [code]);

	return (
		<article className='flex flex-col items-center w-full px-3 pt-10 rounded-md lg:px-6 lg:mb-20'>
			<header className='w-full mb-4 max-w-3xl space-y-4'>
				<h1 className='text-3xl font-extrabold tracking-tight text-center text-gray-200'>{meta.title}</h1>
				<h2 className='text-lg text-center text-gray-400'>{meta.description}</h2>
				<div className='flex flex-col items-center w-full py-4'>
					<div className='overflow-hidden rounded-md text-[0px] max-w-2xl'>
						<NextImage
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

			<main className='w-full max-w-3xl text-gray-200'>
				<Component components={MdxComponents} />
			</main>

			<footer className='flex max-w-3xl flex-row items-center justify-between w-full text-sm'>
				<div className='flex'>
					<div className='flex items-center justify-center flex-shrink-0'>
						<span className='sr-only'>Caleb Lovell</span>
						<NextImage className='object-cover rounded-full' height={40} width={40} src='/profile.jpg' alt='profile' />
					</div>
					<div className='ml-3'>
						<p className='text-sm font-medium text-gray-400'>Caleb Lovell</p>
						<div className='flex space-x-1 text-sm text-gray-500'>
							<time dateTime={meta.publishedAt}>{meta.publishedAt}</time>
						</div>
					</div>
				</div>
				<a
					href={`https://github.com/CalebLovell/website/blob/main/posts/${meta.slug}.mdx`}
					target='_blank'
					rel='noreferrer'
					className='flex text-center justify-center items-center px-2 py-1.5 text-sm font-medium text-gray-200 transition duration-150 ease-in-out bg-red-600 border-2 border-red-600 rounded-md hover:bg-red-700 hover:border-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-900 focus:ring-red-600'
				>
					View Source
				</a>
			</footer>
		</article>
	);
};
