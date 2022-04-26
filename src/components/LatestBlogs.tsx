import { Blog } from 'pages/blog';
import { BookOpenIcon } from '@heroicons/react/solid';

export const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
	return (
		<>
			<h3 className='my-4 text-2xl font-semibold tracking-tight text-gray-200'>Latest Posts</h3>
			<ul className='w-full divide-y divide-gray-700 rounded-md'>
				{blogs.map((blog, index) => (
					<li
						key={blog.slug}
						className={`p-4 bg-gray-800 hover:bg-gray-700 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 ${
							index === 0 ? `rounded-t-md` : index === blogs.length - 1 ? `rounded-b-md` : ``
						}`}
					>
						<a href={`blog/${blog.slug}`} className='flex flex-row gap-4 focus:outline-none'>
							<div className='flex flex-col w-full'>
								<p className='mr-3 text-lg font-medium text-gray-200'>{blog.title}</p>
								<p className='space-x-2 text-sm font-semibold text-red-600'>
									{blog.tags?.map(x => (
										<span key={x}>#{x}</span>
									))}
								</p>
								<p className='mr-3 text-base text-gray-400'>{blog.description}</p>
							</div>
							<div className='flex-col items-end justify-between hidden sm:flex'>
								<time
									dateTime={blog.publishedAt}
									className='flex items-center flex-shrink-0 text-sm font-semibold text-gray-300 whitespace-nowrap'
								>
									{blog.publishedAt}
								</time>
								<p className='flex items-center flex-shrink-0 text-sm font-semibold text-gray-300 whitespace-nowrap'>
									<BookOpenIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300' aria-hidden='true' />
									{blog.readingTime} to read
								</p>
							</div>
						</a>
					</li>
				))}
			</ul>
		</>
	);
};
