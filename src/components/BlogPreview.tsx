import { Blog } from 'pages/blog';
import Image from 'next/image';

export const BlogPreview = ({ post }: { post: Blog }) => {
	return (
		<article key={post.title} className='flex flex-col overflow-hidden rounded-lg'>
			<div className='flex-shrink-0'>
				<Image src={`/${post.image.url}`} width={350} height={200} alt={post.image.alt} placeholder='blur' blurDataURL={`/${post.image.url}`} />
			</div>
			<div className='flex flex-col justify-between flex-1 p-6 bg-gray-800'>
				<section className='flex-1'>
					<p className='space-x-2 text-sm font-medium text-red-600'>
						{post.tags?.map(x => (
							<span key={x}>#{x}</span>
						))}
					</p>
					<a href={`blog/${post.slug}`} className='block mt-2'>
						<h1 className='text-xl font-semibold text-gray-200'>{post.title}</h1>
						<p className='mt-3 text-base text-gray-400'>{post.description}</p>
					</a>
				</section>
				<footer className='flex items-center mt-6 space-x-1 text-sm text-gray-400'>
					<time dateTime={post.publishedAt}>{post.publishedAt}</time>
					<span aria-hidden='true'>&middot;</span>
					<span>{post.readingTime} read</span>
				</footer>
			</div>
		</article>
	);
};
