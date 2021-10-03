import { Blog } from 'pages/blog';
import { CalendarIcon, ClockIcon } from '@heroicons/react/solid';

export const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
	return (
		<ul className='w-full divide-y divide-gray-700 rounded-md'>
			{blogs.map((blog, index) => (
				<li
					key={blog.slug}
					className={`p-4 bg-gray-800 hover:bg-gray-700 focus-within:ring-2 focus-within:ring-inset focus-within:ring-red-600 ${
						index === 0 ? `rounded-t-md` : index === blogs.length - 1 ? `rounded-b-md` : ``
					}`}
				>
					<a href={`blog/${blog.slug}`} className='flex gap-4 focus:outline-none'>
						<img className='hidden lg:block object-cover h-full max-w-[11rem] rounded-md' src={blog.image.url} alt={blog.image.alt} />
						<div className='flex flex-col w-full min-h-[6rem]'>
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
								<CalendarIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300' aria-hidden='true' />
								{blog.publishedAt}
							</time>
							<p className='flex items-center flex-shrink-0 text-sm font-semibold text-gray-300 whitespace-nowrap'>
								<ClockIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-300' aria-hidden='true' />
								{blog.readingTime}
							</p>
						</div>
					</a>
				</li>
			))}
		</ul>
	);
};
