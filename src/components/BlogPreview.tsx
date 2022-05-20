import { Blog } from 'pages/blog';
import Image from 'next/image';

export const BlogPreview = ({ post }: { post: Blog }) => {
	return (
		<a
			className='transition duration-150 ease-in-out rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-4 focus:ring-offset-gray-800'
			href={`blog/${post.slug}`}
		>
			<article key={post.title} className='flex flex-col h-full overflow-hidden rounded-md'>
				<div className='w-full overflow-hidden'>
					<Image
						src={`/${post.image.url.substring(2)}`}
						width={360}
						height={220}
						alt={post.image.alt}
						placeholder='blur'
						blurDataURL={`/${post.image.url.substring(2)}`}
						layout='responsive'
						objectFit='cover'
					/>
				</div>
				<div className='flex flex-col justify-between flex-1 h-full p-4 bg-gray-800'>
					<section className='flex-1'>
						<p className='space-x-2 text-sm font-medium text-red-600'>
							{post.tags?.map(x => (
								<span key={x}>#{x}</span>
							))}
						</p>
						<div className='block mt-2'>
							<h1 className='text-xl font-semibold text-gray-200'>{post.title}</h1>
							<p className='mt-3 text-base text-gray-400'>{post.description}</p>
						</div>
					</section>
					<footer className='flex items-center mt-6'>
						<div className='flex items-center justify-center flex-shrink-0'>
							<span className='sr-only'>Caleb Lovell</span>
							<Image className='object-cover rounded-full' height={40} width={40} src='/profile.jpg' alt='profile' />
						</div>
						<div className='ml-3'>
							<p className='text-sm font-medium text-gray-400'>Caleb Lovell</p>
							<div className='flex space-x-1 text-sm text-gray-500'>
								<time dateTime={post.publishedAt}>{post.publishedAt}</time>
								<span aria-hidden='true'>&middot;</span>
								<span>{post.readingTime} to read</span>
							</div>
						</div>
					</footer>
				</div>
			</article>
		</a>
	);
};
