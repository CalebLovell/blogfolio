export const BlogPreview = ({ post }) => {
	return (
		<article key={post.title} className='flex flex-col overflow-hidden rounded-lg'>
			<div className='flex-shrink-0'>
				<img className='object-cover w-full h-48' src={post.imageUrl} alt='' />
			</div>
			<div className='flex flex-col justify-between flex-1 p-6 bg-gray-800'>
				<section className='flex-1'>
					<p className='text-sm font-medium text-red-600'>{post.category.name}</p>
					<a href={post.href} className='block mt-2'>
						<h1 className='text-xl font-semibold text-gray-200'>{post.title}</h1>
						<p className='mt-3 text-base text-gray-400'>{post.description}</p>
					</a>
				</section>
				<footer className='flex items-center mt-6 space-x-1 text-sm text-gray-400'>
					<time dateTime={post.datetime}>{post.date}</time>
					<span aria-hidden='true'>&middot;</span>
					<span>{post.readingTime} read</span>
				</footer>
			</div>
		</article>
	);
};
